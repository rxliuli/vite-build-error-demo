<template>
  <a-modal :visible="true" :width="'70%'">
    <div>
      <a-button type="primary">hello</a-button>
    </div>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Hello2 from './Hello2.vue'

export default defineComponent({
  name: 'Hello',
  components: { Hello2 },
})
</script>
