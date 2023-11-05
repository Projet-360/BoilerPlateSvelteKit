const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.svg","pwa/favicon/favicon.png","pwa/favicon/icon-192x192.png","pwa/favicon/icon-512x512.png","pwa/manifest.webmanifest","robots.txt","sw.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".txt":"text/plain",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.c237ab97.js","app":"_app/immutable/entry/app.d4e22073.js","imports":["_app/immutable/entry/start.c237ab97.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/singletons.8938bbe8.js","_app/immutable/chunks/index.be155689.js","_app/immutable/entry/app.d4e22073.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.42327729.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-c8fa6173.js')),
			__memo(() => import('./chunks/1-6f44f87f.js')),
			__memo(() => import('./chunks/4-cf47878d.js')),
			__memo(() => import('./chunks/5-3a8f949d.js')),
			__memo(() => import('./chunks/6-020be389.js')),
			__memo(() => import('./chunks/9-e4dd5793.js')),
			__memo(() => import('./chunks/10-83389f5a.js'))
		],
		routes: [
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/forgot-password/[token]",
				pattern: /^\/forgot-password\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/signup/[token]",
				pattern: /^\/signup\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/__data.json","/about","/about/__data.json","/login","/login/__data.json","/signup","/signup/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
