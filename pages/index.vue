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
            <th class="interactable">
              <div class="columns">
                <div class="column">
                  Merchant
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort': true}"></i>
                </div>
              </div>
            </th>
            <th class="interactable">
              <div class="columns">
                <div class="column">
                  Category
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort-up': true}"></i>
                </div>
              </div>
            </th>
            <th class="interactable">
              <div class="columns">
                <div class="column">
                  Amount
                </div>
                <div class="column is-narrow">
                  <i :class="{'i is-size-6': true, 'sort-down': true}"></i>
                </div>
              </div>
            </th>
            <th>Valuta</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="'on-appear-scale-left on-delay-' + (index < 6 ? (index + 1) : 7)"
            v-for="(item, index) in data"
            v-bind:key="item.id + index">
              <td>{{item.date}}</td>
              <td>{{item.merchant}}</td>
              <td>{{item.categoryName}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.currency}}</td>
              <td>{{item.status.stage}}</td>
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

const ExpensesStore = namespace("expenses");

@Component({
  data: () => ({
    currentPage: 1,
  }),
  fetch: async props => props.store.dispatch("expenses/loadItems"),
})
export default class extends Vue {
  @ExpensesStore.State("items") data;

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
