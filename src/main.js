// main.js
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice"; // Importa el servicio de Toast
import Toast from "primevue/toast"; // Importa el componente Toast
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

app.use(ToastService); // Agrega el servicio de Toast
app.component("p-toast", Toast); // Registra globalmente el componente Toast

// Usar el enrutador
app.use(router);

// Montar la aplicación
app.mount('#app');
