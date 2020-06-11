import { registerApplication, start } from 'single-spa';

// const add = (publicName: string, options: Omit<RegisterApplicationConfig, 'name' | 'app'> = { activeWhen: ['/'] }) => ({
// 	name: publicName,
// 	app: () => System.import(publicName),
// 	...options,
// });

registerApplication({
	name: '@single-spa/welcome',
	app: () => System.import('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
	activeWhen: ['/'],
});

registerApplication({
	name: '@mk/auth',
	app: () => System.import('@mk/auth'),
	activeWhen: ['/'],
});

// [add('@single-spa/welcome')].forEach(registerApplication);

start({
	urlRerouteOnly: true,
});
