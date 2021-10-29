export const bearerToken = () => {
  console.log('Auth Token Bearer', global.authToken);
  return 'Bearer ' + global.authToken;
};
