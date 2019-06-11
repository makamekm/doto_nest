export enum ProductTag {
  Type = 'type',
  Color = 'color',
  SaleStatus = 'sale_status',
}

export enum ProductTagType {
  Sofa = 'sofa',
  Chair = 'chair',
}

export const ProductTagTypeLabel = {
  [ProductTagType.Sofa]: {
    ru: 'Диван',
    en: 'Sofa',
  },
};

export interface ProductTagEntity {
  key: ProductTag;
  value: string;
}

export class ProductEntity {
  id?: number;
  name: string = '';
  description: string = '';
  date: Date = new Date();
  price: number = 0;
  isDisabled: boolean = false;
  tags: ProductTagEntity[] = [];
}