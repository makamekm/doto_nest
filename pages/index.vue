<template>
  <div class="lc-page">
    <form @submit.prevent="validateBeforeSubmit">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Component</p>
        </header>
        <div class="card-content lc-subform">
          <div class="columns">
            <div class="column">
              <b-field
                label="FAID"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
                <b-input v-model="value" v-validate="'required|email'" name="email"/>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" required expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" required expanded>
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
                <b-input v-model="value" v-validate="'required|email'" name="email"/>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card lc-margin-top">
        <header class="card-header">
          <p class="card-header-title">
            <b-checkbox v-model="isOpen">Collapsable</b-checkbox>
          </p>
        </header>
        <div class="card-content lc-subform" v-show="isOpen">
          <div class="columns">
            <div class="column">
              <b-field
                label="FAID"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
                <b-input v-model="value" v-validate="'required|email'" name="email"/>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" required expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Required">
                <b-select placeholder="Select a character" required expanded>
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
                <b-input v-model="value" v-validate="'required|email'" name="email"/>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="level is-mobile lc-margin-top">
        <div class="level-left">
          <p class="level-item">
            <button type="reset" class="button">Clear</button>
          </p>
        </div>
        <div class="level-right">
          <p class="level-item">
            <button type="submit" class="button is-primary">Submit</button>
          </p>
        </div>
      </div>
    </form>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.isDone" @change="toggle(todo)">
        <span :class="{ done: todo.isDone }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  data: () => ({
    value: "",
    isOpen: false,
  }),
  components: {},
  computed: {
    todos () {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo() {
      const self: any = this;
      // console.log(self.$store.state.todos);
      self.$store.commit('todos/add', {
        text: "test",
        isDone: false,
      });
    },
    validateBeforeSubmit() {
      const self: any = this;
      self.$validator.validateAll().then(result => {
        if (result) {
          self.$toast.open({
            message: "Form is valid!",
            type: "is-success",
            position: "is-bottom"
          });
          return;
        }
        self.$toast.open({
          message: "Form is not valid! Please check the fields.",
          type: "is-danger",
          position: "is-bottom"
        });
      });
    }
  }
})
export default class extends Vue {
  // @Prop({ type: [Object], required: true }) todos!: Todo[]
}
</script>

<style scoped>
.lc-margin-top {
  margin-top: 15px;
}

.lc-subform {
  padding: 15px;
}

.lc-page {
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
