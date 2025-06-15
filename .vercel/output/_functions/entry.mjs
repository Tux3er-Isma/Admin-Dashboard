import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bpa83Qrk.mjs';
import { manifest } from './manifest_DyyVwkoP.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/stats.astro.mjs');
const _page2 = () => import('./pages/thecubeday.astro.mjs');
const _page3 = () => import('./pages/thecubedelafont.astro.mjs');
const _page4 = () => import('./pages/thecubefusion.astro.mjs');
const _page5 = () => import('./pages/verificator.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/stats.astro", _page1],
    ["src/pages/thecubeday.astro", _page2],
    ["src/pages/thecubedelafont.astro", _page3],
    ["src/pages/thecubefusion.astro", _page4],
    ["src/pages/verificator.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "41337ff9-827d-4b73-a42f-29cf6f153297",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
