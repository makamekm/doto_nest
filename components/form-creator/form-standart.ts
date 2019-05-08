import { registerComponent } from './form-registry';

import FormGridDynamic from './elements/grid/form-grid-dynamic.vue';
import FormGridStatic from './elements/grid/form-grid-static.vue';
import FormGridControl from './elements/grid/form-grid-control.vue';
import FormInput from './elements/input/form-input.vue';
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
    dynamicComponent: FormInput,
    dynamicControlComponent: FormInputControl,
    staticComponent: FormInput,
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
