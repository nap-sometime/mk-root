## ISSUE TRACKER

-   [ ] layout controller, layout controller should belong to ? `root-config` or create new single-spa application
-   [ ] vue over single-spa
    -   [x] async component `Foo: () => import('~/components/Foo')`
    -   [x] webpack resolve alias
        -   **solution** add webpack resolve alias block, resolve `src` path
-   [x] `assets` and `resource` configuration
    -   [x] cannot resolve assets from _single-spa/application_
        -   **solution** check `set_public_path` should import on the top of main file
-   [ ] development
    -   [x] local dev server need CORS support
    -   [x] use self-certificate on local dev server
        -   **solution** use [mkcert](https://github.com/FiloSottile/mkcert)
        -   **webpack dev server** set `key` and `cert` on [https](https://webpack.js.org/configuration/dev-server/#devserverhttps)
    -   [ ] infer vue type
    -   [ ] create custom `single-spa` boilerplate both `root-config`, `application | parcel` and `share module`
    -   [ ] support `vue composition api` and `vue@3`
