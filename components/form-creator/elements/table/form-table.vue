<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
      <b-table
        :class="{'no-padding': element.isNoPadding}"
        :data="[{id: 1}]"
        :bordered="element.isBordered"
        :hoverable="element.isHoverable"
        :striped="element.isStriped"
        :narrowed="element.isNarrowed"
        :focusable="element.isFocusable"
        :mobile-cards="element.hasMobileCards"
        :checkable="element.isCheckable"
        :paginated="element.isPaginated"
        :per-page="element.perPage"
        :pagination-simple="element.isPaginationSimple"
        :draggable="element.isDraggable"
        :detailed="element.isDetailed"
        :opened-detailed="[1]"
        :detail-key="element.detailPath || 'id'"
        :show-detail-icon="element.isDetailIcon || false">
          <template slot-scope="props" slot="header">
            {{ props.column.meta.header.label }}
            <form-layout-dynamic
              :form="props.column.meta.header.children"
              v-on="$listeners"/>
          </template>
          <template slot-scope="props" v-for="(column, index) in element.children">
            <b-table-column
              :meta="column"
              :key="index">
                <form-layout-dynamic
                  :data="props.row"
                  :form="column.children"
                  v-on="$listeners"/>
            </b-table-column>
          </template>
          <template slot="detail" slot-scope="props">
            <form-layout-dynamic
              :data="props.row"
              :form="element.details"
              v-on="$listeners"/>
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
