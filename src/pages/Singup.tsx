import { Amplify,Auth} from 'aws-amplify';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

import AwsConfigAuth from "../config/auth";
import { useNavigate } from 'react-router-dom';

(Amplify as any).configure({ Auth: AwsConfigAuth });

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Singup : React.FC = () => {

  const [formData, setFormData] = useState<SignUpFormData>({
      name:'',
      email: '',
      password: '',
  });
  
  const handleChange  =  (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const navigate = useNavigate();
  
  const confrimatinCode = (user : string) : void => {
      navigate(`/confirmation-code/${user}`)
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
          const {user} = await Auth.signUp({
            username: formData.name,
            password:formData.password,

            attributes: {
            email: formData.email,
            name: formData.name
          },        
        })
        const userName = user.getUsername();
        confrimatinCode(userName);
      }

      catch(error){
        console.log('error singing up',error)
      }
  };



  return (
    <div className='h-screen flex items-center justify-center'>
        <div className="min-width-full w-[30%]  bg-white p-8 rounded-md shadow-md">
              <h2 className="text-lg font-medium mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                
              <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Pasword
                  </label>


                  {/* <Input.Password placeholder="input password" /> */}
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
    </div>
  );
}

export default Singup;



