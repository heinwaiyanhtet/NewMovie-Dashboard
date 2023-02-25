import axios from "axios";

interface titlePost{
    keywords:string,
    titleEn:string,
    titleMm:string,
    descriptionEn:string,
    descriptionMm:string,
    type:string,
    CreatedAt:string,
    UpdatedAt:string,
    CreatedBy:any,
    UpdatedBy:any
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
        console.log(titles)
        return apiClient.post('/Titles',
            titles,
        )
    }
}



