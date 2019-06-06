<template>
  <div class="container m-t-6 p-b-6">
    <div class="columns is-multiline">
      <div class="column is-12 is-4-desktop" v-for="a in [1,2,3,4,5]" v-bind:key="a">
        <div class="card m-t-3 p-t-5 p-b-6 p-l-6 p-r-6">
          <div class="has-text-weight-semibold is-size-6">
            Raymond James
          </div>
          <div class="divider m-t-4"></div>
          <div class="m-t-4">
            <div class="has-text-weight-semibold is-size-3">
              The right advice
            </div>
            <div class="has-text-weight-medium is-size-3">
              starts with a trusted relationship.
            </div>
            <div class="m-t-4">
              We believe financial advice is about more than just having a plan. It’s about having the right plan for you. And that only happens with a true understanding of your whole life, beyond just your finances. Because as your needs become more complex, sophisticated advice and a relationship built for the long term become even more important.
            </div>
            <div class="has-text-right m-t-5">
              <button class="button is-hero">
                Learn more
              </button>
            </div>
          </div>
        </div>
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
  layout: 'full',
  data: () => ({
    columns: [
      {
        field: "name",
        label: "Name",
        sortable: true,
      },
      {
        field: "version.version",
        label: "Version",
        sortable: true,
      },
      {
        field: "status",
        label: "Status",
        sortable: true,
      },
      {
        field: "author",
        label: "Author",
        sortable: true,
      },
      {
        field: "date",
        label: "Date",
        sortable: true,
      },
      {
        field: "comments",
        label: "Comments",
        sortable: true,
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
