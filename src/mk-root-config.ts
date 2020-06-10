import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@single-spa/welcome',
	app: () => System.import('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
	activeWhen: ['/'],
});

// registerApplication({
//   name: "@mk/navbar",
//   app: () => System.import("@mk/navbar"),
//   activeWhen: ["/"]
// });

start({
	urlRerouteOnly: true,
});
