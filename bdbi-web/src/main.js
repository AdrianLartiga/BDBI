// main.js
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice'; // Importa el servicio de confirmación
import router from './router';
import App from './App.vue';

const app = createApp(App);

// Configuración de PrimeVue con el tema Aura
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false || 'none',
        }
    }
});

// Registrar el servicio de confirmación
app.use(ConfirmationService);

// Usar el enrutador
app.use(router);

// Montar la aplicación
app.mount('#app');
