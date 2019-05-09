import { registerComponent } from './form-registry';

import FormGridDynamic from './elements/grid/form-grid-dynamic.vue';
import FormGridStatic from './elements/grid/form-grid-static.vue';
import FormGridControl from './elements/grid/form-grid-control.vue';
import FormInputDynamic from './elements/input/form-input-dynamic.vue';
import FormInputStatic from './elements/input/form-input-static.vue';
import FormInputControl from './elements/input/form-input-control.vue';
import FormRowsDynamic from './elements/rows/form-rows-dynamic.vue';
import FormRowsStatic from './elements/rows/form-rows-static.vue';
import FormRowsControl from './elements/rows/form-rows-control.vue';
import FormTableDynamic from './elements/table/form-table-dynamic.vue';
import FormTableStatic from './elements/table/form-table-static.vue';

registerComponent('grid', {
    dynamicComponent: FormGridDynamic,
    dynamicControlComponent: FormGridControl,
    staticComponent: FormGridStatic,
});

registerComponent('input', {
    dynamicComponent: FormInputDynamic,
    dynamicControlComponent: FormInputControl,
    staticComponent: FormInputStatic,
});

registerComponent('rows', {
    dynamicComponent: FormRowsDynamic,
    dynamicControlComponent: FormRowsControl,
    staticComponent: FormRowsStatic,
});

registerComponent('table', {
    dynamicComponent: FormTableDynamic,
    staticComponent: FormTableStatic,
});
