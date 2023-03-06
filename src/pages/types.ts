import { cardI,Panigation} from "../components/Card/types";

export interface productI {
    product: cardI;
    recommendedProducts: cardI[];
}
export interface IProps {
    data: cardI | undefined;
}
export interface IPropsArr {
    data: cardI[] | undefined;
}
export interface subCats {
    id: number
    image: string
    name_ru: string
    name_uz: string
    parent_id: number
    position: number
    priority: number
    slug: string
    status: number
    views:number
}
export interface valuesI{
    attribute_id: number
    count: number
    value_id: number
    value_ru: string
    value_uz:string
}
export interface categoryAttributes{
    id: number
    is_filterable: number
    name_ru: string
    name_uz: string
    values:valuesI[]
}
export interface categoryBrandsI{
    id: number
    count: number
    image: string
    name_ru: string
    name_uz:string
}

export interface productArr {
    categoryAttributes: categoryAttributes[]
    categoryBrands: categoryBrandsI[]
    pagination: Panigation
    products: cardI[]
    subCats:subCats[]
}
