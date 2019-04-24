<template>
  <div class="gl-layout-margin">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">Nodes</div>
      </header>
      <div class="card-content" style="padding: 0">
        <b-table :data="data" :columns="columns" 
          :row-class="() => ({'lc-pointer': true})"
          @click="openNode"
          hoverable striped/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const NodeStore = namespace("node");

@Component({
  middleware: ['auth'],
  data: () => ({
    columns: [
      {
        field: "name",
        label: "Name"
      },
      {
        field: "version.version",
        label: "Version"
      },
      {
        field: "status",
        label: "Status"
      },
      {
        field: "author",
        label: "Author"
      },
      {
        field: "date",
        label: "Date"
      },
      {
        field: "comments",
        label: "Comments"
      }
    ]
  }),
  fetch: async props => props.store.dispatch("node/loadNodes")
})
export default class extends Vue {
  @NodeStore.State("nodes") data;

  openNode(row) {
    this.$router.push({
      path: `/node/${row.id}`
    });
  }
}
</script>

<style>
.lc-pointer {
  cursor: pointer;
}
</style>
