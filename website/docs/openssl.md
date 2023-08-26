---
title: OpenSSL
description: SSL certificate explainer / how to renew certificate
---

:::info

- **Recurring Task**: The OpenSSL certificates must be renewed every 2 years, as noted below
- **Frequency**: Once every 2 years

:::

HTTPS is enabled for our API using SSL certificates obtained via the [InCommon SSL Certificate Request Form](https://is.oregonstate.edu/webform/incommon-ssl-certificate-request-preferred-ssl-option). This will need to be done periodically as our SSL certificates expire 2 years after they are issued.

It is critical that these certificates (and the certificates in our certificate chain) do not expire. If one or more certificates expire, our Acquisuite Data Acquisition Servers will not be able to connect to the Energy Dashboard data upload API endpoint. They use an older version of OpenSSL that will fail if any certificate in our certificate chain expires.

It is pretty easy to determine if a certificate expiry is causing data upload errors. Typical signs include:

- All of the Acquisuites stop uploading on the same day, at the same time (the time of certificate expiry).
- The Acquisuites continue to upload data to Leviton/Obvius BMO.
- A website, such as [this one](https://www.sslshopper.com/ssl-checker.html), identifies a bad certificate in our cert chain.
- All of our web applications continue to operate normally (sans the real-time energy data). This is because modern browsers will ignore situations where only one certificate in the certificate chain has expired.

To resolve these issues, generate a new private key and CSR (certificate signing request). Fill our the InCommon form and request a new certificate. You will be contacted via email and will be asked to provide the CSR. Once you have received the new certificates, upload the certificate data in AWS’s Certificate Management portal. Do not delete the private key! You’ll need to include the certificate chain in the import.

Command to generate CSR:
`openssl req -new -newkey rsa:2048 -nodes -keyout sustainability.key -out sustainability.csr`
