---
title: OpenSSL
description: SSL certificate explainer / how to renew certificate
---

:::info

- **Recurring Task**: The OpenSSL certificates must be renewed every so often
- **Frequency**: Typically once a year, but check in AWS Certificate Manager or SSL Shopper as noted below

:::

## SSL Background

HTTPS is enabled for our API (`api.sustinability.oregonstate.edu`) via SSL certificates. It is critical that these certificates (and the certificates in our certificate chain) do not expire. If one or more certificates expire, our Acquisuite Data Acquisition Servers will not be able to connect to the Energy Dashboard data upload API endpoint. They use an older version of OpenSSL that will fail if any certificate in our certificate chain expires.

It is pretty easy to determine if a certificate expiry is causing data upload errors. Typical signs include:

- All of the Acquisuites stop uploading on the same day, at the same time (the time of certificate expiry).
- The Acquisuites continue to upload data to Leviton/Obvius BMO.
- A website, such as [this one](https://www.sslshopper.com/ssl-checker.html#hostname=api.sustainability.oregonstate.edu/), identifies a bad certificate in our cert chain.
- All of our web applications continue to operate normally (sans the real-time energy data). This is because modern browsers will ignore situations where only one certificate in the certificate chain has expired.

## When to Renew

- For the last renewal, we used AWS's built in request feature to request a public SSL certificate, you can [see their docs here](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html). It should attempt to auto-renew at 11 months, so check around August/September to see if anything is needed on our end.
- Check [SSL Shopper](https://www.sslshopper.com/ssl-checker.html#hostname=api.sustainability.oregonstate.edu/)
  - Specifically check the backend domain `api.sustainability.oregonstate.edu`. The similar-sounding `sustainability.oregonstate.edu` domain (used for our frontend) is managed by OSU
- Check AWS Certificate Manager (AWS Console > Certificate Manager > click on any certificates with Domain Name of `api.sustainability.oregonstate.edu` that is listed as `In Use`)

## Requesting Certificate Through AWS Certificate Manager

- If for some reason the auto-renewal doesn't work, request a new public SSL certificate through [AWS Certificate Manager](https://us-west-2.console.aws.amazon.com/acm/home?region=us-west-2#/certificates/list)
  - Use `api.sustainability.oregonstate.edu` as the domain name, leave everything else as-is (DNS validation and RSA 2048)
  - After clicking request, click on the newly created certificate to open the details. Export the CSV file in the `Domains` section (this contains the CNAME name and value) and send it to [OSU IT](https://mysupport.oregonstate.edu/esp?id=emp_taxonomy_topic&topic_id=05944f3897698e501b28bf98c253afc4) with a request for them to validate the CNAME, since we don't have access to it. Explain that we use this certificate for our Energy Dashboard.
- Eventually the status in the certificate details tab will change to `Issued`, after which we need to set it as the certificate for the Load Balancer and API Gateway
  - **Load Balancer**
    - Navigate to `Load Balancers` > `energy-data-api` > `Listeners and rules`
    - Check the box for the only Listener there, click `Manange listener` > `Edit Listener`
    - Scroll down to `Secure listener settings` and change the `Certificate (from ACM)` to the newly created certificate
  - **API Gateway**
    - Navigate to `API Gateway` > `Custom domain names` > `api.sustainability.oregonstate.edu`
    - Edit the `Endpoint configuration` tab
    - Choose the new certificate in the `ACM certificate` dropdown
- There should now be four resources listed under the `Associated resources` tab of the certificate details, and the Energy Dashboard should be working normally

<details>
<summary> Requesting and Manually Uploading A New Certificate (Old Version) </summary>

This is how we used to update the SSL certificate and is being left in for now in case renewing with AWS doesn't work. Keep in mind that if you go this route you'll still need to update the load balancer and API gateway as listed above.

## Requesting New Certificate

- A week or two before the SSL certificate expires, contact OSU IT via the [Certificates Request Form](https://oregonstate.teamdynamix.com/TDClient/1935/Portal/Requests/ServiceDet?ID=25521) (click "Request Service" button)
  - Add a short title and description to your certificate request as prompted; some ideas for what to put in the request description have been provided below:
  - Department: `Finance and Adminstration`
  - Service / Application / Common Name: `api.sustainability.oregonstate.edu`
  - Type of SSL Certificate: `I'm not sure which certificate I need`
  - Details / More Info: Mention something about energy-dashboard
- It's possible that the current certificate can be automatically renewed
  - In that case, IT will email you the new keys directly after you fill out the InCommon form. If so, you will need to use the [existing private key](https://drive.google.com/file/d/1GjjDfHcr4b3ADE1rZ9QH72joQaiH7uvM/view?usp=drive_link)
    - Link only accessible to OSU Sustainability Office employees
- If the current certificate can't be automatically renewed or you've lost track of the previously used private key, then you need to send a new certificate signing request (CSR) to OSU IT:
  - Install OpenSSL:
    - [Windows Install Instructions](https://www.stechies.com/installing-openssl-windows-10-11/)
    - [Mac / Linux / Windows Install Instructions](https://blog.devolutions.net/2020/09/tutorial-manually-installing-openssl-on-windows-linux-macos/)
  - Run this command after installing OpenSSL: `openssl req -new -newkey rsa:2048 -nodes -keyout api_sustainability_oregonstate_edu.key -out api_sustainability_oregonstate_edu.csr`
    - Fill in the following fields:
      - Country: `US`
      - State or Province Name: `Oregon`
      - Locality Name: Leave Blank
      - Organization Name: `Oregon State University`
      - Organizational Unit Name: Leave Blank
      - Common Name: `api.sustainability.oregonstate.edu`
      - Email Address: Leave Blank
      - Challenge Password: Leave Blank
      - Optional Company Name: Leave Blank
  - Check you did it right by running the `.csr` file through [this CSR checker](https://certlogik.com/decoder/)
  - Hold on to the `.key` file, you will need it later
  - Email the `.csr` file to OSU IT

## Uploading New Certificate

- Whether you are using auto-renewed certificates or you emailed a new CSR to OSU IT, here's what to do once they get back to you with the new certificates:
  - Download the file labeled `Certificate only, PEM encoded`
  - Download the file labeled `Certificate (w/ chain), PEM encoded`
  - Go to AWS Certificate Manager (AWS Console > Certificate Manager > click on any certificates with Domain Name of `api.sustainability.oregonstate.edu`)
  - Click "Re-Import" button for any certificates with Domain name of `api.sustainability.oregonstate.edu`
  - Copy and paste as plain text the contents of the `Certificate only, PEM encoded` file into "Certificate Body" field
  - Copy and paste as plain text the contents of the private key (refer to section above, should be labeled as `api_sustainability_oregonstate_edu.key`) into "Certificate Private Key" field
  - Copy and paste as text the contents of the `Certificate (w/ chain), PEM encoded` file into "Certificate Chain" field
  - Finish the import process. If SSL Shopper shows the expiration date as pushed forward a year afterwards, and the energy-dashboard (among other things) doesn't break, then you probably did it right

</details>

## Helpful Resources (Summary)

- SSL Shopper (check certificate expiration): https://www.sslshopper.com/ssl-checker.html#hostname=api.sustainability.oregonstate.edu/
- InCommon Form for requesting new certificate: https://is.oregonstate.edu/webform/incommon-ssl-certificate-request-preferred-ssl-option
- CSR decoder (double check, make sure you entered info correctly): https://certlogik.com/decoder/
- Guide for installing OpenSSL for Windows 10 / 11 : https://www.stechies.com/installing-openssl-windows-10-11/
- AWS Certificate Manager Documentation: https://docs.aws.amazon.com/acm/latest/userguide/import-certificate-format.html
- Info on CSR, PEM formats: https://stackoverflow.com/a/56215545
- General useful info on generating CSR: https://phoenixnap.com/kb/generate-openssl-certificate-signing-request
