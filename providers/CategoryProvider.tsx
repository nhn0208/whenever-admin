'use client';

import { getAllCategory } from "@/app/api/Category";
import { CategoryContextProps, CategoryProps } from "@/lib/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryList, setCategoryList] = useState<CategoryProps[] | undefined>()

  useEffect(() => {
    getAllCategory().then(data=> setCategoryList(data))
  }, [])

  return (
    <CategoryContext.Provider value={{ categoryList , setCategoryList}}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryList = () => {
  const context = useContext(CategoryContext);

  if(!context) throw new Error('useCategoryList must be used within an CategoryProvider');

  return context;
}

export default CategoryProvider;