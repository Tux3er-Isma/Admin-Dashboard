import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import { $ as $$Restaurant } from '../chunks/Restaurant_eu7GKJ3W.mjs';
import { S as Sticker3 } from '../chunks/sticker-3_CQTJfGsc.mjs';
export { renderers } from '../renderers.mjs';

const $$Thecubedelafont = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Restaurant", $$Restaurant, { "icon": Sticker3.src, "title": "DELAFONT", "restaurant": "3" })}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubedelafont.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubedelafont.astro";
const $$url = "/thecubedelafont";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Thecubedelafont,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
