import {
  useQuery,
} from '@tanstack/react-query'

import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

// const columns = [
//   {
//       name: 'TitleEn',
//       selector: row => row.title,

//   },
//   {
//       name: 'TitleMm',
//       selector: row => row.year,
//   },
// ];

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



function fetchContentServiceTitles() {
  return fetch("https://content-dev.maharstg.com/ContentService/Titles")
        .then((response) => response.json())
}

export default function Movies() {

  const [products,setProducts] = useState([]);
  const {
    isLoading,
    isSuccess,
    data: fakeStoreProducts,
  } = useQuery(["fakeStoreProducts"], fetchFakeStore);

  function fetchFakeStore() {
    return fetch(`https://content-dev.maharstg.com/ContentService/Titles`).then((response) =>
      response.json()
    );
  }

  useEffect( () : (() => void) => {
    return () => {
      fetchFakeStore().then((response) => {
        setProducts(response);
      });
    };
  }, [fakeStoreProducts]);



  // useEffect(() => {
  //   fetch('https://content-dev.maharstg.com/ContentService/Titles')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //     // console.log(data);
  // }, []);
  
  return (
    // <DataTable columns={columns} data={data} />
    <>
      {products}
    </>
  )
}
