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

    <!-- Componente Toast -->
    <p-toast />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Toast from "primevue/toast"; // Importación del componente Toast
import { useToast } from "primevue/usetoast"; // Importación del hook useToast

export default {
  name: "PageLogin",
  components: {
    "p-inputtext": InputText,
    "p-password": Password,
    "p-button": Button,
    "p-toast": Toast, // Registro del componente Toast
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();
    const toast = useToast();

    const login = () => {
      if (username.value === "Admin_Adrian" && password.value === "Zupra_0523") {
        toast.add({
          severity: "success",
          summary: "Inicio de Sesión Exitoso",
          detail: "¡Bienvenido, Admin_Adrian!",
          life: 3000,
        });
        router.push("/home"); // Redirige al usuario a la página principal
      } else if (username.value !== "Admin_Adrian") {
        toast.add({
          severity: "error",
          summary: "Error de Inicio de Sesión",
          detail: "El usuario es incorrecto.",
          life: 3000,
        });
      } else if (password.value !== "Zupra_0523") {
        toast.add({
          severity: "error",
          summary: "Error de Inicio de Sesión",
          detail: "La contraseña es incorrecta.",
          life: 3000,
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
