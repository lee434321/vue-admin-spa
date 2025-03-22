<template>
  <RouterView class="root"></RouterView>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Montserrat, "Helvetica Neue", Arial, "Microsoft Yahei",sans-serif;
}

#app {
  font-family: Montserrat,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --sidebar-width: 220px;
  --sidebar-collapsed-width: 64px;
}
</style>
