export interface cardI {
    id: number;
    name_uz: string;
    name_ru: string;
    image: string;
    desc_short_ru: string;
    desc_short_uz: string;
    description_ru: string;
    description_uz: string;
    discount_type: number;
    previous_price: string;
    price: string;
    slug: string;
    status: number;
    updated_at: string;
    images: string[];
    brand: brandI;
    category: categoryI;
}

export interface Panigation {
    current: number;
    next: number;
    per_page: number;
    previous: number;
    total: number;
    total_pages: number;
}
export interface relatedCategoriesI {
    id: number;
    image: string;
    name_ru: string;
    name_uz: string;
    status: string;
    slug: string;
}
export interface allProductI {
    pagination: Panigation;
    products: cardI[];
    relatedCategories: relatedCategoriesI[];
}
export interface brandI {
    id: number;
    name_uz: string;
    name_ru: string;
    image:string
}
export interface categoryI {
    id: number;
    name_uz: string;
    name_ru: string;
}
