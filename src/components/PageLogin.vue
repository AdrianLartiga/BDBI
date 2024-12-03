<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Iniciar Sesión</h2>
      <div class="login-form">
        <p-inputtext v-model="username" placeholder="Usuario" />
        <p-password v-model="password" placeholder="Contraseña" :feedback="false" />
        <p-button label="Iniciar Sesión" icon="pi pi-sign-in" @click="login" class="login-button" />
      </div>
    </div>

    <!-- Componente ConfirmDialog -->
    <p-confirm-dialog />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import ConfirmDialog from 'primevue/confirmdialog'; // Importa el componente ConfirmDialog
import { useConfirm } from 'primevue/useconfirm'; // Importa el hook para usar confirmDialog

export default {
  name: 'PageLogin',
  components: {
    'p-inputtext': InputText,
    'p-password': Password,
    'p-button': Button,
    'p-confirm-dialog': ConfirmDialog, // Registra ConfirmDialog
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const confirm = useConfirm(); // Obtén la función confirmDialog usando el hook

    const login = () => {
      if (username.value === 'Admin_Adrian' && password.value === 'Zupra_0523') {
        confirm.require({
          message: '¡Bienvenido, Admin_Adrian!',
          header: 'Inicio de Sesión Exitoso',
          icon: 'pi pi-check',
          accept: () => {
            router.push('/home'); // Redirige al usuario a PageHome
          },
        });
      } else if (username.value !== 'Admin_Adrian') {
        confirm.require({
          message: 'El usuario es incorrecto.',
          header: 'Error de Inicio de Sesión',
          icon: 'pi pi-exclamation-triangle',
        });
      } else if (password.value !== 'Zupra_0523') {
        confirm.require({
          message: 'La contraseña es incorrecta.',
          header: 'Error de Inicio de Sesión',
          icon: 'pi pi-exclamation-triangle',
        });
      }
    };

    return { username, password, login };
  },
};
</script>

<style scoped>
/* Fondo de la página */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #34d399; /* Fondo verde claro */
}

/* Estilos del cuadro de login */
.login-card {
  width: 450px;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: 'Arial', sans-serif;
}

/* Estilo del título */
.login-card h2 {
  margin-bottom: 1.5rem;
  color: #333;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
}

/* Estilos del formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Estilo del botón */
.login-button {
  margin-top: 1.5rem;
  padding: 0.8rem;
  font-size: 1.2rem;
}
</style>
