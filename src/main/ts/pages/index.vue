<template>
  <div class="gl-layout-margin">
    <form @submit.prevent="validateBeforeSubmit">
      <div class="card">
        <header class="card-header">
          <div class="card-header-title">Component</div>
        </header>
        <div class="card-content gl-form-container">
          <div class="columns">
            <div class="column">
              <b-field
                label="FAID"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
                <b-input v-model="value" v-validate="'required|email'" name="email" data-vv-validate-on="none" @input="errors.remove('email')"/>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card gl-form-margin-top">
        <header class="card-header">
          <p class="card-header-title">
            <b-checkbox v-model="isOpen">Collapsable</b-checkbox>
          </p>
        </header>
        <div class="card-content gl-form-container" v-show="isOpen">
          <div class="columns">
            <div class="column">
              <b-field
                label="FAID"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
                <b-input v-model="value" v-validate="'required|email'"/>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field
                label="FAID"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
                <b-input v-model="value" v-validate="'required|email'"/>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="level is-mobile gl-form-margin-top">
        <div class="level-left">
          <p class="level-item">
            <button type="reset" class="button gl-form-btn" @click="test()">Test</button>
          </p>
        </div>
        <div class="level-right">
          <p class="level-item">
            <button type="reset" class="button gl-form-btn">Clear</button>
            <button type="submit" class="button is-primary gl-ctrl-margin-left gl-form-btn">Submit {{ testData.length }}</button>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import { Validator } from "vee-validate";

const Test = namespace("test");

@Component({
  data: () => ({
    value: "",
    isOpen: false,
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$toast.open({
            message: "Form is valid!",
            type: "is-success",
            position: "is-bottom"
          });
          return;
        }
        this.$toast.open({
          message: "Form is not valid! Please check the fields.",
          type: "is-danger",
          position: "is-bottom"
        });
      });
    }
  },
  // fetch: async (props) => props.store.dispatch('test/load'),
})
export default class extends Vue {
  @Test.State("list") testData;

  test() {
    console.log(this.$validator);
    this.$toast.open({
      message: "Form is not valid! Please check the fields.",
      type: "is-danger",
      position: "is-bottom"
    });
  }
}
</script>