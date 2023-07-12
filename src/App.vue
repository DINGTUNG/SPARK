<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
<<<<<<< HEAD
=======
import Practice from "./assets/templates/Practice.vue"
import lock from "./assets/templates/lock.vue"

>>>>>>> lai


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/images/logo/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
<<<<<<< HEAD
=======
      <Practice/>
      <lock/>
>>>>>>> lai

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
