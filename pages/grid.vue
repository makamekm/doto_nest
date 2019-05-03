<template>
  <div class="gl-layout-margin">
    <form-layout :form="form" @drop="onDrop" @remove="onRemove"/>
  </div>
</template>

<script lang="ts">
import FormLayout from "~/components/form-creator/form-layout.vue";

export default {
  middleware: ['auth'],
  auth: false,
  components: {
    FormLayout
  },
  data: () => ({
    form: [
      {
        label: 'Password',
        type: 'input',
        inputType: 'password'
      },
      {
        type: 'grid',
        layout: [1, 1],
        children: [
          [
            {
              label: 'Username',
              type: 'input'
            }
          ],
          [
            {
              label: 'Password',
              type: 'input',
              inputType: 'password'
            }
          ]
        ]
      },
      {
        type: 'grid',
        layout: [1, 1, 2],
        children: [
          [
            {
              label: 'Name',
              type: 'input'
            }
          ],
          [
            {
              label: 'Email',
              type: 'input',
              inputType: 'email'
            }
          ],
          [
            {
              label: 'Comments',
              type: 'input'
            }
          ]
        ]
      },
    ]
  }),
  methods: {
    onDrop(dropResult) {
      console.log(dropResult);
    },
    onRemove(element, form) {
      console.log(element, form);
      form.splice(form.indexOf(element), 1);
    },
  }
}
</script>
