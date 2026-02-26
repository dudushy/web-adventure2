[![pages-build-deployment](https://github.com/dudushy/web-adventure2/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/dudushy/web-adventure2/actions/workflows/pages/pages-build-deployment)

# [web-adventure2](https://github.com/dudushy/web-adventure2/)
My refined web adventure.

---
## Prerequisites:
- [NodeJS](https://nodejs.org/)
```bash
nvm install && nvm use
```

## How to install and run:
1. Install packages
    ```bash
    npm ci
    ```
2. Run project
    ```bash
    npm start
    ```
    or run on LAN
    ```bash
    npm start-lan
    ```
3. Build project
    ```bash
    npm run build
    ```
4. Deploy project (gh-pages)
    ```bash
    npm run deploy
    ```

## Create new adventure:
```bash
ng g component adventures/ADVENTURE_TYPE/ADVENTURE_NAME
```
