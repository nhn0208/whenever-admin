import * as httpRequest from '@/lib/db'


export const getAllProduct = async () => {
    try {
        let path = '/products'
        const response = await httpRequest.get(path);
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const addNewProduct = async (values: any) => {
    try {
        let path = '/products/create'
        const response = await httpRequest.post(path,values)
        //console.log(response)
        return response.data
        
    }catch (error) {
        console.log("Error: ", error);
        
    }
}
export const getProductBySlug = async (slug: string) => {
    try {
        let path=`/products/${slug}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getProductById = async (_id: string) => {
    try {
        let path=`/products/${_id}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getProductByModelId = async (modelId: string) => {
    try {
        let path=`/products/model/${modelId}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const updateProductById = async (body : any)=> {
    try {
        let path = '/products/update'
        const response = await httpRequest.patch(path,body)
        //console.log(response);
        
        return response.data
    }catch(error){
        console.log(error)
    }
}