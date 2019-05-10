export const registry: {
    [name: string]: FormComponent;
} = {};

export interface FormComponent {
    dynamicComponent: any;
    staticComponent: any;
    dynamicControlComponent?: any;
}

export function registerComponent(type: string, component: FormComponent) {
    registry[type] = component;
}
