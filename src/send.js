import dotenv from 'dotenv';
import { render } from '@react-email/render';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials/index.js';
import { ClientSecretCredential } from '@azure/identity';

import MailAlert from '../dist-emails/alert-late.js';

dotenv.config();

console.log('Generating email...');

const html = render(MailAlert({ report, oppys }));

console.log('Sending email...');

const tenantId = process.env.O365_TENANT_ID;
const clientId = process.env.O363_APP_CLIENT_ID;
const clientSecret = process.env.O365_APP_CLIENT_SECRET;
const authProvider = new TokenCredentialAuthenticationProvider(
  new ClientSecretCredential(tenantId, clientId, clientSecret),
  { scopes: ['https://graph.microsoft.com/.default'] }
);

const client = Client.initWithMiddleware({
  debugLogging: true,
  authProvider,
});

const mail = {
  message: {
    subject: 'Opportunités en retard',
    body: { contentType: 'HTML', content: html },
    toRecipients: [{ emailAddress: { address: process.env.TO_EMAIL } }],
  },
  saveToSentItems: 'true',
};

await client.api(`/users/${process.env.FROM_EMAIL}/sendMail`).post(mail);

console.log('Done.');
