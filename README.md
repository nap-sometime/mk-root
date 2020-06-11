## ISSUE TRACKER

-   [ ] layout controller, layout controller should belong to ? `root-config` or create new single-spa application
-   [ ] vue over single-spa
    -   [ ] async component `Foo: () => import('~/components/Foo')`
-   [ ] `assets` and `resource` configuration
    -   [ ] cannot resolve assets from _single-spa/application_
-   [ ] development
    -   [x] local dev server need CORS support
    -   [x] use self-certificate on local dev server
        -   **solution** use [mkcert](https://github.com/FiloSottile/mkcert)
        -   **webpack dev server** set `key` and `cert` on [https](https://webpack.js.org/configuration/dev-server/#devserverhttps)
    -   [ ] create custom `single-spa` boilerplate both `root-config`, `application | parcel` and `share module`
