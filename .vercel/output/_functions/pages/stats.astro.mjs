import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../chunks/astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_hSSAhQDN.mjs';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_D5aqO2ZD.mjs';
export { renderers } from '../renderers.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav" data-astro-cid-7rsf5m4q> <a href="/" class="fa-solid fa-arrow-left nav__arrow" data-astro-cid-7rsf5m4q></a> <h1 class="nav__title" data-astro-cid-7rsf5m4q>Mi Panel</h1> </nav> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Stats/Header/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-ykef3nix> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-ykef3nix": true })} </header> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Stats/Header/Header.astro", void 0);

const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  let { data: reservation, error } = await supabase.from("reservation").select("*");
  let reservationArr = reservation?.reverse();
  const today = /* @__PURE__ */ new Date();
  const todayStart = new Date(today.setHours(0, 0, 0, 0)).getTime();
  reservationArr = await Promise.all(
    reservationArr?.map(async (res) => {
      if (!res.restaurant) return null;
      if (res.allergy == "") {
        res.allergy = "No hay alergias";
      }
      let restaurantId;
      if (res.restaurant === "DAY") {
        restaurantId = "1";
      } else if (res.restaurant === "FUSION") {
        restaurantId = "2";
      } else if (res.restaurant === "DE LA FONT") {
        restaurantId = "3";
      }
      if (restaurantId) {
        const reservationDate = res.date ? new Date(res.date).getTime() : null;
        if (!reservationDate || reservationDate < todayStart) {
          await supabase.from("reservation").delete().eq("id", res.id);
          return null;
        } else {
          return { ...res, restaurantId };
        }
      }
      return null;
    }) || []
  );
  reservationArr = reservationArr.filter((res) => res !== null);
  reservationArr = reservationArr?.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : Infinity;
    const dateB = b.date ? new Date(b.date).getTime() : Infinity;
    if (dateA === dateB) {
      const hourA = a.hour ? parseInt(a.hour.replace(":", ""), 10) : Infinity;
      const hourB = b.hour ? parseInt(b.hour.replace(":", ""), 10) : Infinity;
      return hourA - hourB;
    }
    return dateA - dateB;
  });
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return renderTemplate`${reservationArr?.map((res) => renderTemplate`${maybeRenderHead()}<h3 class="title"${addAttribute(res.restaurantId, "data-title")} data-astro-cid-v5dvx5p5>the cube ${res.restaurant}</h3>
  <div class="card"${addAttribute(res.restaurantId, "data-restaurant")} data-astro-cid-v5dvx5p5><h1 class="card__ultra-title" data-astro-cid-v5dvx5p5>Reserva</h1><p class="card__title" data-astro-cid-v5dvx5p5> Nombre: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.name}</span></p><p class="card__title" data-astro-cid-v5dvx5p5> Email: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.email}</span></p><p class="card__title" data-astro-cid-v5dvx5p5> Número de Teléfono: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.phone}</span></p><p class="card__title" data-astro-cid-v5dvx5p5>Hora: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.hour}</span></p><p class="card__title" data-astro-cid-v5dvx5p5>Fecha: <span class="card__title--data" data-astro-cid-v5dvx5p5>${formatDate(res.date)}</span></p><p class="card__title" data-astro-cid-v5dvx5p5>Personas: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.people}</span></p><p class="card__title" data-astro-cid-v5dvx5p5>Alergias: <span class="card__title--data" data-astro-cid-v5dvx5p5>${res.allergy}</span></p></div>`)}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Stats/Main/Card.astro", void 0);

const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  let { data: reservation, error } = await supabase.from("reservation").select("*");
  let reservationArr = reservation?.reverse();
  return renderTemplate`${maybeRenderHead()}<main class="main" data-astro-cid-nutkp445> <div class="main__total-container" data-astro-cid-nutkp445> <p class="main__total-container__total" data-astro-cid-nutkp445>${reservationArr?.length}</p> <h1 class="main__total-container__title" data-astro-cid-nutkp445>Total de reservas</h1> </div> <h1 class="main__title" data-astro-cid-nutkp445>Reservas:</h1> <div class="main__booking-container" data-astro-cid-nutkp445> ${renderComponent($$result, "Card", $$Card, { "data-astro-cid-nutkp445": true })} </div> </main> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Stats/Main/Main.astro", void 0);

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stats" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, {})} ` })}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/stats.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/pages/stats.astro";
const $$url = "/stats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Stats,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
