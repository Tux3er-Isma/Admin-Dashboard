import { e as createComponent, r as renderTemplate, g as addAttribute, k as renderSlot, j as renderHead, h as createAstro } from './astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
/* empty css                         */

const icon = new Proxy({"src":"/_astro/icon.CB3sXh-v.png","width":165,"height":171,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/assets/Icons/icon.png";
							}
							
							return target[name];
						}
					});

const pymewebteam = new Proxy({"src":"/_astro/pymewebteam.BDzzjIjz.png","width":2547,"height":767,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/assets/Icons/pymewebteam.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><title>PymeWebTeam Reservation</title><script src="https://kit.fontawesome.com/a1618bce8f.js" crossorigin="anonymous"><\/script>', '</head> <body> <div class="principal-container"> ', ' </div> <div class="animation"> <img', ' alt="PymeWebTeam" class="animation__icon"> <div class="animation__content"> <h1 class="animation__content__title">THE CUBE</h1> <div class="animation__content__subtitle-container"> <h2 class="animation__content__subtitle-container__subtitle">\nby\n</h2> <img', ' alt="PymeWebTeam" class="animation__content__subtitle-container__img"> </div> </div> </div>  <script>\n	const principalContainer = document.querySelector(".principal-container");\n	const animationContainer = document.querySelector(".animation");\n\n	// Verifica si la animaci\xF3n ya se ejecut\xF3\n	if (!localStorage.getItem("animationPlayed")) {\n		// Si no se ha ejecutado, muestra la animaci\xF3n\n		setTimeout(() => {\n			principalContainer.style.display = "block";\n			animationContainer.style.display = "none";\n\n			// Marca la animaci\xF3n como ejecutada\n			localStorage.setItem("animationPlayed", "true");\n		}, 2000);\n	} else {\n		// Si ya se ejecut\xF3, salta directamente al contenido principal\n		principalContainer.style.display = "block";\n		animationContainer.style.display = "none";\n	}\n<\/script> <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.47.10/dist/umd/supabase.min.js"><\/script> <script>\n	if (!("Notification" in window)) {\n		alert("Tu navegador no soporta notificaciones.");\n	}\n\n	// Supabase: Inicializaci\xF3n y suscripci\xF3n\n	const supabasePublicClient = supabase.createClient(\n		"https://ntihsielwhbvsdrakvhb.supabase.co",\n		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU",\n	);\n\n	const getData = async () => {\n		await supabasePublicClient\n			.channel("reservation")\n			.on(\n				"postgres_changes",\n				{\n					event: "INSERT",\n					schema: "public",\n					table: "reservation",\n				},\n				(payload) => {\n					if (Notification.permission === "granted") {\n						navigator.serviceWorker.register("sw.js");\n						Notification.requestPermission(function (result) {\n							if (result === "granted") {\n								navigator.serviceWorker.ready.then(\n									function (registration) {\n										registration.showNotification(\n											`Nueva Reserva en THE CUBE ${payload.new.restaurant}`,\n											{\n												body: `${payload.new.date} a las ${payload.new.hour} para ${payload.new.people} con nombre ${payload.new.name}`,\n											},\n										);\n									},\n								);\n							}\n						});\n					} else if (Notification.permission === "default") {\n						Notification.requestPermission().then((perm) => {\n							if (perm === "granted") {\n								navigator.serviceWorker.register("sw.js");\n								Notification.requestPermission(\n									function (result) {\n										if (result === "granted") {\n											navigator.serviceWorker.ready.then(\n												function (registration) {\n													registration.showNotification(\n														`Nueva Reserva en THE CUBE ${payload.new.restaurant}`,\n														{\n															body: `${payload.new.date} a las ${payload.new.hour} para ${payload.new.people} con nombre ${payload.new.name}`,\n														},\n													);\n												},\n											);\n										}\n									},\n								);\n							} else {\n								alert("Has bloqueado las notis");\n							}\n						});\n					} else {\n						alert("Has bloqueado las notis");\n					}\n\n					console.log(payload);\n				},\n			)\n			.subscribe();\n	};\n\n	getData();\n<\/script></body></html>'], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><title>PymeWebTeam Reservation</title><script src="https://kit.fontawesome.com/a1618bce8f.js" crossorigin="anonymous"><\/script>', '</head> <body> <div class="principal-container"> ', ' </div> <div class="animation"> <img', ' alt="PymeWebTeam" class="animation__icon"> <div class="animation__content"> <h1 class="animation__content__title">THE CUBE</h1> <div class="animation__content__subtitle-container"> <h2 class="animation__content__subtitle-container__subtitle">\nby\n</h2> <img', ' alt="PymeWebTeam" class="animation__content__subtitle-container__img"> </div> </div> </div>  <script>\n	const principalContainer = document.querySelector(".principal-container");\n	const animationContainer = document.querySelector(".animation");\n\n	// Verifica si la animaci\xF3n ya se ejecut\xF3\n	if (!localStorage.getItem("animationPlayed")) {\n		// Si no se ha ejecutado, muestra la animaci\xF3n\n		setTimeout(() => {\n			principalContainer.style.display = "block";\n			animationContainer.style.display = "none";\n\n			// Marca la animaci\xF3n como ejecutada\n			localStorage.setItem("animationPlayed", "true");\n		}, 2000);\n	} else {\n		// Si ya se ejecut\xF3, salta directamente al contenido principal\n		principalContainer.style.display = "block";\n		animationContainer.style.display = "none";\n	}\n<\/script> <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.47.10/dist/umd/supabase.min.js"><\/script> <script>\n	if (!("Notification" in window)) {\n		alert("Tu navegador no soporta notificaciones.");\n	}\n\n	// Supabase: Inicializaci\xF3n y suscripci\xF3n\n	const supabasePublicClient = supabase.createClient(\n		"https://ntihsielwhbvsdrakvhb.supabase.co",\n		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU",\n	);\n\n	const getData = async () => {\n		await supabasePublicClient\n			.channel("reservation")\n			.on(\n				"postgres_changes",\n				{\n					event: "INSERT",\n					schema: "public",\n					table: "reservation",\n				},\n				(payload) => {\n					if (Notification.permission === "granted") {\n						navigator.serviceWorker.register("sw.js");\n						Notification.requestPermission(function (result) {\n							if (result === "granted") {\n								navigator.serviceWorker.ready.then(\n									function (registration) {\n										registration.showNotification(\n											\\`Nueva Reserva en THE CUBE \\${payload.new.restaurant}\\`,\n											{\n												body: \\`\\${payload.new.date} a las \\${payload.new.hour} para \\${payload.new.people} con nombre \\${payload.new.name}\\`,\n											},\n										);\n									},\n								);\n							}\n						});\n					} else if (Notification.permission === "default") {\n						Notification.requestPermission().then((perm) => {\n							if (perm === "granted") {\n								navigator.serviceWorker.register("sw.js");\n								Notification.requestPermission(\n									function (result) {\n										if (result === "granted") {\n											navigator.serviceWorker.ready.then(\n												function (registration) {\n													registration.showNotification(\n														\\`Nueva Reserva en THE CUBE \\${payload.new.restaurant}\\`,\n														{\n															body: \\`\\${payload.new.date} a las \\${payload.new.hour} para \\${payload.new.people} con nombre \\${payload.new.name}\\`,\n														},\n													);\n												},\n											);\n										}\n									},\n								);\n							} else {\n								alert("Has bloqueado las notis");\n							}\n						});\n					} else {\n						alert("Has bloqueado las notis");\n					}\n\n					console.log(payload);\n				},\n			)\n			.subscribe();\n	};\n\n	getData();\n<\/script></body></html>'])), addAttribute(icon.src, "href"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), addAttribute(icon.src, "src"), addAttribute(pymewebteam.src, "src"));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };