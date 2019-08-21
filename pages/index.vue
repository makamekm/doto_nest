<template>
  <div>
    <div class="hero is-primary p-b-6 p-t-6 p-l-7 p-r-7 on-appear-slide-down on-delay-0">
      <div class="has-text-weight-bold is-size-5" style="letter-spacing: 1px">
        Expenses
      </div>
    </div>

    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth on-appear-scale-left on-delay-1">
        <thead>
          <tr class="on-appear-scale-left on-delay-3">
            <th>Date</th>
            <th>
              <div class="columns">
                <div class="column">
                  Merchant
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort': true}"></i>
                </div>
              </div>
            </th>
            <th>
              <div class="columns">
                <div class="column">
                  Category
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort': true}"></i>
                </div>
              </div>
            </th>
            <th>
              <div class="columns">
                <div class="column">
                  Amount
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort': true}"></i>
                </div>
              </div>
            </th>
            <th>Valuta</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="on-appear-scale-left on-delay-4">
            <td>Three</td>
            <td>Three</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
          </tr>
          <tr class="on-appear-scale-left on-delay-5">
            <td>Three</td>
            <td>Five</td>
            <td>Six</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
          </tr>
          <tr class="on-appear-scale-left on-delay-5">
            <td>Three</td>
            <td>Seven</td>
            <td>Eight</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
          </tr>
          <tr class="on-appear-scale-left on-delay-6">
            <td>Three</td>
            <td>Nine</td>
            <td>Ten</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
          </tr>
          <tr class="on-appear-scale-left on-delay-7">
            <td>Eleven</td>
            <td>Three</td>
            <td>Twelve</td>
            <td>Four</td>
            <td>Four</td>
            <td>Four</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="p-t-8 p-b-8 has-text-centered">
              <div class="columns is-centered on-appear-slide-up on-delay-4">
                <div class="column is-one-third">
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
            </td>
          </tr>
        </tfoot>
      </table>
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
