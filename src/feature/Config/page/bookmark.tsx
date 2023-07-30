import styled from 'styled-components';

import {CommunityCard} from '@components/molecule';

const Container = styled.div`
  padding: 30px;
`;

const SubTitle = styled.h2`
  padding-top: 0;
  margin-top: 0;
`;
const Bookmark = () => (
    <Container>
        <SubTitle>북마크</SubTitle>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
    </Container>
);

export default Bookmark;
