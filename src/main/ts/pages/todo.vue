<template>
  <div class="gl-layout-margin">
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