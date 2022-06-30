import { Heading } from '@chakra-ui/react';
import { Layout } from '@/components';
import CookieClicker from './cookieClicker';

export default function Index() {
  return (
    <Layout
      props={{
        title: `Lola Lab`,
        description: `Lola lab app`,
      }}
    >
      <Heading>Lola Lab - Cookie clicker</Heading>
      <CookieClicker />
    </Layout>
  );
}
