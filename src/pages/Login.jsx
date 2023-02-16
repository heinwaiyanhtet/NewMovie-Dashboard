import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username:'',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData.username,formData.password);

    // //authentication data
    //   var authData = {
    //         Username: formData.username,
    //         Password: formData.password,
    //   };

    // // authentication detail
    //    var AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData);
  

    // //poor data
    //     var poolData = {
    //         UserPoolId: 'us-east-1_F5zpL0Sb2',
    //         ClientId: '3ve1g9imt3brp9qgo568u84ufl',
    //     }
    //     var UserPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    // //user data
    //     var userData = {
    //         username: formData.username,
    //         Pool:UserPool
    //     }
    //     var CognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);


    //     CognitoUser.authenticateUser(AuthenticationDetails, {
    //         onSuccess: (result) => {
    //         console.log('login success', result);
    //         },
    //         onFailure: (err) => {
    //         console.log('login failure', err);
    //         },
    //         newPasswordRequired: (data) => {
    //         console.log('new password required', data);
    //         },
    //     });


    var poolData = {
        UserPoolId: 'us-east-1_F5zpL0Sb2',
        ClientId: '3ve1g9imt3brp9qgo568u84ufl',
      };
      var UserPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
      //user data
      var userData = {
        Username: formData.username,
        Pool: UserPool,
      };
      var CognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    
      //authentication data
      var authData = {
        Username: formData.username,
        Password: formData.password,
      };
    
      // authentication detail
      var AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData);

      CognitoUser.authenticateUser(AuthenticationDetails, {
        onSuccess: (result) => {
          console.log('login success', result);
        },
        onFailure: (err) => {
          console.log('login failure', err);
        },
        newPasswordRequired: (data) => {
          console.log('new password required', data);
        },
      });
  };

  return (
    <div className="min-width-full w-[30%] mt-64 mx-auto bg-white p-8 rounded-md shadow-2xl">
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

export default Login;

