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
          :form="form"
          :data-get="dataGet"
          @data-change="onDataChange"/>
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
import { getParseValue } from "~/utils/form-data-path";

export default {
  middleware: ['auth'],
  auth: false,
  layout: 'full',
  components: {
    FormMenu,
  },
  methods: {
    dataGet(path, arrayPosition) {
      return getParseValue(this['data'], path, arrayPosition).value;
    },
    onDataChange(fullPath, newData, arrayPosition) {
      const {
        parent,
        path,
      } = getParseValue(this['data'], fullPath, arrayPosition);
      parent[path] = newData;
    },
    onDrop(prevForm, newForm) {
      prevForm.splice(0, prevForm.length, ...newForm);
    },
    onRemove(element, form) {
      form.splice(form.indexOf(element), 1);
    },
    onChangeAction(element, data) {
      Object.assign(element, data);
    },
  },
  data: () => ({
    isEdit: false,
    data: {
      password: '',
      auths: {
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
        {
          username: 'jhkfdfdfdfjh',
        },
        {
          username: 'aasd',
          address: 'hkjhk',
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
        layout: [1, 1, 1],
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
            path: 'friends.$.username',
          },
          {
            label: 'Nickname',
            type: 'input',
            inputType: '',
            placeholder: '',
            path: 'friends.$.nickname',
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
        isBordered: false,
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
                path: 'table.$.username',
              }
            ],
          },
          {
            header: {
              label: 'Address',
              children: [],
            },
            children: [
              {
                label: '',
                type: 'input',
                inputType: '',
                placeholder: '',
                path: 'table.$.address',
              }
            ],
          },
        ],
      },
    ]
  }),
}
</script>
