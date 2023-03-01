import {
  useQuery,
} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
import ButtonForTable from '../components/Titles/ButtonForTable';
// import Button from '../components/Titles/ButtonForTable';
import contentService from '../services/contentService';
import { contentTitleActions } from '../store/contentTitle-slice';


interface response{
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

export default function Movies() {

  const [products,setProducts] = useState<response[]>([]);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  
  const NavigationHandle = (url : string) : void => {
      navigation(url);
  };
  // const {
  //   isLoading,
  //   isSuccess,
  //   data: fakeStoreProducts,
  // } = useQuery(["fakeStoreProducts"], fetchFakeStore);
  
  // function fetchFakeStore() {

  function deleteTitle(id){
    return new Promise((resolve,reject) =>{
      contentService.deleteTitle(id)
      .then(() => {
        resolve("successful")
      })
     .catch(err => {
      reject("got rejected")
      })
    })
  };
  
  function fetchTitleUse(id){
    deleteTitle(id)
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    })
  }


  const columns = [
    {
        name: 'Keywords',
        selector: row => row.Keywords,
        width:'200px',
        sortable:true
    },
    {
        name: 'TitleEn',
        selector: row => row.TitleEn,
        width:'200px',
        sortable:true
    },
    {
        name:'TitleMm',
        selector:row => row.TitleMm,
        width:'200px',
        sortable:true
    },
    {
      name:'DescriptionEn',
      selector:row => row.DescriptionEn,
      width:'300px',
      sortable:true
    },
    {
      name:'DescriptionMm',
      selector :row => row.DescriptionMm,
      width:'300px',
      sortable:true
    },
    {
      name:'Type',
      selector: row => row.Type,
      maxWidth:'50px',
      sortable:true
    },
  
    {
      name: "Actions",
      cell: (row) => (
        <> 
          
            <ButtonForTable
                onClick={() => {
                    NavigationHandle(`/movies/edit/${row.id}`)
                }}
                title="Edit"
            />
  
          <ButtonForTable
              onClick={() => {
                  fetchTitleUse(row.id)              
              }}
              title="Delete"
          />
      </>
      ),
      width:'300px'
  
    },
  
  ];

   const getTitleFromApi =  new Promise<response[]>((resolve,reject) =>{
        contentService.getTitles()
        .then((response) => {
            resolve(response.data)
        })
        .catch(err => {
          reject("got rejected")
        })
    })

  // }

  useEffect( () : (() => void) => {
    return () => {  

        getTitleFromApi
        .then((response : response[]) => {
            dispatch(contentTitleActions.addToTitle(response));
            setProducts(response);
        })

        .catch(err => {
          console.log("error",err);
        })
    };


  }, []);

  
  return (
    <>

    {/* {
      isLoading && (
          <h1>Here is loading</h1>
      )
    } */}

    
      {/* {
          isSuccess && 
            ( */}
              
                  <DataTable 
                      title="Title Table"
                      columns={columns} 
                      data={products}   
                      pagination
                  />

{/*                   
            )
      } */}
    </>
    //<DataTable columns={columns}  />
    // <>
    //   {/* {products.map(el => { console.log(el) })} */}
    //   { isSuccess && ( console.log(products) )}
    // </>
  )
}


