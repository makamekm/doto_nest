<template>
  <div class="gl-layout-margin">
    <form-grid :cols="2">
      <template v-slot:1>
        <div>
          Fdfdf
        </div>
      </template>
      <template v-slot:2>
        <div>
          fghfghf
        </div>
      </template>
    </form-grid>
  </div>
</template>

<script lang="ts">
import FormGrid from "~/components/form-grid.vue";

export default {
  middleware: ['auth'],
  auth: false,
  data: () => ({
  }),
  components: {
    FormGrid,
  },
}
</script>
