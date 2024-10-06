'use client';

import { getAllModel } from "@/app/api/Model";
import { ModelContextProps, ModelProps } from "@/lib/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

const ModelContext = createContext<ModelContextProps | undefined>(undefined);

const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [models, setModels] = useState<ModelProps[] | undefined>()
  const [ reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    getAllModel().then(data=> setModels(data))
  }, [reload])

  return (
    <ModelContext.Provider value={{ models, setModels , setReload}}>
      {children}
    </ModelContext.Provider>
  )
}

export const useModel = () => {
  const context = useContext(ModelContext);

  if(!context) throw new Error('useAudio must be used within an AudioProvider');

  return context;
}

export default ModelProvider;