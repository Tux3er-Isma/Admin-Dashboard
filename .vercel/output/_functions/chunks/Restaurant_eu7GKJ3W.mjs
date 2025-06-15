import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent, e as renderHead } from './astro/server_BfTXMgia.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from './supabase_D5aqO2ZD.mjs';
/* empty css                              */
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { restaurant } = Astro2.props;
  let { data: reservation, error } = await supabase.from("reservation").select("*");
  if (error) {
    console.error("Error al obtener las reservas:", error);
  }
  let reservationArr = reservation?.reverse() || [];
  const today = /* @__PURE__ */ new Date();
  const todayStart = new Date(today.setHours(0, 0, 0, 0)).getTime();
  reservationArr = await Promise.all(
    reservationArr?.map(async (res) => {
      const isValidRestaurant = restaurant === "1" && res.restaurant === "DAY" || restaurant === "2" && res.restaurant === "FUSION" || restaurant === "3" && res.restaurant === "DE LA FONT";
      if (res.allergy == "") {
        res.allergy = "No hay alergias";
      }
      const reservationDate = res.date ? new Date(res.date).getTime() : null;
      if (!reservationDate || reservationDate < todayStart) {
        await supabase.from("reservation").delete().eq("id", res.id);
        return null;
      }
      return isValidRestaurant ? res : null;
    }) || []
  );
  reservationArr = reservationArr.filter((res) => res !== null);
  reservationArr = reservationArr.sort((a, b) => {
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
  return renderTemplate`${reservationArr.map((res) => renderTemplate`${maybeRenderHead()}<h3 class="title"${addAttribute(restaurant, "data-title")} data-astro-cid-tocpnwb6>the cube ${res.restaurant}</h3>
  <div class="card"${addAttribute(restaurant, "data-restaurant")} data-astro-cid-tocpnwb6><h1 class="card__ultra-title" data-astro-cid-tocpnwb6>Reserva</h1><p class="card__title" data-astro-cid-tocpnwb6>Nombre: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.name}</span></p><p class="card__title" data-astro-cid-tocpnwb6> Email: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.email}</span></p><p class="card__title" data-astro-cid-tocpnwb6> Número de Teléfono: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.phone}</span></p><p class="card__title" data-astro-cid-tocpnwb6>Hora: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.hour}</span></p><p class="card__title" data-astro-cid-tocpnwb6>Fecha: <span class="card__title--data" data-astro-cid-tocpnwb6>${formatDate(res.date)}</span></p><p class="card__title" data-astro-cid-tocpnwb6>Personas: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.people}</span></p><p class="card__title" data-astro-cid-tocpnwb6>Alergias: <span class="card__title--data" data-astro-cid-tocpnwb6>${res.allergy}</span></p></div>`)}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Restaurant/Main/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  const { restaurant } = Astro2.props;
  let { data: reservation, error } = await supabase.from("reservation").select("*");
  let filteredReservations = "";
  if (restaurant === "1") {
    filteredReservations = reservation?.filter(
      (res) => res.restaurant === "DAY"
    );
  } else if (restaurant === "2") {
    filteredReservations = reservation?.filter(
      (res) => res.restaurant === "FUSION"
    );
  } else if (restaurant === "3") {
    filteredReservations = reservation?.filter(
      (res) => res.restaurant === "DE LA FONT"
    );
  }
  return renderTemplate`${maybeRenderHead()}<main class="main"${addAttribute(restaurant, "data-restaurant")} data-astro-cid-grhdpu6s> <div class="main__total-container" data-astro-cid-grhdpu6s> <h1 class="main__total-container__title" data-astro-cid-grhdpu6s>Total de reservas:</h1> <p class="main__total-container__total" data-astro-cid-grhdpu6s> ${filteredReservations?.length} </p> </div> <hr class="main__line" data-astro-cid-grhdpu6s> <div class="main__booking-container" data-astro-cid-grhdpu6s> ${renderComponent($$result, "Card", $$Card, { "restaurant": restaurant, "data-astro-cid-grhdpu6s": true })} </div> </main> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/components/Restaurant/Main/Main.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Restaurant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Restaurant;
  const { icon, title, restaurant } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', "><title>Admin Dashboard THECUBE", '</title><script src="https://kit.fontawesome.com/a1618bce8f.js" crossorigin="anonymous"><\/script>', "</head> <body", "> <!-- <Header icon={icon} title={title} restaurant={restaurant}></Header> --> ", " </body></html>"])), addAttribute(icon, "href"), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(restaurant, "data-restaurant"), renderComponent($$result, "Main", $$Main, { "restaurant": restaurant }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/layouts/Restaurant.astro", void 0);

export { $$Restaurant as $ };
