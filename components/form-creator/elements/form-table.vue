<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
      <b-table
        :data="[{}]"
        :hoverable="element.isHoverable"
        :striped="element.isStriped"
        :narrowed="element.isNarrowed"
        :focusable="element.isFocusable"
        :mobile-cards="element.hasMobileCards"
        :checkable="element.isCheckable"
        :paginated="element.isPaginated"
        :per-page="element.perPage"
        :pagination-simple="element.isPaginationSimple"
        :draggable="element.isDraggable">
          <template slot-scope="props" slot="header">
            {{ props.column.meta.label }}
            <form-layout
              :form="props.column.meta.children"
              v-on="$listeners"/>
          </template>
          <template slot-scope="props" v-for="(column, index) in element.children">
            <b-table-column
              :meta="column.header"
              :key="index">
                <form-layout
                  :data="props"
                  :form="column.children"
                  v-on="$listeners"/>
            </b-table-column>
          </template>
      </b-table>
  </div>
</template>

<script lang="ts">
// import FormRowsProperty from "./form-rows-property.vue";

export default {
  name: 'form-table',
  props: {
    element: Object,
  },
  data: () => ({
    data: [
      {
        name: 'sdfsdf',
        comments: 'asdadsdf',
      },
      {
        name: 'sdfsdf',
        comments: 'asdadsdf',
      },
    ],
    columns: [
      {
        field: "name",
        label: "Name"
      },
      {
        field: "comments",
        label: "Comments"
      }
    ]
  }),
  methods: {
    openPropertyWindow() {
      // this['$modal'].open({
      //   parent: this,
      //   component: FormRowsProperty,
      //   props: {
      //     element: this['element'],
      //   }
      // });
    },
  },
}
</script>
