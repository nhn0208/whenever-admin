import * as httpRequest from '@/lib/db'

export const getAllCategory = async () => {
    try {
        let path = '/categories'
        const response = await httpRequest.get(path);
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const getCategoryById = async (_id: string) => {
    try {
        let path = `/categories/${_id}`
        const response = await httpRequest.get(path)
        return response.data
    }
    catch ( error ) {
        
    }
}