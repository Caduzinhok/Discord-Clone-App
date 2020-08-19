import React, {useRef, useEffect} from 'react';
import { Container,Messages,InputWrapper,Input,InputIcon } from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() =>{
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  })
  return (
      <Container>
        <Messages ref = {messagesRef}>
          {Array.from(Array(30).keys()).map((n)=>(
            <ChannelMessage
              author= "Morfeu"
              date = "19/08/2020"
              content = "Isto é um Teste!!!"
            />
          ))}
          <ChannelMessage
          author= "Morfeu"
          date = "19/08/2020"
          content = {
            <>
              <Mention>@Morfeu</Mention>, aprende a jogar de yasuo po
            </>}
          />
        </Messages>
        <InputWrapper>
          <Input type = "text" placeholder = "Conversar em #Chat-Livre"/>
          <InputIcon/>
        </InputWrapper>
      </Container>
  )
};

export default ChannelData;