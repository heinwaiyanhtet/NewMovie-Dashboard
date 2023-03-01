import React, { useRef } from 'react';
import { ChangeEvent, FormEvent, useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import contentService from '../services/contentService';

interface formData{
  Keywords:string,
  TitleEn:string,
  TitleMm:string,
  DescriptionEn:string,
  DescriptionMm:string,
  Type:string,
  CreatedAt:string,
  UpdatedAt:string,
  CreatedBy:any,
  UpdatedBy:any
}

function MovieEdit() {

  const [formData, setFormData] = useState<formData>({
    Keywords: '',
    TitleEn:'',
    TitleMm: '',
    DescriptionEn: '',
    DescriptionMm:'',
    Type:'movies',
    CreatedAt: "2020-12-25T08:51:03+06:30",
    UpdatedAt: "2023-01-14T03:16:53+06:30",
    CreatedBy: "hein",
    UpdatedBy: "wai"
  });

  const [formDataPerTitle, setformDataPerTitle] = useState([]);
  const stateContentTitle = useSelector(state => state.contentSlice.contentTitle);
  const refTitle = useRef();
  const param = useParams();
  useEffect(() => {
    return () => {
        const getContentById = stateContentTitle.find(item => item.id === param.id);
        setformDataPerTitle(getContentById);
    };
  }, [])

  const patchFormData = (formData: any) => {
    // console.log(formData);
      return new Promise((resolve,reject) => {
          contentService.patchTitle(param.id,formData)
          // .then((response) => {
          //   resolve(response)
          //   })  
          // .catch(err => {
          //   reject("got rejected")
          // })
      })
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        // patchFormData
      patchFormData(formData)
      // .then((respose) => {
      //   console.log(respose)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value })); 
  };
  
  return (
  <div className="mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit}>
  
        <div className="mb-4">
          <label htmlFor="Keywords" className="block text-gray-700 font-medium mb-2">
            Keywords
          </label>
          <input
            type="text"
            id="Keywords"
            name="Keywords"
            ref={refTitle}
            defaultValue={formDataPerTitle.Keywords}
            // value={formData.Keywords}
           onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="TitleEn" className="block text-gray-700 font-medium mb-2">
            Title in English
          </label>
          <input
            type="text"
            id="TitleEn"
            name="TitleEn"
            defaultValue={formDataPerTitle.TitleEn}
            // value={formData.TitleEn}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="TitleMm" className="block text-gray-700 font-medium mb-2">
            Title in Burmse
          </label>
          <input
            type="text"
            id="TitleMm"
            name="TitleMm"
            defaultValue={formDataPerTitle.TitleMm}
            // value={formData.TitleMm}
           onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="DescriptionEn" className="block text-gray-700 font-medium mb-2">
            Description in English
          </label>
          <textarea
            id="DescriptionEn"
            name="DescriptionEn"
            defaultValue={formDataPerTitle.DescriptionEn}
            // value={formData.DescriptionEn}
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
            id="DescriptionMm"
            name="DescriptionMm"
            defaultValue={formDataPerTitle.DescriptionMm}
            // value={formData.DescriptionMm}
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

export default MovieEdit;

