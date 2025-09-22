// Appwrite client configuration for React Native/Expo
import { Client, Account } from 'appwrite';

const appwrite = {
  client: new Client(),
  account: null as Account | null,
};

// TODO: Replace these with your Appwrite endpoint and project ID
appwrite.client
  .setEndpoint('https://YOUR_APPWRITE_ENDPOINT/v1') // e.g., 'https://cloud.appwrite.io/v1'
  .setProject('YOUR_PROJECT_ID');

appwrite.account = new Account(appwrite.client);

export default appwrite;
