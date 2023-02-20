const AwsConfigAuth = {

        userPoolId: 'us-east-1_F5zpL0Sb2',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '3ve1g9imt3brp9qgo568u84ufl',
    // region: process.env.REACT_APP_AUTH_REGION,
    // userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
    // userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID,



    // cookieStorage: {
    //     domain: process.env.REACT_APP_AUTH_COOKIE_STORAGE_DOMAIN,
    //     path: "/",
    //     expires: 365,
    //     sameSite: "strict",
    //     secure: true,
    // },
    // authenticationFlowType: "USER_SRP_AUTH",
}
export default AwsConfigAuth;

// import { Amplify, Auth } from 'aws-amplify';

// Amplify.configure({
    // export default {

    //     // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    //     //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
    //     // REQUIRED - Amazon Cognito Region
    //     // region: 'XX-XXXX-X',

    //     // OPTIONAL - Amazon Cognito User Pool ID
    //     userPoolId: 'us-east-1_F5zpL0Sb2',

    //     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    //     userPoolWebClientId: '3ve1g9imt3brp9qgo568u84ufl',

    //     // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    //     mandatorySignIn: false,
        
    //     // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
    //     // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
    //     signUpVerificationMethod: 'code', // 'code' | 'link' 

    //     // OPTIONAL - Configuration for cookie storage
    //     // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    
    // }


// You can get the current config object
// const currentConfig = Auth.configure();


// You can get the current config object
// const currentConfig = Auth.configure();