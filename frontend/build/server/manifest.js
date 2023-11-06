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
		client: {"start":"_app/immutable/entry/start.19bf19ae.js","app":"_app/immutable/entry/app.666fc6bf.js","imports":["_app/immutable/entry/start.19bf19ae.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/singletons.a2ac07bd.js","_app/immutable/chunks/index.be155689.js","_app/immutable/entry/app.666fc6bf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.42327729.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f6902c08.js')),
			__memo(() => import('./chunks/1-80946eab.js')),
			__memo(() => import('./chunks/4-a4b433e0.js')),
			__memo(() => import('./chunks/5-30163893.js')),
			__memo(() => import('./chunks/6-62eff78e.js')),
			__memo(() => import('./chunks/9-c1e8a0d0.js')),
			__memo(() => import('./chunks/10-fe725c25.js'))
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
