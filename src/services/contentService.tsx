import axios from "axios";

interface titlePost{
    Keywords?:string,
    TitleEn?:string,
    TitleMm?:string,
    DescriptionEn?:string,
    DescriptionMm:string,
    Type?:string,
    CreatedAt?:string,
    UpdatedAt?:string,
    CreatedBy?:any,
    UpdatedBy?:any
}  

const apiClient = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:false,
    headers:{
         Accept:'application/json',
        'Content-type':'application/json'
    }
})

export default {

    getTitles(){
        return apiClient.get('/Titles')
    },

    
    deleteTitle(id:number){
        return apiClient.delete('/Titles/'+id) 
    },

    
    postTitle(titles:titlePost){
        return apiClient.post('/Titles',
            titles,
        )
    },

    patchTitle(id:string|number,...args){
        return apiClient.patch(`/Titles/${id}`,{
            ...args
        })
    }
   
}



