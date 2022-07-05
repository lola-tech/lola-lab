import { Flex, Heading, Text } from '@chakra-ui/react';
import { Layout } from '@/components';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import dynamic from 'next/dynamic';

const CustomHook = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Layout
      props={{
        title: `LolaLab: Custom Hook`,
        description: `Custom hook implementation`,
      }}
    >
      <Heading>Custom Hook</Heading>
      <Flex align="center" justify="space-between">
        <Text width="50%" fontSize="20px">
          Resize this window!
        </Text>
        <Flex dir="column" wrap="wrap" align="center" justify="flex-start">
          <Text fontSize="40px">width: {width}px</Text>
          <Text fontSize="40px">height: {height}px</Text>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CustomHook), {
  ssr: false,
});
