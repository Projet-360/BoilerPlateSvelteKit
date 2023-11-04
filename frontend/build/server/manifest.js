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
		client: {"start":"_app/immutable/entry/start.705e416f.js","app":"_app/immutable/entry/app.a0860f17.js","imports":["_app/immutable/entry/start.705e416f.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/singletons.cb73de64.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/entry/app.a0860f17.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.958f6a32.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-69bf618c.js')),
			__memo(() => import('./chunks/1-60d78f90.js')),
			__memo(() => import('./chunks/4-6481b411.js')),
			__memo(() => import('./chunks/5-2ec7cfa9.js')),
			__memo(() => import('./chunks/6-ce174418.js')),
			__memo(() => import('./chunks/9-e979fe2b.js')),
			__memo(() => import('./chunks/10-b8a20aaa.js'))
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
