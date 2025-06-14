import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import { $ as $$Restaurant } from '../chunks/Restaurant_eu7GKJ3W.mjs';
import { S as Sticker2 } from '../chunks/sticker-2_Cgi1QBuP.mjs';
export { renderers } from '../renderers.mjs';

const $$Thecubefusion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Restaurant", $$Restaurant, { "icon": Sticker2.src, "title": "FUSION", "restaurant": "2" })}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubefusion.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubefusion.astro";
const $$url = "/thecubefusion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Thecubefusion,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
