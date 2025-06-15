import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_hSSAhQDN.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-54yrv3kt> <h1 class="header__title" data-astro-cid-54yrv3kt>Verificar Código</h1> <h2 class="header__subtitle" data-astro-cid-54yrv3kt>TheCube<span class="header__subtitle__restaurant" data-astro-cid-54yrv3kt>World</span></h2> </header> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Verificator/Header/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<main class="main" data-astro-cid-dow32uny> <h2 class="main__title" data-astro-cid-dow32uny>
Introduzca el c\xF3digo que le ense\xF1e el cliente
</h2> <input type="text" placeholder="A834U0JFAFJ983" class="main__inpt" data-astro-cid-dow32uny> <button type="submit" class="main__btn" data-astro-cid-dow32uny>Verificar</button> </main> <!-- <Popup></Popup> -->  <script>
    const inpt = document.querySelector(".main__inpt");
    const btn = document.querySelector(".main__btn");
    const popup = document.querySelector('.popup');
    let cookiesCode = localStorage.getItem("code");
    let allowed;
    let foodCode;
    let foodWinner;

    // if (cookiesCode != null) {
    //     inpt.value = cookiesCode;
    //     localStorage.removeItem("code");
    // }

    if (inpt.value.trim() == "") {
        btn.style.cursor = "not-allowed";
        allowed = false;
    }

// Fix the event listener for input validation
inpt.addEventListener("keyup", async (evt) => {
    // Inicializar Supabase
    const { createClient } = supabase;

    const SUPABASE_URL = "https://ntihsielwhbvsdrakvhb.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU";

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Basic length validation
    if (evt.target.value.length < 14) {
        btn.style.cursor = "not-allowed";
        allowed = false;
        return;
    }

    // Get reservations that match the code (more efficient than getting all)
    let { data: codes, error } = await supabaseClient
        .from("codes")
        .select("*")
        .eq("code", evt.target.value.trim());
    foodCode = codes;

    if (error) {
        console.log("Error al obtener las reservas:", error);
        btn.style.cursor = "not-allowed";
        allowed = false;
        return;
    }

    // Check if any reservation with this code exists
    if (codes && codes.length > 0) {
        console.log("Codigo encontrado");
        btn.style.cursor = "pointer";
        allowed = true;
    } else {
        console.log("No existe el c\xF3digo");
        btn.style.cursor = "not-allowed";
        allowed = false;
    }

    console.log(foodCode[0].code)

    if (foodCode[0].code.startsWith('1')) {
        foodWinner = "Crepe";
        console.log("Crepe");
    } else if (foodCode[0].code.startsWith('2')) {
        foodWinner = "Teque\xF1os";
        console.log("Teque\xF1os");
    } else if (foodCode[0].code.startsWith('3')) {
        console.log("Ca\xF1a");
        foodWinner = "Ca\xF1a";
    } else if (foodCode[0].code.startsWith('4')) {
        console.log("1 Salchipapa");
        foodWinner = "Salchipapa";
    } else if (foodCode[0].code.startsWith('5')) {
        console.log("1 Coctail");
        foodWinner = "Coctail";
    } else if (foodCode[0].code.startsWith('6')) {
        console.log("50% Cena 1p");
        foodWinner = "50% Cena 1p";
    }
});


// Fix the click event handler for actual cancellation
btn.addEventListener("click", async () => {
    if (!allowed) {
        console.log("No existe el c\xF3digo");
        alert("No existe el c\xF3digo")
        inpt.value = "";
        btn.classList.remove("main__not-exist");
        allowed = false;
        btn.style.cursor = "not-allowed";
        return;
    }

    let code = inpt.value.trim();
    // Inicializar Supabase
    const { createClient } = supabase;

    const SUPABASE_URL = "https://ntihsielwhbvsdrakvhb.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU";

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Delete the reservation
    const { data: deletedReservation, error } = await supabaseClient
        .from("codes")
        .delete()
        .eq("code", code)
        .select()

    if (error) {
        console.log("Error al cancelar la reserva:", error);
        return;
    }

    // // Show success state
    // popup.style.opacity= '1';
    // popup.style.zIndex = "2";
    // console.log("Reserva cancelada exitosamente");
    // console.log("Detalles de la reserva cancelada:", deletedReservation);
    // btn.classList.add("main__canceled");
    // btn.innerHTML = "Reserva Cancelada";

    
    setTimeout(() => {
        inpt.value = "";
        btn.classList.remove("main__canceled");
        btn.innerHTML = "C\xD3DIGO VERIFICADO";
        alert(\`El cliente ha ganado: \${foodWinner}\`);
        allowed = false;
        btn.style.cursor = "not-allowed";
    }, 2000);
});
<\/script>`], ["", `<main class="main" data-astro-cid-dow32uny> <h2 class="main__title" data-astro-cid-dow32uny>
Introduzca el c\xF3digo que le ense\xF1e el cliente
</h2> <input type="text" placeholder="A834U0JFAFJ983" class="main__inpt" data-astro-cid-dow32uny> <button type="submit" class="main__btn" data-astro-cid-dow32uny>Verificar</button> </main> <!-- <Popup></Popup> -->  <script>
    const inpt = document.querySelector(".main__inpt");
    const btn = document.querySelector(".main__btn");
    const popup = document.querySelector('.popup');
    let cookiesCode = localStorage.getItem("code");
    let allowed;
    let foodCode;
    let foodWinner;

    // if (cookiesCode != null) {
    //     inpt.value = cookiesCode;
    //     localStorage.removeItem("code");
    // }

    if (inpt.value.trim() == "") {
        btn.style.cursor = "not-allowed";
        allowed = false;
    }

// Fix the event listener for input validation
inpt.addEventListener("keyup", async (evt) => {
    // Inicializar Supabase
    const { createClient } = supabase;

    const SUPABASE_URL = "https://ntihsielwhbvsdrakvhb.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU";

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Basic length validation
    if (evt.target.value.length < 14) {
        btn.style.cursor = "not-allowed";
        allowed = false;
        return;
    }

    // Get reservations that match the code (more efficient than getting all)
    let { data: codes, error } = await supabaseClient
        .from("codes")
        .select("*")
        .eq("code", evt.target.value.trim());
    foodCode = codes;

    if (error) {
        console.log("Error al obtener las reservas:", error);
        btn.style.cursor = "not-allowed";
        allowed = false;
        return;
    }

    // Check if any reservation with this code exists
    if (codes && codes.length > 0) {
        console.log("Codigo encontrado");
        btn.style.cursor = "pointer";
        allowed = true;
    } else {
        console.log("No existe el c\xF3digo");
        btn.style.cursor = "not-allowed";
        allowed = false;
    }

    console.log(foodCode[0].code)

    if (foodCode[0].code.startsWith('1')) {
        foodWinner = "Crepe";
        console.log("Crepe");
    } else if (foodCode[0].code.startsWith('2')) {
        foodWinner = "Teque\xF1os";
        console.log("Teque\xF1os");
    } else if (foodCode[0].code.startsWith('3')) {
        console.log("Ca\xF1a");
        foodWinner = "Ca\xF1a";
    } else if (foodCode[0].code.startsWith('4')) {
        console.log("1 Salchipapa");
        foodWinner = "Salchipapa";
    } else if (foodCode[0].code.startsWith('5')) {
        console.log("1 Coctail");
        foodWinner = "Coctail";
    } else if (foodCode[0].code.startsWith('6')) {
        console.log("50% Cena 1p");
        foodWinner = "50% Cena 1p";
    }
});


// Fix the click event handler for actual cancellation
btn.addEventListener("click", async () => {
    if (!allowed) {
        console.log("No existe el c\xF3digo");
        alert("No existe el c\xF3digo")
        inpt.value = "";
        btn.classList.remove("main__not-exist");
        allowed = false;
        btn.style.cursor = "not-allowed";
        return;
    }

    let code = inpt.value.trim();
    // Inicializar Supabase
    const { createClient } = supabase;

    const SUPABASE_URL = "https://ntihsielwhbvsdrakvhb.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU";

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Delete the reservation
    const { data: deletedReservation, error } = await supabaseClient
        .from("codes")
        .delete()
        .eq("code", code)
        .select()

    if (error) {
        console.log("Error al cancelar la reserva:", error);
        return;
    }

    // // Show success state
    // popup.style.opacity= '1';
    // popup.style.zIndex = "2";
    // console.log("Reserva cancelada exitosamente");
    // console.log("Detalles de la reserva cancelada:", deletedReservation);
    // btn.classList.add("main__canceled");
    // btn.innerHTML = "Reserva Cancelada";

    
    setTimeout(() => {
        inpt.value = "";
        btn.classList.remove("main__canceled");
        btn.innerHTML = "C\xD3DIGO VERIFICADO";
        alert(\\\`El cliente ha ganado: \\\${foodWinner}\\\`);
        allowed = false;
        btn.style.cursor = "not-allowed";
    }, 2000);
});
<\/script>`])), maybeRenderHead());
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Verificator/Main/Main.astro", void 0);

const $$Verificator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stats", "data-astro-cid-gs42w532": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="body-container" data-astro-cid-gs42w532> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-gs42w532": true })} ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-gs42w532": true })} </div> ` })} `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/verificator.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/verificator.astro";
const $$url = "/verificator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Verificator,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
