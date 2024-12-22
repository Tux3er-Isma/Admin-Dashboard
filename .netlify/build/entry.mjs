import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C4j_CKqU.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/script.astro.mjs');
const _page2 = () => import('./pages/stats.astro.mjs');
const _page3 = () => import('./pages/thecubeday.astro.mjs');
const _page4 = () => import('./pages/thecubedelafont.astro.mjs');
const _page5 = () => import('./pages/thecubefusion.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/script.js", _page1],
    ["src/pages/stats.astro", _page2],
    ["src/pages/thecubeday.astro", _page3],
    ["src/pages/thecubedelafont.astro", _page4],
    ["src/pages/thecubefusion.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "6870adee-9de1-4b14-8d52-0275bcc9b00e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
