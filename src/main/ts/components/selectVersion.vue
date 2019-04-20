<template>
  <b-field horizontal label="Version">
    <b-select placeholder="Select version">
      <option v-for="item in data" v-bind:key="item.id" :value="item.id">{{ item.version }}</option>
    </b-select>
  </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const NodeStore = namespace("node");

@Component({})
export default class extends Vue {
  @NodeStore.State("versions") data;
}
</script>