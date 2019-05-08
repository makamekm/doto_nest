import { registerComponent } from "./form-registry";

import FormGrid from "./elements/form-grid.vue";
import FormGridControl from "./elements/form-grid-control.vue";
import FormInput from "./elements/form-input.vue";
import FormInputControl from "./elements/form-input-control.vue";
import FormRows from "./elements/form-rows.vue";
import FormRowsControl from "./elements/form-rows-control.vue";
import FormTable from "./elements/form-table.vue";

registerComponent('grid', {
    editComponent: FormGrid,
    readonlyComponent: FormGrid,
    editControlComponent: FormGridControl,
});

registerComponent('input', {
    editComponent: FormInput,
    readonlyComponent: FormInput,
    editControlComponent: FormInputControl,
});

registerComponent('rows', {
    editComponent: FormRows,
    readonlyComponent: FormRows,
    editControlComponent: FormRowsControl,
});

registerComponent('table', {
    editComponent: FormTable,
    readonlyComponent: FormTable,
});
