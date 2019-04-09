<template>
  <div>
    Hello World!
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Prop } from 'vue-property-decorator';
import Todo from '~/models/Todo';

@Component({})
export default class extends Vue {
  // @Prop({ type: [Object], required: true }) todos!: Todo[]
}
</script>