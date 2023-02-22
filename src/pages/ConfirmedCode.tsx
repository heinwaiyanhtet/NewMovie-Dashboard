import { Card } from 'antd'
import { Auth } from 'aws-amplify';
import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


interface SignUpFormData {
    code:string,
}

const ConfrimatinCode : React.FC = () => {
  const parms = useParams(); 
  const [formData, setFormData] = useState<SignUpFormData>({
       code:'',
  });
  const handleChange  =  (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
            await Auth.confirmSignUp(parms.username, formData.code);

            await Swal.fire({
              icon:'success',
              title:'Confirm account',
              text:`your account is successfully confirmed`,
            });

        } catch (error) {
            console.log('error confirming sign up', error);
            
            await Swal.fire({
              icon:'error',
              title:'Error signing up',
              text:error.message
            })
        }
  };




  return (
    <div className='flex justify-center mt-44'>        
        <Card title="Card title" bordered={false} style={{ width: 500 }}>
            <form onSubmit={handleSubmit}>

            <div className="mb-4">
                    <label htmlFor="code" className="block text-gray-700 font-medium mb-2">
                       Confirmation Code
                    </label>
                    <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button type="submit" className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Confirm 
                </button>

            </form>
        </Card>
    </div>
  )
}

export default ConfrimatinCode

