const Sticker2 = new Proxy({"src":"/_astro/sticker-2.CO_YOeNV.png","width":950,"height":1044,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/assets/Main/Restaurants/r-2/sticker-2.png";
							}
							
							return target[name];
						}
					});

export { Sticker2 as S };
