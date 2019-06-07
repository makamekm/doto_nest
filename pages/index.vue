<template>
  <div>
    <div class="hero is-light p-b-6 p-t-5 m-t-7">
      <div class="container" style="width: 100%;">
        <div class="columns is-multiline is-variable is-1 m-b-1 is-vcentered">
          <div class="column">
            <b-field expanded>
              <b-input icon-pack="fab" icon="searchengin" placeholder="Lookup..." expanded></b-input>
            </b-field>
          </div>
          <div class="column is-narrow">
            <b-field>
              <button class="button is-primary fix-white-on-focus">
                <span class="icon is-small">
                  <i class="fas fa-search"></i>
                </span>
                <span>Search</span>
              </button>
            </b-field>
          </div>
          <div class="column is-narrow">
            <div class="has-text-centered">
              <button type="button" class="button is-transparent is-small fix-white-on-focus" @click="isShowFilters=!isShowFilters">
                <span class="icon is-small">
                  <i class="fas fa-caret-down" :class="{'fas': true, 'fa-caret-down': isShowFilters, 'fa-caret-up': !isShowFilters}"></i>
                </span>
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        <b-collapse class="columns is-multiline is-variable is-1" style="align-items: flex-end;" :open="isShowFilters">
          <div class="column">
            <b-field>
              <b-taginput
                icon-pack="fas" icon="tags"
                placeholder="Add tags"
                autocomplete
                v-model="tags"
                :data="filteredTags"
                :allow-new="false"
                field="user.first_name"
                @typing="getFilteredTags">
              </b-taginput>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <b-input expanded
                icon-pack="fas" icon="dollar-sign"
                placeholder="From...">
              </b-input>
              <b-input expanded
                icon-pack="fas" icon="dollar-sign"
                placeholder="To...">
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <b-taginput
                icon-pack="fas" icon="palette"
                placeholder="Colors"
                autocomplete
                v-model="tags"
                :data="filteredTags"
                :allow-new="false"
                field="user.first_name"
                @typing="getFilteredTags">
              </b-taginput>
            </b-field>
          </div>
        </b-collapse>
      </div>
    </div>

    <div class="container m-t-6 p-b-6">

      <div class="columns is-multiline">

        <div class="column is-12 is-4-desktop" v-for="a in [1,2,3,4,5]" v-bind:key="a">
          <div class="card is-interactable m-t-3 p-t-5 p-b-6 p-l-6 p-r-6">
            <div class="has-text-weight-semibold is-size-6 has-text-font-title">
              Raymond James
            </div>
            <vueper-slides :dragging-distance="50" :slide-ratio="1/1.5" class="no-shadow" autoplay bullets-outside :arrows="false" :transition-speed="300">
              <vueper-slide
                :image="'/uploads/2cr1.jpg'"></vueper-slide>
            </vueper-slides>
            <!-- <div class="divider m-t-4"></div> -->
            <div>
              <!-- <div class="has-text-weight-semibold is-size-3">
                The right advice
              </div>
              <div class="has-text-weight-medium is-size-3">
                starts with a trusted relationship.
              </div>
              <div class="m-t-4">
                We believe financial advice is about more than just having a plan. It’s about having the right plan for you. And that only happens with a true understanding of your whole life, beyond just your finances. Because as your needs become more complex, sophisticated advice and a relationship built for the long term become even more important.
              </div> -->

              <div class="columns is-vcentered m-t-3">
                <div class="column is-size-3 has-text-font-price has-text-grey-dark has-text-weight-semibold has-text-centered">
                  500$
                </div>
                <div class="column is-size-7 has-text-weight-semibold has-text-centered">
                  <span class="tag is-light m-t-2 m-b-1">SOFA</span>
                  <span class="tag is-info m-t-2 m-b-1">SALE</span>
                  <span class="tag is-success m-t-2 m-b-1">ECO</span>
                  <span class="tag is-warning m-t-2 m-b-1">LIMITED</span>
                  <span class="tag is-black m-t-2 m-b-1">SOON</span>
                  <span class="tag is-danger m-t-2 m-b-1">OLD</span>
                </div>
              </div>

              <div class="level m-t-5">
                <div class="level-left">
                  <div class="level-item">
                    <button class="button is-transparent fix-white-on-focus is-hero">
                      <span class="icon is-small">
                        <i class="fas fa-cart-plus"></i>
                      </span>
                      <span>To Cart</span>
                    </button>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <button class="button is-hero">
                      Overview
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <b-pagination
        :total="100"
        :current.sync="current"
        :per-page="20"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
      </b-pagination>
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
  layout: 'full',
  components: { VueperSlides, VueperSlide },
  data: () => ({
    isShowFilters: false,
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
