<template>
  <div>
    <div class="hero is-primary p-b-6 p-t-6 p-l-7 p-r-7 on-appear-slide-down on-delay-0">
      <div class="has-text-weight-bold is-size-5" style="letter-spacing: 1px">
        Expenses
      </div>
    </div>

    <div class="table-container on-appear-slide-up on-delay-1">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr class="on-appear-scale-left on-delay-3">
            <th>Date</th>
            <th class="interactable" style="width: 20rem;">
              <div class="columns is-vcentered">
                <div class="column">
                  Merchant
                </div>
                <div class="column is-narrow font-size-0">
                  <i :class="{'i is-size-6': true, 'sort': true}"></i>
                </div>
              </div>
            </th>
            <th class="interactable" style="width: 15rem;">
              <div class="columns is-vcentered">
                <div class="column">
                  Category
                </div>
                <div class="column is-narrow font-size-0">
                  <i :class="{'i is-size-6': true, 'sort-up': true}"></i>
                </div>
              </div>
            </th>
            <th class="interactable" style="width: 12rem;">
              <div class="columns is-vcentered is-variable is-3">
                <div class="column has-text-right">
                  Amount
                </div>
                <div class="column is-narrow font-size-0">
                  <i :class="{'i is-size-6': true, 'sort-down': true}"></i>
                </div>
              </div>
            </th>
            <th class="has-text-right" style="width: 6rem;">Valuta</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="'on-appear-scale-left on-delay-' + (index < 6 ? (index + 1) : 7)"
            v-for="(item, index) in data"
            v-bind:key="item.id + index">
              <td>{{parseDate(item.date)}}</td>
              <td class="p-t-2 p-b-2 p-r-2 p-l-2">
                <inline-edit-text
                  :value="item.merchant"
                  @change="setValue(item, 'merchant', $event)"/>
              </td>
              <td class="p-t-2 p-b-2 p-r-2 p-l-2">
                <inline-edit-select
                  placeholder="Select Category"
                  :value="item.categoryName"
                  @change="setValue(item, 'category', $event)"
                  :items="[
                    {key: 'Food', label: 'Food'},
                    {key: 'Parking', label: 'Parking'},
                    {key: 'Transport', label: 'Transport'},
                    {key: 'Car Rental', label: 'Car Rental'},
                  ]"
                />
              </td>
              <td class="has-text-right"><b>{{item.amount}}</b></td>
              <td class="has-text-right is-uppercase"><b>{{item.currency}}</b></td>
              <td>
                <toggle-box
                  placeholder-true="Approve"
                  placeholder-false="Decline"
                  :value="item.status.stage === 'Submitted'"
                  @change="setValue(item, 'stage', $event)"
                />
              </td>
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
import InlineEditText from '../components/inline-edit-text.vue';
import InlineEditSelect from '../components/inline-edit-select.vue';
import ToggleBox from '../components/toggle-box.vue';
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const ExpensesStore = namespace("expenses");

@Component({
  components: {
    InlineEditText,
    InlineEditSelect,
    ToggleBox,
  },
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

  setValue(item, key: string, value) {
    console.log(item, key, value);
  }

  standartTwoDigits(str: string) {
    return str.length < 2 ? ('0' + str) : str;
  }

  parseDate(dateStr: string) {
    const date = new Date(Date.parse(dateStr));
    return `${this.standartTwoDigits(String(date.getDate() + 1))}`
      + `/${this.standartTwoDigits(String(date.getMonth() + 1))}`
      + `/${this.standartTwoDigits(String(date.getFullYear()))}`
  }
}
</script>

<style>
.lc-pointer {
  cursor: pointer;
}
</style>
