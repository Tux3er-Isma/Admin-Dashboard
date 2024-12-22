const checkPerimission = () =>{
    if (!('serviceWorker' in Navigator)){
        throw new Error("No support for service worker");
    }
}

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
}

checkPerimission();
await registerSW()