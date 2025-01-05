import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'PymeWebTeam Reservation',
  webDir: 'netlify/v1/functions/ssr/netlify/build/pages', // Usar la URL de tu aplicación desplegada en Netlify
  bundledWebRuntime: false,  // No incluir el runtime de Capacitor
};

export default config;