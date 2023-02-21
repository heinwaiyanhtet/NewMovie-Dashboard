import { Amplify, Auth } from 'aws-amplify';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

import AwsConfigAuth from "../config/auth";
(Amplify as any).configure({ Auth: AwsConfigAuth });


import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {  Input } from 'antd';
import { useNavigate } from 'react-router-dom';


function Login() {
  // const auth = useAuth();
  const [formData, setFormData] = useState({
    username:'',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try{
        Auth.signIn(formData.username,formData.password)
        navigate('/');
      }
      
      catch(error){
        await Swal.fire({
          icon:'error',
          title:'Error in log in',
          text:`${error.message}`
        })
      }

  };

  return (
    <div className="min-width-full w-[30%] mt-36 mx-auto bg-white p-8 rounded-md shadow-2xl">
      <h2 className="text-center text-lg font-medium mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                user name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Pasword
          </label>

            <Input.Password
                size="large"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
export default Login;


