<template>
  <div class="gl-layout-margin is-full-page">
    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a><b-switch size="is-small" v-model="isEdit">Edit Mode</b-switch></a></li>
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
        <form-layout-dynamic
          v-if="isEdit"
          :form="form"
          @form-change="onDrop"
          @remove="onRemove"
          @change-action="onChangeAction"/>
        <form-layout-static
          v-if="!isEdit"
          :data-get="dataGet"
          @data-change="onDataChange"
          :form="form"
          @form-change="onDrop"
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
import FormMenu from "~/components/form-creator/form-menu.vue";

export default {
  middleware: ['auth'],
  auth: false,
  layout: 'full',
  components: {
    FormMenu,
  },
  data: () => ({
    isEdit: false,
    data: {
      password: '',
      auth: {
        username: 'hkj',
        comments: 'hkj',
      },
      user: {
        name: 'hkj',
        email: 'hkj',
        iniformation: 'hkj',
      },
      friends: [
        {
          username: 'hkj',
          nickname: 'hkj',
        },
        {
          username: 'hkj',
          nickname: 'hkj',
        },
      ],
      quickPath: {
        username: 'jhjhjh',
      },
      table: [
        {
          username: 'jhkjh',
        },
      ]
    },
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
        path: 'friends',
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
      {
        type: 'table',
        label: 'Favorites',
        path: 'table',
        isNarrowed: true,
        isDetailed: false,
        isNoPadding: true,
        isBordered: true,
        details: [],
        children: [
          {
            header: {
              label: 'Username',
              children: [
                {
                  label: '',
                  type: 'input',
                  inputType: '',
                  placeholder: '',
                  path: 'quickPath.username',
                }
              ],
            },
            children: [
              {
                label: '',
                type: 'input',
                inputType: '',
                placeholder: '',
                path: '$.username',
              }
            ],
          }
        ],
      },
    ]
  }),
  methods: {
    dataGet(path) {

    },
    onDataChange(path, newData) {
      console.log(path, newData);
    },
    onDrop(prevForm, newForm) {
      prevForm.splice(0, prevForm.length, ...newForm);
    },
    onDropOld({removedIndex, addedIndex, payload: { form, element, newForm }}) {
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
