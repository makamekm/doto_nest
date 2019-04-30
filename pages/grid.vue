<template>
  <div class="gl-layout-margin">
    <form-grid :layout="layout" @change="layout = $event">
      <template v-slot:0>
        <div>
          <b-field label="Name">
            <b-input type="email" name="comments"></b-input>
          </b-field>
        </div>
      </template>
      <template v-slot:1>
        <div>
          <b-field label="Message">
            <b-input type="email" name="comments"></b-input>
          </b-field>
        </div>
      </template>
      <template v-slot:2>
        <div>
          <b-field label="Email">
            <b-input type="email" name="comments"></b-input>
          </b-field>
        </div>
      </template>
      <template v-slot:3>
        <div>
          <b-field label="Message">
            <b-input type="email" name="comments"></b-input>
          </b-field>
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
    layout: [1, 1, 1, 1],
  }),
  components: {
    FormGrid,
  },
}
</script>
