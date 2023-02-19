import { Amplify } from 'aws-amplify';

import { Authenticator  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../config/auth';
import React from 'react';

Amplify.configure(awsExports);

const formFields = {
  signUp: {
    // name:{}
    name:{}
    
  },
}


export default function UserAuth() {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}


// export default UserAuth;
// export default withAuthenticator(UserAuth);