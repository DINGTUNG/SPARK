<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/images/logo/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Practice />

      <Test />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<<<<<<< HEAD
<style scoped></style>
=======
<style scoped>
</style>
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b
