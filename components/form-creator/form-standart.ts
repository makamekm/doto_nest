import { registerComponent } from './form-registry';

import FormGridDynamic from './elements/grid/form-grid-dynamic.vue';
import FormGridStatic from './elements/grid/form-grid-static.vue';
import FormGridControl from './elements/grid/form-grid-control.vue';
import FormInputDynamic from './elements/input/form-input-dynamic.vue';
import FormInputStatic from './elements/input/form-input-static.vue';
import FormInputControl from './elements/input/form-input-control.vue';
import FormRows from './elements/rows/form-rows.vue';
import FormRowsControl from './elements/rows/form-rows-control.vue';
import FormTable from './elements/table/form-table.vue';

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
    dynamicComponent: FormRows,
    dynamicControlComponent: FormRowsControl,
    staticComponent: FormRows,
});

registerComponent('table', {
    dynamicComponent: FormTable,
    staticComponent: FormTable,
});
