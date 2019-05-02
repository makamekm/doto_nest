import Vue from 'vue';
import FormContainer from '~/components/form-creator/form-container.vue';
import FormDraggable from '~/components/form-creator/form-draggable.vue';
import FormElement from '~/components/form-creator/form-element.vue';
import FormElementFactory from '~/components/form-creator/form-element-factory.vue';
import FormGrid from '~/components/form-creator/form-grid.vue';
import FormLayout from '~/components/form-creator/form-layout.vue';

Vue.component('form-container', FormContainer);
Vue.component('form-draggable', FormDraggable);
Vue.component('form-element', FormElement);
Vue.component('form-element-factory', FormElementFactory);
Vue.component('form-grid', FormGrid);
Vue.component('form-layout', FormLayout);
