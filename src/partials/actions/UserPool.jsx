import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_kakXpKU9H',
  ClientId: '7t2ip97o0mcqu4n3ukb4nbvnek',
};

export default new CognitoUserPool(poolData);