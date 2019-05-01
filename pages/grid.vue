<template>
  <div class="gl-layout-margin">
    <form-grid
      :layout="layout"
      @change="layout = $event">
      <template v-slot:0>
        <form-container group-name="form" @drop="onDrop">
          <form-draggable :key="0">
            <div>
              <form-grid
                :layout="layout"
                @change="layout = $event">
                <template v-slot:0>
                  <form-container group-name="form" @drop="onDrop">
                    <form-draggable :key="0">
                      <div>
                        <b-field label="Name">
                          <b-input type="email" name="comments"></b-input>
                        </b-field>
                      </div>
                    </form-draggable>
                  </form-container>
                </template>
                <template v-slot:1>
                  <form-container group-name="form" @drop="onDrop">
                    <form-draggable :key="11">
                      <div>
                        <b-field label="Name">
                          <b-input type="email" name="comments"></b-input>
                        </b-field>
                      </div>
                    </form-draggable>
                  </form-container>
                </template>
                <template v-slot:2>
                  <form-container group-name="form" @drop="onDrop">
                    <form-draggable :key="11">
                      <div>
                        <b-field label="Name">
                          <b-input type="email" name="comments"></b-input>
                        </b-field>
                      </div>
                    </form-draggable>
                  </form-container>
                </template>
              </form-grid>
            </div>
          </form-draggable>
        </form-container>
      </template>
      <template v-slot:1>
        <form-container group-name="form" @drop="onDrop">
          <form-draggable :key="1">
            <div>
              <b-field label="Message">
                <b-input type="email" name="comments"></b-input>
              </b-field>
            </div>
          </form-draggable>
        </form-container>
      </template>
      <template v-slot:2>
        <form-container group-name="form" @drop="onDrop">
          <form-draggable :key="2">
            <div>
              <b-field label="Email">
                <b-input type="email" name="comments"></b-input>
              </b-field>
            </div>
          </form-draggable>
        </form-container>
      </template>
    </form-grid>
  </div>
</template>

<script lang="ts">
import FormContainer from "~/components/form-creator/form-container.vue";
import FormDraggable from "~/components/form-creator/form-element.vue";
import FormGrid from "~/components/form-creator/form-grid.vue";

export default {
  middleware: ['auth'],
  auth: false,
  data: () => ({
    layout: [1, 1, 1],
  }),
  components: {
    FormGrid, FormContainer, FormDraggable
  },
  methods: {
    onDrop(dropResult) {
      console.log(dropResult);
    }
  }
}
</script>
