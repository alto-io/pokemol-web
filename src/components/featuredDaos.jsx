import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Badge, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import ContentBox from './ContentBox';
import TextBox from './TextBox';

import MCAvatar from '../assets/img/metacartel__avatar.jpg';
import LexAvatar from '../assets/img/lex__avatar.png';
import MGDAvatar from '../assets/img/mgd__avatar.jpg';
import RaidAvatar from '../assets/img/raidguild__avatar.png';
import FlipFlopAvatar from '../assets/img/flipflop__avatar.png';
import EnclaveAvatar from '../assets/img/enclave__avatar.png';
import ConquestEthAvatar from '../assets/img/conquesteth__avatar.png';
import SnakeAvatar from '../assets/img/snake__avatar.png';

const FeaturedDaos = () => (
  <>
    <Flex justify='space-between'>
      <TextBox mb={6}>Featured Games</TextBox>
      <TextBox as={RouterLink} to='/explore' color='secondary.500'>
        Explore
      </TextBox>
    </Flex>
    <SimpleGrid minChildWidth='200px' spacing={3}>
      <ContentBox
        _hover={{ transform: 'scale(1.05)' }}
        direction='column'
        as={RouterLink}
        to='/dao/0x1/0xee629a192374caf2a72cf1695c485c5c89611ef2'
        justify='start'
        align='center'
      >
        <Avatar src={FlipFlopAvatar} alt='' />
        <Text>FlipFlop by FeatureKreep</Text>
        <Text fontSize='xs'>Gamedev.js 2021 🏆: A Mirror Platformer</Text>
        <Flex mt={2} justify='center'>
          <Badge
            variant='outline'
            colorScheme='secondary'
            textAlign='center'
            marginRight='5px'
          >
            Puzzle
          </Badge>
          <Badge variant='outline' colorScheme='primary' textAlign='center'>
            Platformer
          </Badge>
        </Flex>
      </ContentBox>
      <ContentBox
        _hover={{ transform: 'scale(1.05)' }}
        direction='column'
        as={RouterLink}
        to='/dao/0x89/0x93fa3b9d57bcddda4ed2ee40831f5859a9c417b7'
        justify='start'
        align='center'
      >
        <Avatar src={EnclaveAvatar} alt='' />
        <Text>Match 3 by Enclave Games</Text>
        <Text fontSize='xs'>No Ads, just Community Designed</Text>
        <Flex mt={2} justify='center'>
          <Badge
            variant='outline'
            colorScheme='secondary'
            textAlign='center'
            marginRight='5px'
          >
            High Score
          </Badge>
          <Badge variant='outline' colorScheme='primary' textAlign='center'>
            Match 3
          </Badge>
        </Flex>
      </ContentBox>
      <ContentBox
        _hover={{ transform: 'scale(1.05)' }}
        direction='column'
        as={RouterLink}
        to='/dao/0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'
        justify='start'
        align='center'
      >
        <Avatar src={ConquestEthAvatar} alt='' />
        <Text>Conquest.Eth by Etherplay</Text>
        <Text fontSize='xs'>Unstoppable, open-ended strategy game</Text>
        <Flex mt={2} justify='center'>
          <Badge
            variant='outline'
            colorScheme='secondary'
            textAlign='center'
            marginRight='5px'
          >
            Multiplayer
          </Badge>
          <Badge variant='outline' colorScheme='primary' textAlign='center'>
            Strategy
          </Badge>
        </Flex>
      </ContentBox>
      <ContentBox
        _hover={{ transform: 'scale(1.05)' }}
        direction='column'
        as={RouterLink}
        to='/dao/0x64/0x58234d4bf7a83693dc0815d97189ed7d188f6981'
        justify='start'
        align='center'
      >
        <Avatar src={SnakeAvatar} alt='' />
        <Text>Snake by ealmario</Text>
        <Text fontSize='xs'>Classic snake game built with vanilla JS</Text>
        <Flex mt={2} justify='center'>
          <Badge
            variant='outline'
            colorScheme='secondary'
            textAlign='center'
            marginRight='5px'
          >
            High Score
          </Badge>
          <Badge variant='outline' colorScheme='primary' textAlign='center'>
            Action
          </Badge>
        </Flex>
      </ContentBox>
    </SimpleGrid>
  </>
);

export default FeaturedDaos;
