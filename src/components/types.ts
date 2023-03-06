export interface categoryChildI {
    id: number;
    image: string;
    name_ru: string;
    name_uz: string;
    is_featured: number;
    parent_id: number;
    slug: string;
    status: number;
    views: number;
}

export interface MenuPropsI {
    open: boolean;
    onClose: () => void;
}
export interface categoryListI {
    id: number;
    image: string;
    is_featured: string;
    name_ru: string;
    name_uz: string;
    slug: string;
    parent_id: number;
    position: number;
    views: number;
    status: number;
    children: categoryChildI[];
}
export interface allCategoryI {
    isOk: boolean;
    categories: categoryListI[];
}
