import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import ButtonForTable from '../components/Titles/ButtonForTable';
// import Button from '../components/Titles/ButtonForTable';
import contentService from '../services/contentService';
// import Da from 'react-data-table-component'


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
              console.log(row.Id)
              contentService.deleteTitle(row.Id)
              
            }}
            title="Delete"
        />
      </>
     
    ),
    width:'300px'

  },

];


// const data = [
//   {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
// ]


// function fetchContentServiceTitles() {
//   return fetch("https://content-dev.maharstg.com/ContentService/Titles")
//         .then((response) => response.json())
// }


export default function Movies() {

  const [products,setProducts] = useState([]);

  const {
    isLoading,
    isSuccess,

    data: fakeStoreProducts,
  } = useQuery(["fakeStoreProducts"], fetchFakeStore);

  function fetchFakeStore() {
    return new Promise((resolve,reject) =>{
        contentService.getTitles()
        .then((response) => {
            resolve(response.data)
        })
        .catch(err => {
          reject("got rejected")
        })
    })
    // return contentService.getTitles()
    // .then((response) =>
    //   response.json()
    // );
  }

  useEffect( () : (() => void) => {
    return () => {
      fetchFakeStore()
      .then((response) => {
        // console.log(response.value)
        setProducts(response.value);
      })
      .catch(err => {
        console.log(err);
      })
    };
  }, [fakeStoreProducts]);



  // useEffect(() => {
  //   fetch('https://content-dev.maharstg.com/ContentService/Titles')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //     // console.log(data);
  // }, []);
  
  return (
    <>

    {
      isLoading && (
          <h1>Here is loading</h1>
      )
    }

    
      {
          isSuccess && 
            (
              
                  <DataTable 
                      title="Title Table"
                      columns={columns} 
                      data={products}   
                      pagination
                  />
            )
      }
    </>
    //<DataTable columns={columns}  />
    // <>
    //   {/* {products.map(el => { console.log(el) })} */}
    //   { isSuccess && ( console.log(products) )}
    // </>
  )
}
