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

      <div class="level is-mobile lc-margin-top">
        <div class="level-left">
          <p class="level-item">
            <button type="reset" class="button">Clear</button>
            <button type="reset" class="button" @click="test()">Test</button>
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
      <li v-for="todo in todos" v-bind:key="todo.id">
        <input type="checkbox" :checked="todo.isDone" @change="toggle(todo)">
        <span :class="{ done: todo.isDone }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" ref="addTodoInput" @keyup.enter="
        addTodo($refs.addTodoInput.value);
        $refs.addTodoInput.value = '';
      "></li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import "buefy";
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import { Validator } from "vee-validate";

const Todos = namespace("todos");

@Component({
  data: () => ({
    value: "",
    isOpen: false,
  }),
  // components: {},
  // computed: {
  //   todos () {
  //     return this.list;
  //   }
  // },
  methods: {
    addTodoManual() {
      this.$store.commit('todos/add', {
        id: Math.random(),
        text: "test",
        isDone: false,
      });
    },
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
  }
})
export default class extends Vue {
  // @Prop({ type: [Object], required: true }) todos!: Todo[]
  @Todos.State("list") todos;
  @Todos.Action("add") addTodo;
  // @Inject('$toast') public $toast;
  // @Inject('$validator') public $validator!: Validator;

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
