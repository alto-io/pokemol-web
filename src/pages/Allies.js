import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

// import Following from '../components/followingDaos';
import MainViewLayout from '../components/mainViewLayout';
import DaoToDaoManager from '../components/daoToDaoManager';
// import DaoToDaoManagerAlt from '../components/daoToDaoManagerAlt';

import DaoToDaoProposalModal from '../modals/daoToDaoProposalModal';
import DaoToDaoProposalTypeModal from '../modals/daoToDaoProposalTypeModal';
import { useOverlay } from '../contexts/OverlayContext';
import GenericModal from '../modals/genericModal';
import NewUberHausMinion from '../forms/newUberHausMinion';
import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { useParams } from 'react-router-dom';
import { bigGraphQuery } from '../utils/theGraph';
import { UBERHAUS_ADDRESS } from '../utils/uberhaus';

const Allies = ({ daoOverview, daoMetaData, isMember, proposals }) => {
  const { daoid, daochain } = useParams();

  const [uberProposals, setUberProposals] = useSessionStorage(
    `U-proposals`,
    null,
  );
  const [uberOverview, setUberOveriew] = useSessionStorage(`U-overview`, null);
  const [uberMembers, setUberMembers] = useSessionStorage(`U-members`, null);

  const { d2dProposalModal } = useOverlay();
  const [proposalType, setProposalType] = useState(null);
  const { address, requestWallet } = useInjectedProvider();

  const hasPerformedBatchQuery = useRef(false);

  useEffect(() => {
    // do not reload if truthy
    if (uberProposals || uberMembers || uberOverview) return;

    // do not fetch without necessary data
    if (!daoid || !daochain || hasPerformedBatchQuery.current) return;
    // fetch only after child dao's data loads
    // if (!daoOverview || !daoMetaData) return;

    const bigQueryOptions = {
      args: {
        daoID: UBERHAUS_ADDRESS,
        chainID: '0x2a',
      },
      getSetters: [
        { getter: 'getOverview', setter: setUberOveriew },
        {
          getter: 'getActivities',
          setter: { setUberProposals },
        },
        { getter: 'getMembers', setter: setUberMembers },
      ],
    };
    bigGraphQuery(bigQueryOptions);

    hasPerformedBatchQuery.current = true;
  }, [
    daoid,
    daochain,
    uberMembers,
    uberProposals,
    uberOverview,
    uberProposals,
  ]);

  if (!address) {
    return (
      <Box
        rounded='lg'
        bg='blackAlpha.600'
        borderWidth='1px'
        borderColor='whiteAlpha.200'
        p={6}
        m={[10, 'auto', 0, 'auto']}
        w='50%'
        textAlign='center'
      >
        <Box fontSize='3xl' fontFamily='heading' fontWeight={700} mb={10}>
          Connect your wallet.
        </Box>

        <Flex direction='column' align='center'>
          <Button onClick={requestWallet}>Connect Wallet</Button>
        </Flex>
      </Box>
    );
  }

  return (
    <MainViewLayout header='Allies'>
      <Box>
        <DaoToDaoProposalTypeModal
          isOpen={true}
          setProposalType={setProposalType}
        />
        <DaoToDaoProposalModal
          isOpen={d2dProposalModal}
          proposalType={proposalType}
        />
        <GenericModal closeOnOverlayClick={false} modalId='uberMinionLaunch'>
          <NewUberHausMinion />
        </GenericModal>
        <DaoToDaoManager
          daoOverview={daoOverview}
          daoMetaData={daoMetaData}
          setProposalType={setProposalType}
        />
        {/* <DaoToDaoManagerAlt
          daoOverview={daoOverview}
          daoMetaData={daoMetaData}
          setProposalType={setProposalType}
          isMember={isMember}
          uberProposals={uberProposals}
          uberMembers={uberMembers}
          uberOverview={uberOverview}
          daoProposals={proposals}
        /> */}
        {/* <Following /> */}
      </Box>
    </MainViewLayout>
  );
};

export default Allies;
