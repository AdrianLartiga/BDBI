<template>
  <div class="main-container">
    <!-- Barra superior -->
    <div class="top-bar">
      <div class="top-left">
        <p-button
          icon="pi pi-bars"
          class="p-button-rounded p-button-text sidebar-icon"
          @click="showSidebar = true"
          aria-label="Open Sidebar"
        ></p-button>
        <h2 class="title">Dashboard</h2>
      </div>
      <p-button
        ref="userMenuButton"
        icon="pi pi-user"
        class="p-button-rounded p-button-text user-icon"
        @click="toggleUserMenu"
        aria-label="User Options"
      ></p-button>

      <!-- Menú del Usuario -->
      <p-menu
        :model="userMenuItems"
        :popup="true"
        ref="userMenu"
      ></p-menu>
    </div>

    <!-- Sidebar -->
    <p-sidebar v-model:visible="showSidebar" :dismissable="true" position="left" style="width: 300px;">
      <h3>Datamart</h3>
      <ul>
        <li @click="mostrarReporte('pesos')">Dashboard de Pesos</li>
        <li @click="mostrarReporte('viajes')">Dashboard de Viajes</li>
        <li @click="mostrarReporte('general')">Dashboard General</li>
      </ul>
      <h3>Comparativo</h3>
      <ul>
        <li @click="mostrarReporte('comparativo')">Comparativo de WebScrapping y DataMart</li>
      </ul>
      <h3>Web Scraping</h3>
      <ul>
        <li @click="mostrarReporte('webScraping1')">Dashboard Web Scraping</li>
      </ul>
    </p-sidebar>

    <!-- Indicador de selección de Dashboard -->
    <div v-if="!opcionSeleccionada" class="welcome-message">
      <h2>Bienvenido a la Página Principal</h2>
      <p>Seleccione un Dashboard desde el menú para visualizar sus datos.</p>
    </div>

    <!-- Contenido Principal para Dashboards -->
    <div v-if="opcionSeleccionada" class="dashboard-content">
      <h2>{{ titulosDashboards[opcionSeleccionada] }}</h2>
      <p>{{ descripcionesDashboards[opcionSeleccionada] }}</p>

      <iframe
        v-if="opcionSeleccionada"
        :src="urlsDashboards[opcionSeleccionada]"
        class="dashboard-frame"
        frameborder="12"
        allowfullscreen="true">
      </iframe>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';

export default {
  components: {
    'p-button': Button,
    'p-sidebar': Sidebar,
    'p-menu': Menu,
  },
  data() {
    return {
      showSidebar: false,
      opcionSeleccionada: '', // Para controlar cuál dashboard mostrar
      darkMode: false, // Estado del modo oscuro
      userMenuItems: [
        {
          label: 'Nombre del Usuario: Admin_Adrian',
          disabled: true, // No interactivo, solo informativo
        },
        {
          separator: true,
        },
        {
          label: 'Configuración de Página',
          icon: 'pi pi-cog',
        },
        {
          label: 'Cerrar Sesión',
          icon: 'pi pi-sign-out',
          command: this.cerrarSesion,
        },
      ],
      titulosDashboards: {
        pesos: 'Dashboard de Pesos',
        viajes: 'Dashboard de Viajes',
        general: 'Dashboard General de Power BI',
        comparativo: 'Comparativo de WebScrapping y DataMart',
        webScraping1: 'Dashboard Web Scraping',
        webScraping2: 'Dashboard Web Scraping 2',
      },
      descripcionesDashboards: {
        pesos: 'Aquí podrá visualizar datos relacionados con los pesos de los envíos.',
        viajes: 'Este dashboard muestra información sobre los viajes realizados.',
        general: 'Dashboard principal que contiene información general de la empresa.',
        comparativo: 'Dashboard que compara datos obtenidos por WebScrapping y DataMart.',
        webScraping1: 'Datos obtenidos del análisis de Web Scraping.',
      },
      urlsDashboards: {
        pesos:
          'https://app.powerbi.com/reportEmbed?reportId=f5fa59e6-9228-481d-a05e-d5b40880a042&autoAuth=true&ctid=604ddfd9-1ced-44ae-86c6-fcb0307d6572',
        viajes:
          'https://app.powerbi.com/reportEmbed?reportId=17232f49-956a-4551-9177-90e7809f6db9&autoAuth=true&ctid=604ddfd9-1ced-44ae-86c6-fcb0307d6572',
        general:
          'https://app.powerbi.com/reportEmbed?reportId=9623d741-8274-44d4-8416-ba171dd073e2&autoAuth=true&ctid=604ddfd9-1ced-44ae-86c6-fcb0307d6572',
        comparativo:
          'https://app.powerbi.com/reportEmbed?reportId=6c4d31a3-bc97-4227-8d39-0294e40f30df&autoAuth=true&ctid=604ddfd9-1ced-44ae-86c6-fcb0307d6572',
        webScraping1: 
          'https://app.powerbi.com/reportEmbed?reportId=ffb9963e-e066-4618-893b-1f696117d454&autoAuth=true&ctid=604ddfd9-1ced-44ae-86c6-fcb0307d6572', 
      },
    };
  },
  methods: {
    toggleUserMenu(event) {
      this.$refs.userMenu.toggle(event);
    },
    mostrarReporte(opcion) {
      this.opcionSeleccionada = opcion;
      this.showSidebar = false;
    },
    cerrarSesion() {
      this.$router.push('/');
    },
  },
};
</script>


<style scoped>
/* Barra Superior */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--p-emerald-400); /* Color verde */
  color: white;
}

.top-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.user-icon {
  color: var(--p-emerald-800);
}

/* Estilos de layout */
.main-container {
  display: flex;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  flex-direction: column;
}

.top-bar {
  flex-shrink: 0; /* No se contrae */
}

.dashboard-content {
  flex-grow: 1; /* Ocupa todo el espacio disponible */
  padding: 20px;
  overflow: auto; /* Permite el desplazamiento si el contenido es mayor que el área visible */
}

iframe {
  width: 100%;
  height: 90%; /* Ocupa toda la altura disponible */
  border: none;
}

/* Sidebar Estilos */
p-sidebar {
  flex-shrink: 0; /* No se contrae */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  color: #333;
}

li:hover {
  background-color: #f4f4f4;
}

/* Modo oscuro */
body.dark-mode {
  background-color: #333;
  color: #fff;
}

body.dark-mode .top-bar {
  background-color: #2c3e50;
  border-bottom: 1px solid #666;
}

/* Elimina márgenes del body y asegura que se ocupe todo el alto de la ventana */
body, html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

</style>
