<template>
  <div class="gl-layout-margin is-full-page">
    <form-layout
      :form="form"
      @drop="onDrop"
      @remove="onRemove"
      @control-action="onControlAction"/>
  </div>
</template>

<style lang="scss" scoped>
.is-full-page {
  min-height: 50vh;
}
</style>

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
    onDrop({removedIndex, addedIndex, payload: { form, element, newForm }}) {
      if (removedIndex != null) {
        form.splice(removedIndex, 1);
      }
      if (addedIndex != null) {
        newForm.splice(addedIndex, 0, element);
      }
    },
    onRemove(element, form) {
      form.splice(form.indexOf(element), 1);
    },
    onControlAction(itemType, type, element, data) {
      if (itemType === 'grid') {
        if (type === 'change-layout') {
          element.layout = data;
        } else if (type === 'remove-layout') {
          element.layout.splice(data, 1);
          element.children.splice(data, 1);
        } else if (type === 'add-layout') {
          element.layout.push(1);
          element.children.push(data);
        }
      }
    }
  }
}
</script>
