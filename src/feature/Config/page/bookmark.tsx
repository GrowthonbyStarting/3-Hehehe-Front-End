import axios from 'axios';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import {CommunityCard} from '@components/molecule';

const Container = styled.div`
  padding: 30px;
`;

const SubTitle = styled.h2`
  padding-top: 0;
  margin-top: 0;
`;
const Bookmark = () => {
  const [profileList, setProfileList] = useState([]);
  useEffect(() => {
    axios.get('/api/profile/bookmark').then(res => {
      setProfileList(res.data);
    });
  }, []);
  return (
    <Container>
      <SubTitle>북마크</SubTitle>
      {profileList.map((profile: any) => (
        <CommunityCard
          profileId={profile.profileId}
          category={profile.category}
          key={profile.profileId}
          like={profile.likes}
          bookMark={profile.bookmark}
        />
      ))}
    </Container>
  );
};

export default Bookmark;
