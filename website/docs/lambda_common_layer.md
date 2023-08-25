# Lambda Common Layer

:::note
The Lambda Common Layer `.env` file typically does not need to be renewed, but in rare cases you may have to do so (e.g. if you moved from Travis CI to Github Actions), so I have included the documentation for it below.
:::

The Lambda Common Layer is a lambda layer used in most SO web applications to facilitate session handling, DB access and web responses. You can view the code for this in the [following repo](https://github.com/OSU-Sustainability-Office/lambda-common-layer).

Encrypted `.env`:
To prevent our access credentials from leaking we encrypt our `.env` file in our repository. The secrets can be viewed [here (must be paid OSU SO employee)](https://drive.google.com/file/d/1sTPdFUINTAz3VjnqNsootABAuxoG3DOA/view?usp=sharing)

To generate new encryption key:
openssl enc -aes-256-cbc -k secret -P -md sha1

(Any values below with angled brackets, e.g. `<key>` should be read as a stand-in value, please substitute your own value without brackets)

Encrypting the file:
`openssl enc -aes-256-cbc -K <key> -iv <iv> -in .env -out .env.enc`

Decrypting the file:
`openssl aes-256-cbc -K <key> -iv <iv> -in .env.enc -out .env -d`

Couldn’t someone perform a known-plaintext crib attack?
No? Well, Maybe? I have no idea! This should probably be secure given that it would take an inordinate amount of time to brute-force AES-256-CBC but also maybe there’s some more effective methods given that an attacker could probably guess the format of the .env file generally. This was mostly a method of protecting secrets that was added back in 2018-19 when the dominant way of storing access credentials relied on .env files. A better process probably involves using AWS Secrets which automatically rotates access tokens.
