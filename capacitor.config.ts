import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'https://pymewebteam-reservation.vercel.app/',
  appName: 'PymeWebTeam Reservation',
  webDir: './dist', // Usar la URL de tu aplicación desplegada en Netlify
  bundledWebRuntime: false, 
  server: {
    androidScheme: "https",
    url: "https://pymewebteam-reservation.vercel.app/",
    cleartext: true
  }
 // No incluir el runtime de Capacitor
};

export default config;