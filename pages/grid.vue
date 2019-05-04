<template>
  <div class="gl-layout-margin is-full-page">
    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a><b-switch size="is-small">Edit Mode</b-switch></a></li>
            <li><a>Save & Exit</a></li>
          </ul>
          <p class="menu-label">
            Components
          </p>
          <form-menu/>
          <p class="menu-label">
            Settings
          </p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <form-layout
          :form="form"
          @drop="onDrop"
          @remove="onRemove"
          @control-action="onControlAction"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-full-page {
  min-height: 50vh;
}
</style>

<script lang="ts">
import FormLayout from "~/components/form-creator/form-layout.vue";
import FormMenu from "~/components/form-creator/form-menu.vue";

export default {
  middleware: ['auth'],
  auth: false,
  components: {
    FormLayout,
    FormMenu,
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
