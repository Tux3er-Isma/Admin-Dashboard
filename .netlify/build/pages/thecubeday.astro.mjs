import { c as createComponent, r as renderTemplate, g as renderComponent } from '../chunks/astro/server_B9eqz-CR.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Restaurant } from '../chunks/Restaurant_BQLpPs_d.mjs';
import { S as Sticker1 } from '../chunks/sticker-1_D-bUgRcf.mjs';
export { renderers } from '../renderers.mjs';

const $$Thecubeday = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Restaurant", $$Restaurant, { "icon": Sticker1.src, "title": "DAY", "restaurant": "1" })}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubeday.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubeday.astro";
const $$url = "/thecubeday";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Thecubeday,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
