import { useState } from 'react';

// import {
// 	CognitoUserPool,
// 	CognitoUserAttribute,
// 	CognitoUser,
// } from 'amazon-cognito-identity-js';


function Singup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

  var poolData = {
    UserPoolId: 'us-east-1_kakXpKU9H',
    ClientId: '7t2ip97o0mcqu4n3ukb4nbvnek', 
  };

  var UserPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var attributeList = [];
  var dataEmail = {
        Name: 'email',
        Value: 'heinwaiyanhtet2020@gmail.com',
  }

  var dataPhoneNumber = {
      Name: 'phone_number',
      Value: '+15555555555',
  };

  var dataPicture = {
    Name: 'picture',
    Value: 'https://photo.com',
};

var dataUpdatedAt = {
  Name: 'updated_at',
  Value: '1676482683606',
};


var dataName = {
  Name: 'name',
  Value: 'hein wai yan htet',
};


  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
  var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataPhoneNumber
  );
  var attributePicture = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataPicture
  );

  var attributeUpdatedAt = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataUpdatedAt
  );

  var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataName
  );

  attributeList.push(attributeEmail);
  attributeList.push(attributePhoneNumber);
  attributeList.push(attributePicture)
  attributeList.push(attributeUpdatedAt)
  attributeList.push(attributeName)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData.email,formData.password);
    // handle form submission logic here

    UserPool.signUp('heinwaiyanhtet','ABcd123!@',attributeList,null,(err,data) => {
        if(err){
          console.log(err)
          return
        }
        console.log(data);
    })

  };

  return (
    <div className="min-width-full w-[30%] mt-36 mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
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

