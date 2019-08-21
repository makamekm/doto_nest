<template>
  <div>
    <div class="hero is-primary p-b-6 p-t-6 p-l-7 p-r-7">
      <div class="has-text-weight-bold is-size-5" style="letter-spacing: 1px">
        Expenses
      </div>
    </div>

    <div class="container m-t-6 p-b-6">

      <div class="p-b-2 p-l-4 p-r-4 p-l-0-desktop p-r-0-desktop">
        <b-pagination
          :total="100"
          :current.sync="currentPage"
          :per-page="20"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page">
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";
import { VueperSlides, VueperSlide } from 'vueperslides';

const NodeStore = namespace("node");

@Component({
  components: { VueperSlides, VueperSlide },
  data: () => ({
    isShowFilters: false,
    currentPage: 1,
  }),
  fetch: async props => props.store.dispatch("cart/loadItems"),
})
export default class extends Vue {
  @NodeStore.State("nodes") data;

  isShowFilters?: boolean;

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
