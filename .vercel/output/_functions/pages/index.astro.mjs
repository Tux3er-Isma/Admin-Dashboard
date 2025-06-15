import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent } from '../chunks/astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_hSSAhQDN.mjs';
import 'clsx';
/* empty css                                 */
import { S as Sticker1 } from '../chunks/sticker-1_D-bUgRcf.mjs';
import { S as Sticker2 } from '../chunks/sticker-2_Cgi1QBuP.mjs';
import { S as Sticker3 } from '../chunks/sticker-3_CQTJfGsc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Item;
  const { title, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="item"${addAttribute(link, "href")} data-astro-cid-r4m24v63> <div class="item__triangle" data-astro-cid-r4m24v63></div> <p class="item__txt" data-astro-cid-r4m24v63>${title}</p> </a> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Menu/Item.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<menu class="menu" data-astro-cid-vverzeto> <nav class="menu__nav" data-astro-cid-vverzeto> <i class="fa-solid fa-x menu__nav__icon" data-astro-cid-vverzeto></i> <h1 class="menu__nav__title" data-astro-cid-vverzeto>THECUBE</h1> </nav> <main class="menu__main" data-astro-cid-vverzeto> <ul class="menu__main__list-container" data-astro-cid-vverzeto> ', " ", " ", ` </ul> </main> </menu>  <script>
    const openIcon = document.querySelector('.menu__nav__icon');
    const openMenu = document.querySelector(".menu");
    openIcon.addEventListener("click", () => {
        menuClosed.style.animation = "disappear .3s forwards";
    });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Item", $$Item, { "title": "TheCubeDay", "link": "/thecubeday", "data-astro-cid-vverzeto": true }), renderComponent($$result, "Item", $$Item, { "title": "TheCubeFusion", "link": "thecubefusion", "data-astro-cid-vverzeto": true }), renderComponent($$result, "Item", $$Item, { "title": "TheCubeDeLaFont", "link": "thecubedelafont", "data-astro-cid-vverzeto": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Menu/Menu.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav class="nav" data-astro-cid-2ba2ky32> <!-- <i class="fa-solid fa-bars nav__icon"></i> --> <div class="nav__content" data-astro-cid-2ba2ky32> <div class="nav__content__title-container" data-astro-cid-2ba2ky32> <h1 class="nav__content__title-container__title" data-astro-cid-2ba2ky32>THE CUBE</h1> <h2 class="nav__content__title-container__subtitle" data-astro-cid-2ba2ky32>\nPymeWebTeam Reservation\n</h2> </div> <div class="nav__content__widget-container" data-astro-cid-2ba2ky32> <a href="/stats" class="fa-solid fa-chart-simple nav__content__widget-container__icon nav__content__widget-container__icon--stats" data-astro-cid-2ba2ky32></a> <a href="/verificator" class="fa-solid fa-circle nav__content__widget-container__icon nav__content__widget-container__icon--stats" data-astro-cid-2ba2ky32></a> <!-- <i\n                class="fa-regular fa-bell nav__content__widget-container__icon nav__content__widget-container__icon--notifications"\n            ></i> --> </div> </div> </nav>  <script>\n    const icon = document.querySelector(".nav__icon");\n    const menuClosed = document.querySelector(".menu");\n    icon.addEventListener("click", () => {\n        menuClosed.style.animation = "appear .3s forwards";\n    });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Header/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-gpicu5wk> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-gpicu5wk": true })} </header> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Header/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { icon, title, restaurant, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} data-astro-cid-upyfs2mt> <div class="tag"${addAttribute(restaurant, "data-tag")} data-astro-cid-upyfs2mt> <i${addAttribute(`fa-solid fa-${icon} tag__icon`, "class")} data-astro-cid-upyfs2mt></i> <p class="tag__title" data-astro-cid-upyfs2mt>${title}</p> </div></a> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Main/Tags.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, name, restaurant, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card"${addAttribute(restaurant, "data-restaurant")} data-astro-cid-hqag4xgx> <header class="card__header" data-astro-cid-hqag4xgx> <div class="card__header__content-container" data-astro-cid-hqag4xgx> <img${addAttribute(icon.src, "src")}${addAttribute(`TheCube${name}`, "alt")} class="card__header__content-container__icon" data-astro-cid-hqag4xgx> <h1 class="card__header__content-container__title" data-astro-cid-hqag4xgx>
THE CUBE <span class="card__header__content-container__title--color" data-astro-cid-hqag4xgx>${name}</span> </h1> </div> <a${addAttribute(link, "href")} class="fa-solid fa-arrow-up-right-from-square card__header__icon" data-astro-cid-hqag4xgx></a> </header> <main class="card__main" data-astro-cid-hqag4xgx> <div class="card__main__marquee__content" data-astro-cid-hqag4xgx> ${renderComponent($$result, "Tags", $$Tags, { "icon": "utensils", "title": "Gestionar Reservas", "restaurant": restaurant, "link": link, "data-astro-cid-hqag4xgx": true })} </div> </main> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Main/Card.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="main" data-astro-cid-vw3lked2> <div class="main__card-container" data-astro-cid-vw3lked2> ${renderComponent($$result, "Card", $$Card, { "icon": Sticker1, "name": "DAY", "restaurant": "1", "link": "/thecubeday", "data-astro-cid-vw3lked2": true })} ${renderComponent($$result, "Card", $$Card, { "icon": Sticker2, "name": "FUSION", "restaurant": "2", "link": "/thecubefusion", "data-astro-cid-vw3lked2": true })} ${renderComponent($$result, "Card", $$Card, { "icon": Sticker3, "name": "DELAFONT", "restaurant": "3", "link": "/thecubedelafont", "data-astro-cid-vw3lked2": true })} </div> </main> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/HomePage/Main/Main.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '  <!-- <script is:inline>\n	document.getElementById("notifyBtn").addEventListener("click", () => {\n		// Verificar si el navegador soporta notificaciones\n		if (!("Notification" in window)) {\n			alert("Tu navegador no soporta notificaciones.");\n			return;\n		} else {\n			// alert("Tu navegador soporta notifiaciones")\n		}\n		if (Notification.permission === "granted") {\n			new Notification("Hola \u{1F44B}", {\n				body: "Esta es una notificaci\xF3n de prueba.",\n				icon: "https://via.placeholder.com/128", // Icono opcional\n			});\n		} else if (Notification.permission === "default") {\n			Notification.requestPermission().then((permission) => {\n				if (permission === "granted") {\n					new Notification("Hola \u{1F44B}", {\n						body: "Gracias por permitir las notificaciones.",\n						icon: "https://via.placeholder.com/128",\n					});\n				} else {\n					alert("Has bloqueado las notificaciones.");\n				}\n			});\n		} else {\n			alert("Has bloqueado las notificaciones.");\n		}\n\n		navigator.serviceWorker.register("sw.js");\n		Notification.requestPermission(function (result) {\n			if (result === "granted") {\n				navigator.serviceWorker.ready.then(function (registration) {\n					registration.showNotification(\n						"Notification with ServiceWorker",\n					);\n				});\n			}\n		});\n\n		// Verificar permiso de notificaciones\n	});\n<\/script> -->'])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div id="demo-logs" data-astro-cid-j7pv25f6></div>  ` }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/index.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
