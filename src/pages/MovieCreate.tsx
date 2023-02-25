import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Select} from 'antd';
import contentService from '../services/contentService';

interface formData{
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

function MovieCreate() {
  const [formData, setFormData] = useState<formData>({
    keywords: '',
    titleEn:'',
    titleMm: '',
    descriptionEn: '',
    descriptionMm:'',
    type:'movies',
    CreatedAt: "2020-12-25T08:51:03+06:30",
    UpdatedAt: "2023-01-14T03:16:53+06:30",
    CreatedBy: "hein",
    UpdatedBy: "wai"
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  function fetchTitle(){
    return new Promise((resolve,reject) =>{
      contentService.postTitle(formData)
      .then((response) => {
          resolve(response)
      })
      .catch(err => {
        reject("got rejected")
      })
  })
  }


  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchTitle()
    .then((respose) => {
      console.log(respose)
    })
    .catch(err => {
      console.log(err)
    })
    // handle form submission logic here
  };
  
  return (
    <div className="mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="keywords" className="block text-gray-700 font-medium mb-2">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="titleEn" className="block text-gray-700 font-medium mb-2">
            Title in English
          </label>
          <input
            type="text"
            id="titleEn"
            name="titleEn"
            value={formData.titleEn}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="titleMm" className="block text-gray-700 font-medium mb-2">
            Title in Burmse
          </label>
          <input
            type="text"
            id="titleMm"
            name="titleMm"
            value={formData.titleMm}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>



        <div className="mb-4">
          <label htmlFor="DescriptionEn" className="block text-gray-700 font-medium mb-2">
            Description in English
          </label>
          <textarea
            id="descriptionEn"
            name="descriptionEn"
            value={formData.descriptionEn}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="DescriptionMm" className="block text-gray-700 font-medium mb-2">
            Description in Burmse
          </label>
          <textarea
            id="descriptionMm"
            name="descriptionMm"
            value={formData.descriptionMm}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MovieCreate;

