import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import ContentBox from './ContentBox';

import Bauhaus from '../assets/img/bauhaus__raw.png';

const HubSignedOut = () => {
  const { requestWallet } = useInjectedProvider();

  return (
    <ContentBox>
      <Flex
        direction='column'
        align='center'
        w='100%'
        bgImage={`url(${Bauhaus})`}
        bgSize='contain'
        bgPosition='center'
        bgRepeat='no-repeat'
        py={12}
      >
        <Box textAlign='left'>
          <Box fontSize='2xl' fontFamily='heading' fontWeight={700}>
            Welcome to the OPGames DAO Hub!
          </Box>
          <Text fontSize='xl' mb={5}>
            -- Enabling community-owned games --
          </Text>
          <Box fontSize='md' mb={5}>
            🖐 Vote and propose game design changes
          </Box>
          <Box fontSize='md' mb={5}>
            📰 Get activity feeds from the developers you support
          </Box>
          <Box fontSize='md' mb={5}>
            🌌 Take part in growing the Web 3 game metaverse
          </Box>
          <Flex justify='center' w='100%'>
            <Button onClick={requestWallet} mb={6}>
              Connect Wallet
            </Button>
          </Flex>
        </Box>
      </Flex>
    </ContentBox>
  );
};

export default HubSignedOut;
