<template>
  <div class="gl-layout-margin">
    <form-layout :form="form"/>
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
              type: 'input'
            }
          ],
          [
            {
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
    }
  }
}
</script>
