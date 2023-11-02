import { c as create_ssr_component, p as onDestroy, b as add_attribute, s as subscribe, a as each, e as escape, u as compute_rest_props, q as createEventDispatcher, w as spread, x as escape_attribute_value, y as escape_object, v as validate_component } from "../../chunks/index2.js";
import { e as t } from "../../chunks/index.js";
import { io } from "socket.io-client";
import { n as notificationStore } from "../../chunks/notificationStore.js";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
async function apiCall({
  url,
  method = "GET",
  headers = null,
  body = null,
  credentials = null,
  handleSuccess = null,
  handleError = null
}) {
  try {
    const options = {
      method
    };
    if (headers) {
      options.headers = headers;
    }
    if (body) {
      options.body = JSON.stringify(body);
      if (!headers || !headers["Content-Type"]) {
        options.headers = {
          ...options.headers || {},
          "Content-Type": "application/json"
        };
      }
    }
    if (credentials) {
      options.credentials = credentials;
    }
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (handleSuccess) {
        handleSuccess(data);
      }
      return data;
    } else {
      const errorData = await response.json();
      if (handleError) {
        handleError(errorData);
      }
      throw new Error(errorData.message || "Erreur du serveur");
    }
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
}
const BD = "http://localhost:2000";
const Box_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1g8vqg2{width:400px;height:400px}",
  map: null
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  onDestroy(() => {
  });
  $$result.css.add(css);
  return `<div class="svelte-1g8vqg2"${add_attribute("this", container, 0)}></div>`;
});
const socket = io("http://localhost:2000");
const greetingsValidation = (error, $t) => {
  let errorMessages = [];
  if (typeof error === "string") {
    errorMessages = error.split(",");
  } else if (error && error.message) {
    errorMessages = error.message.split(",");
  } else {
    errorMessages = ["Une erreur inconnue s'est produite."];
  }
  errorMessages.forEach((errorMsg) => {
    let errorMessage;
    switch (errorMsg.trim()) {
      case "NAME_REQUIRED":
        errorMessage = $t("validation.NAME_REQUIRED");
        break;
      case "NAME_MIN_MAX_CARAC":
        errorMessage = $t("validation.NAME_MIN_MAX_CARAC");
        break;
      case "MESSAGE_REQUIRED":
        errorMessage = $t("validation.MESSAGE_REQUIRED");
        break;
      case "MESSAGE_MIN_MAX_CARAC":
        errorMessage = $t("validation.MESSAGE_MIN_MAX_CARAC");
        break;
      case "RATE_LIMIT":
        errorMessage = $t("validation.RATE_LIMIT");
        break;
      default:
        errorMessage = "Une erreur inconnue s'est produite.";
    }
    notificationStore.addNotification(errorMessage, "error");
  });
};
async function sendGreeting(name, message, editingId = null, $t) {
  try {
    const url = editingId ? `${BD}/api/updateGreeting/${editingId}` : `${BD}/api/saveGreeting`;
    const method = editingId ? "PUT" : "POST";
    const isSuccessful = await apiCall({
      url,
      method,
      body: { name, message }
    });
    return isSuccessful !== null;
  } catch (error) {
    greetingsValidation(error, $t);
    throw error;
  }
}
async function getAllGreetings() {
  const data = await apiCall({
    url: `${BD}/api/getGreetings`,
    method: "GET"
  });
  return data;
}
async function deleteGreeting(id) {
  const isSuccessful = await apiCall({
    url: `${BD}/api/deleteGreeting/${id}`,
    method: "DELETE"
  });
  return isSuccessful !== null;
}
const Greetings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let editingId = null;
  let name = "";
  let message = "";
  let greetings = [];
  function prepareUpdate(greeting) {
    name = greeting.name;
    message = greeting.message;
    editingId = greeting._id;
  }
  async function handleSendGreeting() {
    console.log("Sending greeting");
    const isSuccessful = await sendGreeting(name, message, editingId, $t);
    if (isSuccessful) {
      name = "";
      message = "";
      editingId = null;
      socket.emit("greetingSent");
      greetings = await getAllGreetings();
    }
  }
  async function handleDeleteGreeting(id) {
    console.log(`Deleting greeting with id ${id}`);
    const isSuccessful = await deleteGreeting(id);
    if (isSuccessful) {
      socket.emit("greetingDeleted");
      greetings = await getAllGreetings();
    }
  }
  if ($$props.prepareUpdate === void 0 && $$bindings.prepareUpdate && prepareUpdate !== void 0)
    $$bindings.prepareUpdate(prepareUpdate);
  if ($$props.handleSendGreeting === void 0 && $$bindings.handleSendGreeting && handleSendGreeting !== void 0)
    $$bindings.handleSendGreeting(handleSendGreeting);
  if ($$props.handleDeleteGreeting === void 0 && $$bindings.handleDeleteGreeting && handleDeleteGreeting !== void 0)
    $$bindings.handleDeleteGreeting(handleDeleteGreeting);
  $$unsubscribe_t();
  return `<form><label for="nameInput">Nom :
		<input id="nameInput" name="name" type="text" autocomplete="name"${add_attribute("value", name, 0)}></label>

	<label for="messageInput">Message :
		<input id="messageInput" name="message" type="text" autocomplete="on"${add_attribute("value", message, 0)}></label>
	<button type="submit">Envoyer</button></form>

<ul>${each(greetings, (greeting) => {
    return `<li>${escape(greeting.name)}: ${escape(greeting.message)}
			<button>Modifier</button>
			<button>Supprimer</button>
		</li>`;
  })}</ul>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splideDefault_min = "";
const splideCore_min = "";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const splideOptions = {
    type: "loop",
    gap: "10px",
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: 3,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: false,
      speed: 1
    }
  };
  return `${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: splideOptions,
      extensions: { AutoScroll },
      "aria-label": "My Favorite Images"
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}
	${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}
	${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}
	${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}
	${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}
	${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", github, 0)} alt="Logo GitHub" class="imgcarousel" width="50" height="50">`;
          }
        })}`;
      }
    }
  )}`;
});
const link = "https://kit.svelte.dev";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1nt1ujr_START -->${$$result.title = `<title>Page d&#39;exemple</title>`, ""}<meta name="description" content="Ceci est une description de la page d'exemple."><!-- HEAD_svelte-1nt1ujr_END -->`, ""}

<h1>${escape($t("home.title"))}</h1>
<p><!-- HTML_TAG_START -->${$t("home.text", { link })}<!-- HTML_TAG_END --></p>
<a href="/about">${escape($t("home.link"))}</a>

${validate_component(Box, "Box").$$render($$result, {}, {}, {})}

${validate_component(Greetings, "Greetings").$$render($$result, {}, {}, {})}
${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
