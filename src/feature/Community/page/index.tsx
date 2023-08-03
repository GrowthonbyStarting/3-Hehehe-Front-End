import axios from 'axios';
import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import {option, sortOption} from '@/constants/Community';
import {CommunityCard, Select} from '@components/molecule';

const SelectContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Container = styled.div`
  padding: 20px;
`;

const SubTitle = styled.h2`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Community: NextPage = () => {
  const [profileList, setProfileList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(option[0].value);
  const [sortOptions, setSortOption] = useState(sortOption[0].value);
  useEffect(() => {
    axios
      .get('/api/profile/community')
      .then(res => setProfileList(res.data.content));
  }, []);

  return (
    <Container>
      <SubTitle>커뮤니티</SubTitle>
      <SelectContainer>
        <Select
          options={option}
          style={{marginRight: 20}}
          value={selectedOption}
          onChangeValue={setSelectedOption}
        />
        <Select
          options={sortOption}
          value={sortOptions}
          onChangeValue={setSortOption}
        />
      </SelectContainer>
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

export default Community;
