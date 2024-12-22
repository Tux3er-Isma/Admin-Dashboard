const Sticker1 = new Proxy({"src":"/_astro/sticker-1.7ZfgDKxh.png","width":1156,"height":1161,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/admin-dashboard/src/assets/Main/Restaurants/r-1/sticker-1.png";
							}
							
							return target[name];
						}
					});

export { Sticker1 as S };
