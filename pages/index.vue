<template>
  <div>
    <div class="notification">
      <b-field label="Name" :type="{'is-danger': errors.has('email')}"
:message="errors.first('email')">
        <b-input v-model="value" v-validate="'required|email'" name="email"></b-input>
      </b-field>
    </div>
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
  }
})
export default class extends Vue {
  // @Prop({ type: [Object], required: true }) todos!: Todo[]
}
</script>