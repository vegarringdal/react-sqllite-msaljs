# react, sqlite/msal
Simple starter with react frontned and sqllite/masal backend

### Development & run

-   `npm install` to install all dependencies
-   `npm start` to start dev mode (edit in front/back and common triggers rebuild, also re-run
    typechecker)


```env
# you need to add this for it to work.. 
# Azure - https://login.microsoftonline.com/
AZURE_CLIENT_ID=705e81d1-9651-4df-8dfcb-a3sdfdc994
AZURE_TENDANT_ID=0bfd34b6-077d-43349-9617-c56c6df235b
# important you use api:// under scope, do not use msal scopes, we can not verify token if you do
AZURE_SCOPES=api://705e81d1-9651-4df-8dfcb-a3sdfdc994/connect/
```

## Make builds & run

-   `npm run build` to build production
-   `npm run serve` to run production


## Frontend/backend libs

Some of the libs added (nice to have for new projects)

Frontend:

-   render: react
-   state: zustand
-   router: react-router-dom
-   css: tailwindcss
-   testing: jest/eslint
-   language: typescript

Backend:

-   language: typescript
-   testing: jest/eslint
-   http framework: expressjs
-   express middleware: multer
-   database: sqlite 3
-   timer: node-cron

## First time usage:

-   you should edit the package.json name & description
-   add correct url to .versionrc.json
-   update lisense and author
-   add .env file with you msal(azure) config

## Docker

Ive added default docker file to help build. You need to replace tag and name.

-   Build to build:
    -   `docker build . -t awsome/webapp`
-   Run sample
    -   `docker run --name myAppv01 --env-file .env -p 81:1080 -d awsome/webapp`
-   Check its running:
    -   `docker logs myAppv01`


