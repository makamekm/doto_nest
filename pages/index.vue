<template>
  <div style="margin-bottom: 1rem;">
    <!-- <div class="card">
      <header class="card-header">
        <div class="card-header-title">Nodes</div>
      </header>
      <div class="card-content" style="padding: 0">
        <b-table :data="data" :columns="columns" 
          :row-class="() => ({'lc-pointer': true})"
          @click="openNode"
          hoverable striped/>
      </div>
    </div> -->

    <section class="hero is-dark">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12 is-8-desktop">
            <div class="columns is-multiline">
              <div class="column is-12" style="padding-top: 2rem;">
                <div class="title is-5">Commentary &amp; Insights</div>
                <div class="divider is-light"></div>
              </div>
              <div class="column is-12 is-6-desktop">
                <div style="padding-top: 1rem;">
                  <div class="is-size-7 has-text-weight-semibold">
                    Lifestyle
                    <span>&nbsp;|&nbsp;</span>
                    May 13, 2019
                  </div>
                  <div class="is-size-4 has-text-light has-text-weight-semibold" style="margin-top: 0.5rem;">6 hacks to boost your productivity</div>
                  <div style="margin-top: 0.5rem;">Streamline your day with these simdivle suggestions.</div>
                  <div class="has-text-right" style="margin-top: 2rem;">
                    <a class="next-button is-invert" href="/pointofview/6-hacks-to-boost-your-productivity-infographic?utm_source=rjdotcom">
                      View Infographic
                    </a>
                  </div>
                </div>
              </div>
              <div class="column is-12 is-6-desktop">
                <div style="padding-top: 1rem;">
                  <div class="title is-7 has-text-weight-semibold">
                    Market Updates
                    <span>&nbsp;|&nbsp;</span>
                    May 13, 2019
                  </div>
                  <div class="is-size-4 has-text-light has-text-weight-semibold" style="margin-top: 0.5rem;">Trade tensions escalate; markets decline</div>
                  <div style="margin-top: 0.5rem;">China has announced retaliatory tariffs on $60 billion of U.S. goods effective June 1.</div>
                  <div class="has-text-right" style="margin-top: 2rem;">
                    <a class="next-button is-invert" href="/pointofview/trade-tensions-escalate-markets-decline?utm_source=rjdotcom">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
              <div class="column is-12 has-text-centered" style="padding-bottom: 2rem;">
                <div class="divider is-light"/>
                <a href="/pointofview/?utm_source=rjdotcom" class="button is-hero is-invert" style="margin-top: 1rem;">View All</a>
              </div>
            </div>
          </div>
          <div class="column is-12 is-4-desktop">
            <div class="hero is-primary" style="height: 100%; padding: 0 1rem;">
              <div>
                <div class="is-size-3" style="margin-top: 1.5rem; has-text-weight-semibold">
                  Find an Advisor
                </div>
                <div class="has-text-weight-semibold" style="margin-top: 1rem;">Connect with a Raymond James advisor or office near you.</div>
                <form action="/find-an-advisor" method="get" style="margin-top: 1.5rem;">
                  <div class="field has-addons">
                    <div class="control is-mt-like is-medium">
                      <input type="text" autocomplete="on" name="citystatezip" class="input is-medium" placeholder="empty">
                      <label>Enter City, ST or Zip Code</label>
                    </div>
                    <div class="control is-medium is-clearfix">
                      <button type="submit" class="button is-white is-medium">
                        <i class="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="container has-text-centered">
        <h1 class="title is-2">
          dsfsadfasdf
        </h1>
        <h2 class="subtitle is-4">
          asdfsadf
        </h2>
        <button class="button is-medium is-inverted">
          Refresh
        </button>
      </div> -->
    </section>

    <section class="hero is-light">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12 is-5-desktop" style="padding: 3rem 0;">
            <div class="card" style="margin-top: 1.5rem; padding: 1rem 1.5rem;">
              <div class="has-text-weight-semibold is-size-6">
                Raymond James
              </div>
              <div class="divider" style="margin-top: 2px;"></div>
              <div style="margin-top: 10px">
                <div class="has-text-weight-semibold is-size-3">
                  The right advice
                </div>
                <div class="has-text-weight-medium is-size-3">
                  starts with a trusted relationship.
                </div>
                <div style="margin-top: 1rem;">
                  We believe financial advice is about more than just having a plan. It’s about having the right plan for you. And that only happens with a true understanding of your whole life, beyond just your finances. Because as your needs become more complex, sophisticated advice and a relationship built for the long term become even more important.
                </div>
                <div class="has-text-right" style="margin-top: 1rem; margin-bottom: 0.5rem;">
                  <button class="button has-text-weight-semibold" style="padding: calc(0.5em - 1px) 3.0em; height: 2.75em">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const NodeStore = namespace("node");

@Component({
  layout: 'full',
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
