<template>
  <nav>
    <li><router-link v-bind:to="'/geoff'" exact>Geoff</router-link></li>
    <li><router-link v-bind:to="'/'">Tj</router-link></li>
  </nav>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>