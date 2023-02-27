import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import ButtonForTable from '../components/Titles/ButtonForTable';
// import Button from '../components/Titles/ButtonForTable';
import contentService from '../services/contentService';

interface response{
  Keywords:string,
  TitleEn:string,
  TitleMm:string,
  DescriptionEn:string,
  DescriptionMm:string,
  Type:string,
  Id:string,
  CreatedAt:string,
  UpdatedAt:string,
  CreatedBy:any,
  UpdatedBy:any
}

function deleteTitle(Id){
  return new Promise((resolve,reject) =>{
    contentService.deleteTitle(Id)
    .then(() => {
      resolve("successful")
    })
   .catch(err => {
    reject("got rejected")
    })
  })
};

function fetchTitleUse(Id){
  deleteTitle(Id)
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
                  console.log(`${row.Id}`);
              }}
              title="Edit"
              
          />

        <ButtonForTable
            onClick={() => {
                fetchTitleUse(row.Id)              
            }}
            title="Delete"
        />
    </>
     
    ),
    width:'300px'

  },

];


export default function Movies() {

  const [products,setProducts] = useState<response[]>([]);

  // const {
  //   isLoading,
  //   isSuccess,
  //   data: fakeStoreProducts,
  // } = useQuery(["fakeStoreProducts"], fetchFakeStore);
  
  // function fetchFakeStore() {

   const getTitleFromApi =  new Promise<response[]>((resolve,reject) =>{
        contentService.getTitles()
        .then((response) => {
          // console.log(response.data.value)
            resolve(response.data.value)
        })
        .catch(err => {
          reject("got rejected")
        })
    })
  // }

  useEffect( () : (() => void) => {
    return () => {
      getTitleFromApi
      .then((response : response[]) => setProducts(response))
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
