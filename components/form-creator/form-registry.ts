export const registry: {
    [name: string]: FormComponent;
} = {};

export interface FormComponent {
    editComponent: any;
    readonlyComponent: any;
    editControlComponent?: any;
}

export function registerComponent(type: string, component: FormComponent) {
    registry[type] = component;
}
