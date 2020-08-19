import React from 'react';
import { Container,Category, AddCategoryIcon} from './styles';
import ChannelButton from '../ChannelButton';
const ChannelList: React.FC = () => {
  return (
      <Container>
        <Category>
          <span>Canais de Texto</span>
          <AddCategoryIcon />
        </Category>
        <ChannelButton channelName = "Chat-livre"/>
        <ChannelButton channelName = "Trabalho"/>
        <ChannelButton channelName = "Lolzinho"/>
        <ChannelButton channelName = "Csgo"/>
        <ChannelButton channelName = "Valorant"/>

      </Container>
  )
};

export default ChannelList;