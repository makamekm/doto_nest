<template>
  <div style="margin-bottom: 15px;">
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
        <div class="columns">
          <div class="column is-12 is-8-desktop">
            <div class="columns">
              <div class="column is-12" style="padding-top: 1.5rem;">
                <div class="title is-5">Commentary &amp; Insights</div>
                <div class="divider is-light"></div>
              </div>
              <div class="column is-12 is-6-desktop">
                <div style="height: 286px; padding-top: 1.5rem;">
                  <div class="title is-7">
                    Lifestyle
                    <span>&nbsp;|&nbsp;</span>
                    May 13, 2019
                  </div>
                  <div class="title has-text-light">6 hacks to boost your productivity</div>
                  <p>Streamline your day with these simple suggestions.</p>
                  <a href="/pointofview/6-hacks-to-boost-your-productivity-infographic?utm_source=rjdotcom">View Infographic <span class="sr-only">about 6 hacks to boost your productivity</span></a>
                </div>
              </div>
              <div class="column is-12 is-6-desktop">
                <div style="height: 286px; padding-top: 1.5rem;">
                  <div class="title is-7">
                    Market Updates
                    <span>&nbsp;|&nbsp;</span>
                    May 13, 2019
                  </div>
                  <div class="title has-text-light">Trade tensions escalate; markets decline</div>
                  <p>China has announced retaliatory tariffs on $60 billion of U.S. goods effective June 1.</p>
                  <a href="/pointofview/trade-tensions-escalate-markets-decline?utm_source=rjdotcom">Read Article <span class="sr-only">about Trade tensions escalate; markets decline</span></a>
                </div>
              </div>
              <div class="column is-12 has-text-centered">
                <div class="divider is-light"/>
                <a href="/pointofview/?utm_source=rjdotcom" class="button is-hero is-invert" style="margin-top: 1.5rem;">View All</a>
              </div>
            </div>
          </div>
          <div class="column is-12 is-4-desktop">
            <div class="faa-cont-page faa-cont-small" data-showmobile="True" style="height: 511px;">
              <h2>
                <span class="head-top">Find an Advisor</span>
                <span class="head-bottom"></span>
              </h2>
              <p>Connect with a Raymond James advisor or office near you.</p>
              <form action="/find-an-advisor" method="get">
                <div class="input-label-holder clearfix">
                  <input id="citystatezip9ffdd594-197e-4d59-bb8c-fd60c6497487" type="text" name="citystatezip">
                  <label for="citystatezip9ffdd594-197e-4d59-bb8c-fd60c6497487">Enter City, ST or Zip Code</label>
                  <button class="btn-faa-page" type="submit"></button>
                </div>
              </form>
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

    <div class="container">
      <div class="card" style="margin-top: 15px; padding: 10px 15px;">
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
          <div style="margin-top: 15px;">
            We believe financial advice is about more than just having a plan. It’s about having the right plan for you. And that only happens with a true understanding of your whole life, beyond just your finances. Because as your needs become more complex, sophisticated advice and a relationship built for the long term become even more important.
          </div>
          <div class="has-text-right" style="margin-top: 15px;">
            <button class="button has-text-weight-semibold" style="padding: calc(0.5em - 1px) 3.0em; height: 2.75em">
              Learn more
            </button>
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
