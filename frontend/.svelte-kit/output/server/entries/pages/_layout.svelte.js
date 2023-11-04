import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute, h as each, v as validate_component, t as assign, u as now, w as loop, x as identity, o as onDestroy, k as createEventDispatcher, y as null_to_empty } from "../../chunks/index2.js";
import { a as authStore } from "../../chunks/auth.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index4.js";
import { e as t, f as locale, l as locales } from "../../chunks/index.js";
import { n as notificationStore } from "../../chunks/notificationStore.js";
import * as flubber from "flubber";
import "smooth-scrollbar";
function localStorageStore(key, initialValue) {
  const isBrowser = typeof window !== "undefined";
  const storedValue = isBrowser ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const store = writable(initial);
  if (isBrowser) {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }
  return store;
}
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_darkMode;
  const darkMode = localStorageStore("darkMode", false);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => value);
  $$unsubscribe_darkMode();
  return `<button>Toggle Dark Mode </button>`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let isAuthenticated;
  authStore.subscribe(($authStore) => {
    isAuthenticated = $authStore && $authStore.isAuthenticated ? true : false;
  });
  $$unsubscribe_t();
  return `${isAuthenticated ? `<button id="button-logout" data-testid="button-logout">${escape($t("logout.logout"))}</button>` : ``}`;
});
const FullScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button>Go Fullscreen</button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $authStore, $$unsubscribe_authStore;
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  let $locales, $$unsubscribe_locales;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  $$unsubscribe_locales = subscribe(locales, (value) => $locales = value);
  let isAuthenticated;
  authStore.subscribe(($authStore2) => {
    isAuthenticated = $authStore2 && $authStore2.isAuthenticated ? true : false;
  });
  $$unsubscribe_page();
  $$unsubscribe_authStore();
  $$unsubscribe_t();
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<header><nav><ul><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}><a href="/">Home</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)}><a href="/about">About</a></li>
			${!isAuthenticated ? `<li class="CursorDezoom"${add_attribute("aria-current", $page.url.pathname === "/signup" ? "page" : void 0, 0)}><a href="/signup">Signup</a></li>
				<li class="CursorDezoom"${add_attribute("aria-current", $page.url.pathname === "/login" ? "page" : void 0, 0)}><a href="/login">Login</a></li>` : ``}
			${$authStore.role === "user" ? `<li class="CursorDezoom"${add_attribute("aria-current", $page.url.pathname === "/user" ? "page" : void 0, 0)}><a href="/user">user</a></li>` : ``}
			${$authStore.role === "admin" ? `<li class="CursorDezoom"${add_attribute("aria-current", $page.url.pathname === "/dashboard" ? "page" : void 0, 0)}><a href="/dashboard">dashboard</a></li>` : ``}</ul></nav>

	<div class="left-side"><label for="localeSelect">${escape($t("general.language"))}</label>
		<select id="localeSelect" name="locale">${each($locales, (value) => {
    return `<option${add_attribute("value", value, 0)}>${escape($t(`lang.${value}`))}</option>`;
  })}</select>

		${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}

		${validate_component(FullScreen, "FullScreen").$$render($$result, {}, {}, {})}

		${validate_component(Logout, "Logout").$$render($$result, {}, {}, {})}</div></header>`;
});
function cubicInOut(t2) {
  return t2 < 0.5 ? 4 * t2 * t2 * t2 : 0.5 * Math.pow(2 * t2 - 2, 3) + 1;
}
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div class="pageTransition">${slots.default ? slots.default({}) : ``}</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t2) => arr.map((fn) => fn(t2));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t2) => new Date(a + t2 * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t2) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t2);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t2) => a + t2 * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const circle = "M 0 25 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0";
const camera = "M62.102,12.59c-1.176-0.73-2.645-0.793-3.891-0.176L48,17.516V12c0-2.211-1.789-4-4-4H4  c-2.211,0-4,1.789-4,4v40c0,2.203,1.789,4,4,4h40c2.211,0,4-1.797,4-4v-5.535l10.211,5.105c0.566,0.281,1.176,0.422,1.789,0.422  c0.73,0,1.461-0.199,2.102-0.598c1.18-0.73,1.898-2.016,1.898-3.402v-32C64,14.605,63.281,13.32,62.102,12.59z";
const comment = "M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12  c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4  V4C64,1.789,62.211,0,60,0z";
const bankPath = { circle, camera, comment };
const shapeStore = writable("circle");
const cursorStore = writable({
  Cursor: null,
  x: 0,
  y: 0,
  transitionDuration: 0,
  transitionDurationSvg: 0.07,
  shaperForm: "circle",
  scaleSvg: 1
});
let animationFrameId;
function animateCursor(Cursor2, { clientX, clientY }) {
  if (!Cursor2)
    return;
  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => {
    const newX = clientX - Cursor2.offsetWidth / 2;
    const newY = clientY - Cursor2.offsetHeight / 2;
    cursorStore.update((prevState) => ({
      ...prevState,
      x: newX,
      y: newY
    }));
  });
}
const index_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: "#Cursor.svelte-hd4cl2{z-index:1000;width:50px;height:50px;position:fixed;pointer-events:none}",
  map: null
};
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now2 = (/* @__PURE__ */ new Date()).getTime();
    if (now2 - lastCall < delay) {
      return;
    }
    lastCall = now2;
    return func(...args);
  };
}
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $shapeStore, $$unsubscribe_shapeStore;
  let $cursorStore, $$unsubscribe_cursorStore;
  let $shape, $$unsubscribe_shape;
  $$unsubscribe_shapeStore = subscribe(shapeStore, (value) => $shapeStore = value);
  $$unsubscribe_cursorStore = subscribe(cursorStore, (value) => $cursorStore = value);
  const { interpolate } = flubber;
  shapeStore.set;
  let cursorElement = null;
  let throttledMove = null;
  if (typeof window !== "undefined") {
    onDestroy(() => {
      removeEventListeners();
    });
  }
  function initEventListeners(Cursor2) {
    throttledMove = throttle((e) => animateCursor(Cursor2, e), 16);
    cursorStore.update((props) => ({ ...props, Cursor: Cursor2 }));
    window.addEventListener("mousemove", throttledMove);
  }
  function removeEventListeners() {
    if (throttledMove) {
      window.removeEventListener("mousemove", throttledMove);
    }
  }
  const shape = tweened(bankPath["circle"], {
    duration: 150,
    easing: cubicInOut,
    interpolate
  });
  $$unsubscribe_shape = subscribe(shape, (value) => $shape = value);
  if ($$props.initEventListeners === void 0 && $$bindings.initEventListeners && initEventListeners !== void 0)
    $$bindings.initEventListeners(initEventListeners);
  if ($$props.removeEventListeners === void 0 && $$bindings.removeEventListeners && removeEventListeners !== void 0)
    $$bindings.removeEventListeners(removeEventListeners);
  $$result.css.add(css$3);
  {
    shape.set(bankPath[$shapeStore]);
  }
  $$unsubscribe_shapeStore();
  $$unsubscribe_cursorStore();
  $$unsubscribe_shape();
  return `<div id="Cursor" style="${"transform: translate(" + escape($cursorStore.x, true) + "px, " + escape($cursorStore.y, true) + "px); transition: transform " + escape($cursorStore.transitionDuration, true) + "s linear; --icon-scale: " + escape($cursorStore.iconScale, true) + ";"}" class="svelte-hd4cl2"${add_attribute("this", cursorElement, 0)}><svg viewBox="0 0 100 100" style="${"transform: scale(" + escape($cursorStore.scaleSvg, true) + "); transition: transform " + escape($cursorStore.transitionDurationSvg, true) + "s linear;"}">${$shape ? `<path${add_attribute("d", $shape, 0)}></path>` : ``}</svg>
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".preloader.svelte-wkladc{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.8);display:flex;justify-content:center;align-items:center;z-index:10000}.spinner.svelte-wkladc{width:40px;height:40px;border:4px solid rgba(0, 0, 0, 0.1);border-left-color:#000;border-radius:50%;animation:svelte-wkladc-spinner 1s linear infinite}@keyframes svelte-wkladc-spinner{to{transform:rotate(360deg)}}",
  map: null
};
const Preloader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `${`<div class="preloader svelte-wkladc"><div class="spinner svelte-wkladc"></div></div>`}`;
});
const SmoothScroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="smoothScoller" id="smoothScoller">${slots.default ? slots.default({}) : ``}</div>`;
});
const Notification_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".notification-wrapper.svelte-1n0wmhw{position:fixed;top:20px;right:20px;width:200px;z-index:9999999}.notification.svelte-1n0wmhw{padding:10px;margin-bottom:10px;color:white}.notification.success.svelte-1n0wmhw{background-color:green}.notification.error.svelte-1n0wmhw{background-color:red}.notification.info.svelte-1n0wmhw{background-color:blue}",
  map: null
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { message = "" } = $$props;
  let { type = "info" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `${`<div class="${escape(null_to_empty(`notification ${type}`), true) + " svelte-1n0wmhw"}" aria-live="assertive"><span>${escape(message)}</span>
		<button data-testid="button-close-notification" aria-label="Fermer la notification">X
		</button></div>`}`;
});
const NotificationWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notificationStore, $$unsubscribe_notificationStore;
  $$unsubscribe_notificationStore = subscribe(notificationStore, (value) => $notificationStore = value);
  $$unsubscribe_notificationStore();
  return `<div class="notification-wrapper">${each($notificationStore, ({ id, message, type }) => {
    return `${validate_component(Notification, "Notification").$$render($$result, { message, type }, {}, {})}`;
  })}</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".rts{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}.rte{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;align-content:stretch;align-items:flex-start}.rtc{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:flex-start}.rtb{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:flex-start;align-items:flex-start}.rta{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;align-content:flex-start;align-items:flex-start}.rcs{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;align-items:center}.rce{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center;align-items:center}.rcc{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center}.rcb{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center;align-items:center}.rca{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;align-content:center;align-items:center}.rbs{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-end;align-items:flex-end}.rbe{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:flex-end;align-items:flex-end}.rbc{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-end;align-items:flex-end}.rbb{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:flex-end;align-items:flex-end}.rba{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;align-content:flex-end;align-items:flex-end}.cls{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.cle{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-end;align-content:flex-start;align-items:flex-start}.clc{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:flex-start;align-items:flex-start}.clb{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-content:flex-start;align-items:flex-start}.cla{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-content:flex-start;align-items:flex-start}.ccs{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:center;align-items:center}.cce{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-end;align-content:center;align-items:center}.ccc{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center}.ccb{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-content:center;align-items:center}.cca{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-content:center;align-items:center}.crs{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-end;align-items:flex-end}.cre{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-content:flex-end;align-items:flex-end}.crc{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:flex-end;align-items:flex-end}.crb{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-content:flex-end;align-items:flex-end}.cra{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-content:flex-end;align-items:flex-end}.nowrap{flex-wrap:nowrap}.wrap-reverse{flex-wrap:wrap-reverse}.row-reverse{flex-wrap:row-reverse}.column-reverse{flex-wrap:column-reverse}.dg.ac{z-index:99999 !important}html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root[data-theme=light]{--bg-color:white;--text-color:black}:root[data-theme=dark]{--bg-color:black;--text-color:white}.page{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;width:100%;min-height:calc(100vh - 70px)}.page .page-container{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;padding:20px;border-radius:15px;border:1px solid black}.page .page-container form{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-content:center;align-items:center}.page .page-container form input{margin:5px 0px}.page .page-container button{margin:5px}.app{width:100%;height:100vh;position:relative}#Cursor svg{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;position:absolute;transform-origin:center}#Cursor svg path{max-width:50px;max-height:50px;transform:translate(25%, 25%)}.notification-wrapper{position:absolute;top:0;right:0;z-index:101}#smoothScoller{height:100%;overflow:hidden;position:relative}#smoothScoller .pageTransition main{overflow:hidden;width:100%;min-height:100vh;padding-top:70px}header{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center;align-items:center;padding:20px;width:100%;height:70px;position:absolute;z-index:100;top:0}header ul{width:200px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center;align-items:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1uosm9z_START --><link rel="icon" href="/favicon.png"><meta name="viewport" content="width=device-width"><link rel="manifest" href="/pwa/manifest.webmanifest"><meta name="theme-color" content="#4285f4"><!-- HEAD_svelte-1uosm9z_END -->`, ""}

${validate_component(Preloader, "Preloader").$$render($$result, {}, {}, {})}
${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}

${validate_component(NotificationWrapper, "NotificationWrapper").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${validate_component(SmoothScroller, "SmoothScroller").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname: data.route }, {}, {
        default: () => {
          return `<main>${slots.default ? slots.default({}) : ``}</main>`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
