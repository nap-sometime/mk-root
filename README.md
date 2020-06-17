## Issue Tracker

-   [ ] layout controller, layout controller should belong to ? `root-config` or a new `layout` application
-   [x] vue over single-spa
    -   [x] async component `Foo: () => import('~/components/Foo')`
    -   [x] webpack resolve alias
        -   **solution** add webpack resolve alias block, resolve `src` path
    -   [ ] root dependecies control
        -   should not import latest cdn
-   [x] `assets` and `resource` configuration
    -   [x] cannot resolve assets from _single-spa/application_
        -   **solution** check `set_public_path` should import on the top of main file
-   [ ] development
    -   [x] local dev server need CORS support
    -   [x] use self-certificate on local dev server
        -   **solution** use [mkcert](https://github.com/FiloSottile/mkcert)
        -   **webpack dev server** set `key` and `cert` on [https](https://webpack.js.org/configuration/dev-server/#devserverhttps)
    -   [x] infer vue type
        -   **solution** declare vue module in `*.shim.d.ts` and add to tsconfig.json
    -   [ ] create custom `single-spa` boilerplate both `root-config`, `application | parcel` and `share module`
    -   [x] hot reload problem
        -   **solution** depends on `publicPath` webpack config
        -   if https required, _recheck self-certificate ip address_
    -   [x] support code splitting
        -   **solution** use [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
    -   [ ] support `vue composition api` and `vue@3`
    -   [ ] implement universal UI
-   [ ] security
    -   [x] should not import `package.json` directly, hide library infomation
        -   **solution-vue** pass environment variable through [_process.env.VUE_APP\_\*_](https://cli.vuejs.org/guide/mode-and-env.html#example-staging-mode)
    -   [ ] better CSP config

---

## How to self-certificate with mkcert

-   [install mkcert](https://github.com/FiloSottile/mkcert)
-   create `cert` directory to store self-certifiate files
-   following below step

```bash
mkcert -install # install root CA
mkcert -key-file key.pem -cert-file cert.pem localhost ::1 # gen certificate for `localhost`
```
