<template>
  <two-column-layout :logo="logo" :options="navOptions">
    <router-view/>
  </two-column-layout>
</template>

<script>
  import logo from '@/assets/logo.png';
  import { PhHouse, PhQuestion, PhGear, PhSignOut } from 'phosphor-vue';

  export default {
    data() {
      return {
        logo,
        navOptions: [
          {
            name: 'Home',
            path: '/',
            icon: PhHouse,
          },
          {
            name: 'About',
            path: '/about',
            icon: PhQuestion,
          },
          {
            name: 'Settings',
            path: '/settings',
            icon: PhGear,
          },
          {
            name: 'Logout',
            path: '',
            icon: PhSignOut,
          },
        ]
      }
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
</style>

