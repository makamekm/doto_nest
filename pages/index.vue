<template>
  <div>
    Hello World!
    <b-field label="Name">
      <b-input v-model="value"></b-input>
    </b-field>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';
import Todo from '~/models/Todo';

@Component({
  data: () => ({
    value: "",
  }),
  components: {
    // AtInput,
  }
})
export default class extends Vue {
  // @Prop({ type: [Object], required: true }) todos!: Todo[]
}
</script>