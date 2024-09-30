<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              required
            />
          </div>
          
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-medium mb-2">Senha</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Entrar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      const response = await axios.get('https://seu-backend.com/api/login', {
        params: {
          email: email.value,
          password: password.value,
        },
      });
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/bemvindo');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  };
  </script>
  
  <style scoped>
  /* Você pode adicionar estilos personalizados aqui, se necessário */
  </style>