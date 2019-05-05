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
          @change-action="onChangeAction"/>
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
        inputType: 'password',
        placeholder: '',
        path: 'password',
      },
      {
        type: 'grid',
        layout: [1, 1],
        children: [
          [
            {
              label: 'Username',
              type: 'input',
              inputType: '',
              placeholder: '',
              path: 'auth.username',
            }
          ],
          [
            {
              label: 'Comments',
              type: 'input',
              placeholder: '',
              path: 'auth.comments',
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
              type: 'input',
              inputType: '',
              placeholder: '',
              path: 'user.name',
            }
          ],
          [
            {
              label: 'Email',
              type: 'input',
              inputType: 'email',
              placeholder: '',
              path: 'user.email',
            }
          ],
          [
            {
              label: 'Information',
              type: 'input',
              inputType: '',
              placeholder: '',
              path: 'user.information',
            }
          ]
        ]
      },
      {
        type: 'rows',
        label: 'Friends',
        path: 'rows',
        children: [
          {
            label: 'Username',
            type: 'input',
            inputType: '',
            placeholder: '',
            path: '$.username',
          },
          {
            label: 'Nickname',
            type: 'input',
            inputType: '',
            placeholder: '',
            path: '$.nickname',
          },
        ],
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
    onChangeAction(element, data) {
      Object.assign(element, data);
    },
  }
}
</script>
