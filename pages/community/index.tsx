import type {NextPage} from 'next';
import styled from 'styled-components';

import {option, sortOption} from '@/constants/Community';
import {CommunityCard, Select} from '@components/molecule';

const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Container = styled.div`
  padding: 30px;
`;

const SubTitle = styled.h2`
  padding-top: 0;
  margin-top: 0;
`;

const Community: NextPage = () => (
  <Container>
    <SubTitle>커뮤니티</SubTitle>
    <SelectContainer>
      <Select option={option} style={{marginRight: 20}} />
      <Select option={sortOption} />
    </SelectContainer>
    <CommunityCard />
    <CommunityCard />
    <CommunityCard />
    <CommunityCard />
    <CommunityCard />
    <CommunityCard />
  </Container>
);

export default Community;
