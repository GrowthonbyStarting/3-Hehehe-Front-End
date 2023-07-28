import React, {FC} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background-color: #f3f2fc;
`;

type AvatarProps = {image?: string};

const Avatar: FC<AvatarProps> = props => {
  const {image} = props;

  return (
    <Container>
      <img src={image} alt="avatar" />
    </Container>
  );
};

export default Avatar;
