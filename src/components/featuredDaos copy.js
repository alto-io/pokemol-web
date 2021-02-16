import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Badges,
  Badge,
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import ContentBox from './ContentBox';
import TextBox from './TextBox';

import MCAvatar from '../assets/img/metacartel__avatar.jpg';
import LexAvatar from '../assets/img/lex__avatar.png';
import MGDAvatar from '../assets/img/mgd__avatar.jpg';
import VenturesAvatar from '../assets/img/ventures__avatar.jpg';
import RaidAvatar from '../assets/img/raidguild__avatar.png';

const FeaturedDaos = () => {
  return (
    <>
      <Flex justify='space-between'>
        <TextBox mb={6}>Featured DAOs</TextBox>
        <TextBox as={RouterLink} to={`/explore`} colorScheme='secondary.500'>
          Explore
        </TextBox>
      </Flex>
      <ContentBox _hover={{ backgroundColor: 'blackAlpha.900' }}>
        <Flex
          as={RouterLink}
          to={`/dao/0x1/0xee629a192374caf2a72cf1695c485c5c89611ef2`}
          justify='start'
          align='center'
        >
          <Flex direction='column'>
            <Avatar src={MCAvatar} alt='' />
          </Flex>
          <Flex direction='column' style={{ marginLeft: '15px' }}>
            <Text>MetaCartel</Text>
            <Text fontSize='xs'>The airport to Web3</Text>
            <Flex mt={2}>
              <Badge
                variant='outline'
                colorScheme='secondary'
                textAlign='center'
                marginRight='5px'
              >
                Grants
              </Badge>
              <Badge variant='outline' colorScheme='primary' textAlign='center'>
                Mainnet
              </Badge>
            </Flex>
          </Flex>
          <Flex direction='column' style={{ marginLeft: 'auto' }}>
            <Button variant='outline'>GO</Button>
          </Flex>
        </Flex>
      </ContentBox>
      <ContentBox _hover={{ backgroundColor: 'blackAlpha.900' }}>
        <Flex
          as={RouterLink}
          to={`/dao/0x1/0x7d58c962356ae66ba91b108751d67ae5d3b022fc`}
          justify='start'
          align='center'
        >
          <Flex direction='column'>
            <Avatar src={MGDAvatar} alt='' />
          </Flex>
          <Flex direction='column' style={{ marginLeft: '15px' }}>
            <Text>Meta Gamma Delta</Text>
            <Text fontSize='xs'>Supporting women-led projects in Web3</Text>
            <Flex mt={2}>
              <Badge
                variant='outline'
                colorScheme='secondary'
                textAlign='center'
                marginRight='5px'
              >
                Grants
              </Badge>
              <Badge variant='outline' colorScheme='primary' textAlign='center'>
                Mainnet
              </Badge>
            </Flex>
          </Flex>
          <Flex direction='column' style={{ marginLeft: 'auto' }}>
            <Button variant='outline'>GO</Button>
          </Flex>
        </Flex>
      </ContentBox>
      <ContentBox _hover={{ backgroundColor: 'blackAlpha.900' }}>
        <Flex
          as={RouterLink}
          to={`/dao/0x1/0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d`}
          justify='start'
          align='center'
        >
          <Flex direction='column'>
            <Avatar src={RaidAvatar} alt='' />
          </Flex>
          <Flex direction='column' style={{ marginLeft: '15px' }}>
            <Text>Raid Guild</Text>
            <Text fontSize='xs'>Collective of Web3 product builders</Text>
            <Flex mt={2}>
              <Badge
                variant='outline'
                colorScheme='secondary'
                textAlign='center'
                marginRight='5px'
              >
                Guilds
              </Badge>
              <Badge variant='outline' colorScheme='primary' textAlign='center'>
                Mainnet
              </Badge>
            </Flex>
          </Flex>
          <Flex direction='column' style={{ marginLeft: 'auto' }}>
            <Button variant='outline'>GO</Button>
          </Flex>
        </Flex>
      </ContentBox>
      <ContentBox _hover={{ backgroundColor: 'blackAlpha.900' }}>
        <Flex
          as={RouterLink}
          to={`/dao/0x64/0x58234d4bf7a83693dc0815d97189ed7d188f6981`}
          justify='start'
          align='center'
        >
          <Flex direction='column'>
            <Avatar src={LexAvatar} alt='' />
          </Flex>
          <Flex direction='column' style={{ marginLeft: '15px' }}>
            <Text>LexDAO</Text>
            <Text fontSize='xs'>The decentralized legal engineering guild</Text>
            <Flex mt={2}>
              <Badge
                variant='outline'
                colorScheme='secondary'
                textAlign='center'
                marginRight='5px'
              >
                Guilds
              </Badge>
              <Badge variant='outline' colorScheme='primary' textAlign='center'>
                xDAI
              </Badge>
            </Flex>
          </Flex>
          <Flex direction='column' style={{ marginLeft: 'auto' }}>
            <Button variant='outline'>GO</Button>
          </Flex>
        </Flex>
      </ContentBox>
      <ContentBox _hover={{ backgroundColor: 'blackAlpha.900' }}>
        <Flex
          as={RouterLink}
          to={`/dao/0x1/0x4570b4faf71e23942b8b9f934b47ccedf7540162`}
          justify='start'
          align='center'
        >
          <Flex direction='column'>
            <Avatar src={VenturesAvatar} alt='' />
          </Flex>
          <Flex direction='column' style={{ marginLeft: '15px' }}>
            <Text>Venture DAO</Text>
            <Text fontSize='xs'>Investing in Web3 projects and teams</Text>
            <Flex mt={2}>
              <Badge
                variant='outline'
                colorScheme='secondary'
                textAlign='center'
                marginRight='5px'
              >
                Investments
              </Badge>
              <Badge variant='outline' colorScheme='primary' textAlign='center'>
                Mainnet
              </Badge>
            </Flex>
          </Flex>
          <Flex direction='column' style={{ marginLeft: 'auto' }}>
            <Button variant='outline'>GO</Button>
          </Flex>
        </Flex>
      </ContentBox>
    </>
  );
};

export default FeaturedDaos;
