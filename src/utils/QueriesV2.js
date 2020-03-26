import { gql } from 'apollo-boost';

export const GET_METADATA_V2 = gql`
  query Metadata {
    currentPeriod @client
  }
`;

// /apiData @client

export const GET_MOLOCH_V2_HOME = gql`
  query daos($contractAddr: String!) {
    dao(id: $contractAddr) {
      id
      index
      moloch
      summoner
      version
      title
    }
    moloch(id: $contractAddr) {
      id
      totalShares
      summoningTime
      members {
        id
      }
      tokenBalances {
        token {
          tokenAddress
        }
        symbol @client
        decimals @client
        tokenBalance
        guildBank
        contractTokenBalance @client
        contractBabeBalance @client
        moloch {
          id
        }
      }
    }
  }
`;

export const GET_MOLOCH_V2 = gql`
  query daos($contractAddr: String!) {
    dao(id: $contractAddr) {
      id
      index
      moloch
      summoner
      version
      title
    }
    moloch(id: $contractAddr) {
      id
      totalShares
      summoningTime
      members {
        id
      }
      tokenBalances {
        token {
          tokenAddress
        }
        symbol @client
        decimals @client
        tokenBalance
        guildBank
      }
    }
  }
`;

const baseProposalFields = `
  proposalIndex
  cancelled
  molochAddress
  id
  proposalId
  startingPeriod
  tributeOffered
  tributeToken
  sharesRequested
  lootRequested
  paymentToken
  yesVotes
  noVotes
  applicant
  didPass
  details
  processed
  guildkick
  whitelist
  newMember
  sponsor
  sponsored
  trade
  yesShares
  noShares
  timestamp
  memberAddress
  proposer
  paymentToken
  paymentRequested
  moloch {
    votingPeriodLength
    gracePeriodLength
    periodDuration
    proposalDeposit
    depositToken {
      tokenAddress
    }
  }
  votes {
    id
    timestamp
    uintVote
    member {
      memberAddress
    }
  }
  tributeTokenSymbol @client
  tributeTokenDecimals @client
  paymentTokenSymbol @client
  paymentTokenDecimals @client
  status @client
  gracePeriod @client
  votingEnds @client
  votingStarts @client
  readyForProcessing @client
  proposalType @client
`;

export const GET_PROPOSALS_V2 = gql`
  query proposals($contractAddr: String!, $skip: Int) {
    proposals(
      where: { molochAddress: $contractAddr }
      orderBy: proposalId
      orderDirection: desc
      first: 100
      skip: $skip
    ) {
      ${baseProposalFields}
    }
  }
`;

export const GET_PROPOSAL_V2 = gql`
  query proposal($id: String!) {
    proposal(id: $id) {
      ${baseProposalFields}
    }
  }
`;

export const GET_MEMBERS_V2 = gql`
  query members($contractAddr: String!, $skip: Int) {
    members(
      where: { molochAddress: $contractAddr, exists: true }
      orderBy: shares
      first: 100
      skip: $skip
    ) {
      id
      delegateKey
      shares
      kicked
      tokenTribute
      didRagequit
      memberAddress
      moloch {
        totalShares
      }
    }
  }
`;

export const GET_MEMBER_V2 = gql`
  query member($id: String!) {
    member(id: $id) {
      id
      delegateKey
      shares
      loot
      kicked
      tokenTribute
      memberAddress
      didRagequit
      tokenBalances {
        token {
          tokenAddress
          symbol @client
          decimals @client
        }
        tokenBalance
      }
      submissions {
        proposalIndex
        yesVotes
        noVotes
        processed
        didPass
        cancelled
      }
      moloch {
        totalShares
        depositToken {
          tokenAddress
          symbol @client
          decimals @client
        }
      }
    }
  }
`;

export const GET_TOKENS_V2 = gql`
  query dao($contractAddr: String!) {
    moloch(id: $contractAddr) {
      approvedTokens {
        tokenAddress
        ticker
        symbol @client
        decimals @client
      }
      tokens {
        tokenAddress
        ticker
        symbol @client
        decimals @client
      }
    }
  }
`;
