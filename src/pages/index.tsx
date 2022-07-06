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
        Welcome to the Lola Lab! This is where you can review some of our{' '}
        <Code>code</Code> examples found in our blog posts. You can check out
        our blog <Link href="https://www.lola.tech/blog">here.</Link>
      </Text>
    </Layout>
  );
}
