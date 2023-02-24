import axios from "axios";


interface titlePost{
    keywords:string,
    titleEn:string,
    titleMm:string,
    descriptionEn:string,
    descriptionMm:string,
    type:string,
    Id:string,
    CreatedAt:string,
    UpdatedAt:string,
    CreatedBy:any,
    UpdatedBy:any
}

  

const contentInstance = axios.create({
    baseURL:'http://content.local/ContentService',
    // withCredentials:false,
    headers:{
        // 'Access-Control-Allow-Origin': '*'
        // Accept:'application/json',
        // 'Content-type':'application/json',
    }
})

export default {
    getTitles(){
        return contentInstance.get('/Titles')
    },

    deleteTitle(id:number){
        return contentInstance.delete('/Titles/'+id) 
    },

    postTitle(titles:titlePost){
        return contentInstance.post('/Titles',{
            titles,
        })
    }
    

    // getTitle(id:number){
    //     return contentInstance.get('/Titles/'+id)
    // }
}



