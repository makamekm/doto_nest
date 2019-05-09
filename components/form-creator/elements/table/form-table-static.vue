<template>
  <div>
    <b-table
      :class="{'no-padding': element.isNoPadding}"
      :data="values"
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
      :opened-detailed="[]"
      :detail-key="element.detailPath || '_index'"
      :show-detail-icon="element.isDetailIcon || false">
        <template slot-scope="props" slot="header">
          {{ props.column.meta.header.label }}
          <form-layout-static
            :form="props.column.meta.header.children"
            :data-get="dataGet"
            :array-position="arrayPosition"
            v-on="$listeners"/>
        </template>
        <template slot-scope="props">
          <template
            v-for="(column, index) in element.children">
              <b-table-column
                :key="index"
                :meta="column">
                  <form-layout-static
                    :data-get="dataGet"
                    :array-position="[...arrayPosition, props.row._index]"
                    :form="column.children"
                    v-on="$listeners"/>
              </b-table-column>
          </template>
        </template>
        <template slot="detail" slot-scope="props">
          <form-layout-static
            :data-get="dataGet"
            :array-position="[...arrayPosition, props.row._index]"
            :form="element.details"
            v-on="$listeners"/>
        </template>
    </b-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'form-table',
  props: {
    element: Object,
    dataGet: Function,
    arrayPosition: Array,
  },
  computed: {
    values: {
      get() {
        const values = this['dataGet'](
          this['element'].path,
        ) || [];
        return values.map((_, _index) => ({ _index }));
      },
    },
  },
}
</script>
