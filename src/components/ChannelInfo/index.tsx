import React from 'react';
 import { Container,HashTagIcon,Title,Separator,Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
      <Container>
        <HashTagIcon />
        <Title>Chat livre</Title>
        <Separator />
        <Description>Canal Aberto para conversas</Description>
      </Container>
  )
};

export default ChannelInfo;