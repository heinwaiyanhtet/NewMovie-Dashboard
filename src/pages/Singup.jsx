import { useState } from 'react';

function Singup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username:'',
  });

  // var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

  var poolData = {
      UserPoolId: 'us-east-1_F5zpL0Sb2',
      ClientId: '3ve1g9imt3brp9qgo568u84ufl', 
  };

  var UserPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var attributeList = [];
  var dataName = {
    Name: 'name',
    Value: formData.username
  };
  var dataEmail = {
      Name: 'email',
      Value: formData.email
  }
  var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
  
  attributeList.push(attributeName)
  attributeList.push(attributeEmail);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData.username,formData.email,formData.password);

      // handle form submission logic here

      UserPool.signUp(formData.username,formData.password,attributeList,null,(err,data) => {
          if(err){
            console.log(err)
            return
          }
          console.log(data);
      })
  };

  return (
    <div className="min-width-full w-[30%] mt-36 mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-lg font-medium mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        
      <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            User Name
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
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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

export default Singup;

