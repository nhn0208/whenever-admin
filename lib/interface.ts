export interface ProductProps {
    name: string,
    image: string,
    type: string,
    size: string,
    instock: number,
    sold: number,
    price: number,
    _id: string,
    collectionId: string,
    slug: string,
}
export interface ModelProps {
    name: string,
    description: string,
    image: string[],
    category: string,
    slug: string,
    price: number,
    products: string[]
    _id: string,
}

export interface CategoryProps {
    categoryName: string,
    _id: string,
}

export interface CategoryContextProps {
    categoryList: CategoryProps[] | undefined,
    setCategoryList: React.Dispatch<React.SetStateAction<CategoryProps[] | undefined>>
}

export interface ModelContextProps {
    models: ModelProps[] | undefined,
    setModels: React.Dispatch<React.SetStateAction<ModelProps[] | undefined>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
}