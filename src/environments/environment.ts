export const environment = {
  production: true,
  // apiUrl: 'https://jsonplaceholder.typicode.com/',
  apiUrl: 'http://localhost:3000/',
  signupApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxOxe4Nht3AWqHXEei5ak6s3fYjKidoXo',
  signinApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxOxe4Nht3AWqHXEei5ak6s3fYjKidoXo',
  forgotApi: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDxOxe4Nht3AWqHXEei5ak6s3fYjKidoXo',
  forgotRequestType: { "requestType": "PASSWORD_RESET", "email": "" }
};
