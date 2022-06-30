import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cookie from '../assets/cookie.png';
const CookieClicker = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const handleCookieClick = () => {
    setTimesClicked(timesClicked + 1);
  };
  useEffect(() => {
    if (timesClicked % 2 !== 0) {
      window.alert(`You clicked ${timesClicked} times`);
    }
  });

  return (
    <Flex justify="space-around">
      <Button variant="link" onClick={() => handleCookieClick()}>
        <Image width="200px" height="200px" src={cookie} alt="cookie"></Image>
      </Button>
      <Flex justify="center">
        <Text fontSize="34px">Click counter: {timesClicked}</Text>
      </Flex>
    </Flex>
  );
};

export default CookieClicker;
