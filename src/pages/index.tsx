import { Heading, Text, Code, Link } from '@chakra-ui/react';
import { Layout } from '@/components';

export default function Index() {
  return (
    <Layout
      props={{
        title: `LolaLab`,
        description: `Lola lab app`,
      }}
    >
      <Heading>Lola Lab</Heading>
      <Text>
        Welcome to the Lola Lab! Here we have some of our <Code>code</Code>{' '}
        examples linked to our blog posts, which you can check out{' '}
        <Link href="https://www.lola.tech/blog">here.</Link>
      </Text>
    </Layout>
  );
}
