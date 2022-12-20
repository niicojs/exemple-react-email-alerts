import * as React from 'react';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

const main = {
  backgroundColor: '#f6f9fc',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginTop: '12px',
  marginBottom: '24px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
};

const paragraphBold = {
  ...paragraph,
  fontWeight: 'bold',
};

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>
        This is a nice preview.
      </Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://logos-marques.com/wp-content/uploads/2021/03/Salesforce-Logo.png"
              width="130"
              height="63"
              alt="Salesforce"
            />
            <Hr style={hr} />
            <Text style={paragraphBold}>CECI EST UN MAIL AUTOMATIQUE.</Text>
            <Text style={paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}
