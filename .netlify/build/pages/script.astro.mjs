export { renderers } from '../renderers.mjs';

const checkPerimission = () =>{
    if (!('serviceWorker' in Navigator)){
        throw new Error("No support for service worker");
    }
};

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
};

checkPerimission();
await registerSW();

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
