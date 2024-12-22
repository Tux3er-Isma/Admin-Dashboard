import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_AzqMR3Zz.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos%20WEB/Personal%20Projects/admin-dashboard/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/script","isIndex":false,"type":"endpoint","pattern":"^\\/script\\/?$","segments":[[{"content":"script","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/script.js","pathname":"/script","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DHO-3tnk.css"},{"type":"inline","content":".nav[data-astro-cid-7rsf5m4q]{display:flex;position:fixed;width:100%;padding-top:10px;padding-bottom:10px;justify-content:center;border-bottom:1px solid #603b2a;background:#ffdbacc2;backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px)}.nav__arrow[data-astro-cid-7rsf5m4q]{position:absolute;left:10px;font-size:30px}.header[data-astro-cid-ykef3nix]{height:80px}.title[data-astro-cid-v5dvx5p5]{font-size:11px;text-transform:lowercase;text-align:center;line-height:11px}.card[data-astro-cid-v5dvx5p5]{padding:10px;width:100%;height:350px;display:flex;flex-direction:column;justify-content:space-around}.card__ultra-title[data-astro-cid-v5dvx5p5]{width:80%;padding-bottom:10px;line-height:30px;font-size:30px;margin-bottom:20px;font-family:Staatliches,sans-serif;font-weight:600;font-size:32px}.card__title[data-astro-cid-v5dvx5p5]{font-weight:900;font-size:20px}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"1\"]{background-color:#feedde;border:8px solid #592D00;border-radius:36px}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"1\"] .card__ultra-title[data-astro-cid-v5dvx5p5]{color:#ff9500;border-bottom:1px solid #000;padding-bottom:10px}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"1\"] .card__title[data-astro-cid-v5dvx5p5]{color:#603b2a}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"1\"] .card__title--data[data-astro-cid-v5dvx5p5]{color:#ff6200}.title[data-astro-cid-v5dvx5p5][data-title=\"1\"]{color:#6a4108}.title[data-astro-cid-v5dvx5p5][data-title=\"2\"]{color:#af0000}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"2\"]{background-color:#feedde;border:8px solid #AF0000}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"2\"] .card__ultra-title[data-astro-cid-v5dvx5p5]{color:#530505;border-bottom:1px solid #000;padding-bottom:10px}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"2\"] .card__title[data-astro-cid-v5dvx5p5]{color:#af0000}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"2\"] .card__title--data[data-astro-cid-v5dvx5p5]{color:#000}.title[data-astro-cid-v5dvx5p5][data-title=\"3\"]{color:#ff8100}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"3\"]{background-color:#131212;border:8px solid #FF8100;border-radius:36px}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"3\"] .card__ultra-title[data-astro-cid-v5dvx5p5]{color:#ffa872;border-bottom:1px solid #fff}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"3\"] .card__title[data-astro-cid-v5dvx5p5]{color:#ff8100}.card[data-astro-cid-v5dvx5p5][data-restaurant=\"3\"] .card__title--data[data-astro-cid-v5dvx5p5]{color:#fff}.main[data-astro-cid-nutkp445]{display:flex;flex-direction:column;align-items:center;padding-bottom:30px}.main__total-container[data-astro-cid-nutkp445]{padding-top:10px;padding-bottom:10px;display:flex;width:85%;justify-content:space-evenly;border:2px solid #603b2a;border-radius:30px}.main__total-container__total[data-astro-cid-nutkp445]{font-size:20px;font-weight:700}.main__total-container__title[data-astro-cid-nutkp445]{font-size:20px;font-weight:400}.main__title[data-astro-cid-nutkp445]{width:85%;margin-top:30px}.main__booking-container[data-astro-cid-nutkp445]{width:85%;display:flex;flex-direction:column;gap:30px}\n*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}body{background-color:#fbeee0}a{color:initial;text-decoration:none}a:visited{color:initial}.principal-container{display:none}.animation{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;gap:20px}.animation__icon{width:50px;height:50px;position:relative;bottom:10px;animation:appear1 1s forwards cubic-bezier(.58,.09,0,.82)}.animation__content{display:flex;flex-direction:column;align-items:flex-end;animation:appear2 1s forwards cubic-bezier(.58,.09,0,.82)}.animation__content__title{font-family:Bebas Neue,sans-serif;font-weight:900;line-height:50px;font-size:60px}.animation__content__subtitle-container{display:flex;align-items:flex-start;gap:10px}.animation__content__subtitle-container__subtitle{font-family:Poppins,sans-serif;font-size:13px;font-weight:400}.animation__content__subtitle-container__img{width:70px;position:relative;top:3.5px}@keyframes appear1{0%{transform:translate(-50vw)}to{transform:translate(0)}}@keyframes appear2{0%{transform:translate(50vw)}to{transform:translate(0)}}\n"}],"routeData":{"route":"/stats","isIndex":false,"type":"page","pattern":"^\\/stats\\/?$","segments":[[{"content":"stats","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/stats.astro","pathname":"/stats","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DHO-3tnk.css"},{"type":"external","src":"/_astro/thecubeday.DqviZ5a7.css"}],"routeData":{"route":"/thecubeday","isIndex":false,"type":"page","pattern":"^\\/thecubeday\\/?$","segments":[[{"content":"thecubeday","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thecubeday.astro","pathname":"/thecubeday","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DHO-3tnk.css"},{"type":"external","src":"/_astro/thecubeday.DqviZ5a7.css"}],"routeData":{"route":"/thecubedelafont","isIndex":false,"type":"page","pattern":"^\\/thecubedelafont\\/?$","segments":[[{"content":"thecubedelafont","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thecubedelafont.astro","pathname":"/thecubedelafont","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DHO-3tnk.css"},{"type":"external","src":"/_astro/thecubeday.DqviZ5a7.css"}],"routeData":{"route":"/thecubefusion","isIndex":false,"type":"page","pattern":"^\\/thecubefusion\\/?$","segments":[[{"content":"thecubefusion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thecubefusion.astro","pathname":"/thecubefusion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DHO-3tnk.css"},{"type":"external","src":"/_astro/index.CNiLvDTz.css"},{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}body{background-color:#fbeee0}a{color:initial;text-decoration:none}a:visited{color:initial}.principal-container{display:none}.animation{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;gap:20px}.animation__icon{width:50px;height:50px;position:relative;bottom:10px;animation:appear1 1s forwards cubic-bezier(.58,.09,0,.82)}.animation__content{display:flex;flex-direction:column;align-items:flex-end;animation:appear2 1s forwards cubic-bezier(.58,.09,0,.82)}.animation__content__title{font-family:Bebas Neue,sans-serif;font-weight:900;line-height:50px;font-size:60px}.animation__content__subtitle-container{display:flex;align-items:flex-start;gap:10px}.animation__content__subtitle-container__subtitle{font-family:Poppins,sans-serif;font-size:13px;font-weight:400}.animation__content__subtitle-container__img{width:70px;position:relative;top:3.5px}@keyframes appear1{0%{transform:translate(-50vw)}to{transform:translate(0)}}@keyframes appear2{0%{transform:translate(50vw)}to{transform:translate(0)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubeday.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubedelafont.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/thecubefusion.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/stats.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/script@_@js":"pages/script.astro.mjs","\u0000@astro-page:src/pages/stats@_@astro":"pages/stats.astro.mjs","\u0000@astro-page:src/pages/thecubeday@_@astro":"pages/thecubeday.astro.mjs","\u0000@astro-page:src/pages/thecubedelafont@_@astro":"pages/thecubedelafont.astro.mjs","\u0000@astro-page:src/pages/thecubefusion@_@astro":"pages/thecubefusion.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Xhh09pj2.mjs","C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bmb9aG54.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/sticker-1.7ZfgDKxh.png","/_astro/sticker-3.C7ogvPwx.png","/_astro/sticker-2.CO_YOeNV.png","/_astro/icon.CB3sXh-v.png","/_astro/pymewebteam.BDzzjIjz.png","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-latin-ext-200-normal.UNJ7d0fR.woff2","/_astro/poppins-latin-300-normal.Dku2WoCh.woff2","/_astro/poppins-latin-ext-400-normal.CIpeJEZw.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-100-normal.BYGiT0vt.woff2","/_astro/poppins-latin-ext-500-normal.H4Q0z8D2.woff2","/_astro/poppins-latin-ext-300-normal.7Zg2msWE.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-ext-600-normal.Cn4C8475.woff2","/_astro/poppins-latin-100-normal.CY-M_i9k.woff2","/_astro/poppins-latin-ext-900-normal.Bz6n_4o4.woff2","/_astro/poppins-latin-800-normal.Bd8-pIP1.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/bebas-neue-latin-400-normal.5LZebNIn.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-ext-700-normal.DDaViAzG.woff2","/_astro/bebas-neue-latin-ext-400-normal.CH8jWPQC.woff2","/_astro/poppins-latin-ext-800-normal.CTiPmeYq.woff2","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-300-normal.DCNuMXUj.woff","/_astro/poppins-latin-ext-200-normal.DXUl_1bM.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-300-normal.C9p7gvmA.woff","/_astro/poppins-latin-ext-100-normal.DCo_AZ8Z.woff","/_astro/poppins-latin-ext-500-normal.Bl1-S02S.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-ext-600-normal.DB6FJURc.woff","/_astro/poppins-latin-100-normal.PssVh1UL.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/poppins-latin-ext-900-normal.CdmgbwZ2.woff","/_astro/poppins-latin-800-normal.YoItoZZV.woff","/_astro/poppins-latin-ext-700-normal.CE2WFKmF.woff","/_astro/poppins-latin-ext-800-normal.Dc5wQtSP.woff","/_astro/bebas-neue-latin-400-normal.Bv0c_J_s.woff","/_astro/poppins-latin-ext-400-normal.Ce_uWq1Z.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/bebas-neue-latin-ext-400-normal.DZC-Wzbs.woff","/_astro/index.CNiLvDTz.css","/_astro/index.DHO-3tnk.css","/_astro/thecubeday.DqviZ5a7.css","/favicon.svg","/sw.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"w01PU5/V2PWv5L5lX42oVD8lMtzlypH/zrP5kjVnmrM="});

export { manifest };