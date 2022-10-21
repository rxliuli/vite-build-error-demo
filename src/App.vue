<template>
  <RouterView />
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { RouterView } from 'vue-router'

  export default defineComponent({
    name: 'App',
    components: { RouterView },
  })
</script>
