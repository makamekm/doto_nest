<template>
  <div class="m-t-6 m-b-6">
    <div class="card" ref="form">
      <header class="card-header">
        <div class="card-header-title">Change Version</div>
      </header>
      <div class="card-content gl-form-container">
        <b-field horizontal label="Version"
          :message="errors.first('version')"
          :type="{'is-danger': errors.has('version')}">
          <select-version v-model="form.version" name="version" v-validate="'required'"/>
        </b-field>

        <b-field horizontal label="Message"
          :message="errors.first('comments')"
          :type="{'is-danger': errors.has('comments')}">
          <b-input type="textarea" v-model="form.comments" name="comments" v-validate="'required|min:6'"></b-input>
        </b-field>

        <b-field horizontal>
          <p class="control">
            <button
              type="submit"
              class="button is-primary gl-form-btn"
              @click="submitVersionForm"
            >Submit</button>
            <button type="reset" class="button gl-form-btn" @click="clearVersionForm">Clear</button>
          </p>
        </b-field>
      </div>
    </div>

    <div class="card m-t-6">
      <header class="card-header">
        <div class="card-header-title">Info</div>
      </header>
      <div class="card-content gl-form-container">
        <div class="columns">
          <div class="column">
            <b-field label="Name">
              <b>
                {{ data.name }}
              </b>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Version">
              <b>
                {{ data.version.version }}
              </b>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Status">
              <b>
                {{ data.status }}
              </b>
            </b-field>
          </div>
          <div class="column">
            <b-field label="date">
              <b>
                {{ data.date }}
              </b>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Comments">
              <b>
                {{ data.comments }}
              </b>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <div class="card m-t-6">
      <header class="card-header">
        <div class="card-header-title">History</div>
      </header>
      <div class="card-content" style="padding: 0">
        <b-table :data="data.history" :columns="columns" hoverable striped paginated>
          <template slot="pagination">
            <div class="has-text-right">
              Footer
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";
import SelectVersion from "~/components/selectVersion.vue";
import { setTimeout } from 'timers';

const NodeStore = namespace("node");

const defaultFormData = () => ({
  version: null,
  comments: '',
});

@Component({
  // middleware: ['auth'],
  components: {
    SelectVersion,
  },
  data: () => ({
    form: defaultFormData(),
    columns: [
      {
        field: "version.version",
        label: "Version"
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
  async fetch(props) {
    return await props.store.dispatch("node/loadNode", props.params.id);
  }
})
export default class extends Vue {
  @NodeStore.State("node") data;
  @NodeStore.Action("setVersion") setVersion;

  async submitVersionForm() {
    const loadingComponent = this.$loading.open({
      container: this.$refs.form,
    })
    const isValid = await this.$validator.validateAll();
    if (isValid) {
      await this.setVersion({ 
        id: this.$route.params.id,
        ...this.$data.form,
      });
    }
    loadingComponent.close();
  }

  async clearVersionForm() {
    this.$data.form = defaultFormData();
    await this.$validator.reset();
  }
}
</script>