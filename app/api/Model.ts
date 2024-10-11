import * as httpRequest from '@/lib/db'


export const getAllModel = async () => {
    try {
        let path = '/models'
        const response = await httpRequest.get(path);
        //console.log(response);
        
        return response.data;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const addNewModel = async (values: any) => {
    try {
        let path = '/models/create'
        const response = await httpRequest.post(path,values)
        //console.log(response)
        return response.data
    }catch (error) {
        console.log("Error: ", error);
        
    }
}
export const getModelBySlug = async (slug: string) => {
    try {
        let path=`/models/${slug}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelById = async (_id: string) => {
    try {
        let path=`/models/${_id}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const updateModelById = async (body : {})=> {
    try {
        let path = '/models/update'
        const response = await httpRequest.patch(path,body)
        //console.log(response);
        
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const deleteModelById = async (id: string) => {
    try {
        let path = `/models/delete/${id}`
        const response = await httpRequest.del(path)
        //console.log(response)
        
    }
    catch(error) {
        console.log(error)
    }
}