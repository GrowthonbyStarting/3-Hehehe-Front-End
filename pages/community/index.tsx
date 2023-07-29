import type {NextPage} from 'next';
import styled from 'styled-components';

import {Select} from '@components/molecule';

const option = [
  {
    value: 'creator',
    label: '크리에이터',
  },
  {
    label: '1인 기업',
    value: 'company',
  },
  {
    label: '온라인 매장',
    value: 'online',
  },
  {
    label: '공동 구매',
    value: 'group',
  },
  {
    label: '카페',
    value: 'cafe',
  },
  {
    label: '자기개발',
    value: 'self',
  },
  {
    label: '포트폴리오',
    value: 'portfolio',
  },
];
const sortOption = [
  {
    value: 'new',
    label: '최신순',
  },
  {
    label: '인기순',
    value: 'popular',
  },
];

const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Community: NextPage = () => (
  <div>
    <h1>커뮤니티</h1>
    <SelectContainer style={{display: 'flex', justifyContent: 'flex-start'}}>
      <Select option={option} style={{marginRight: 20}} />
      <Select option={sortOption} />
    </SelectContainer>
  </div>
);

export default Community;
