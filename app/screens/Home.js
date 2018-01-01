import React from 'react';
import {Container, Content, Text, Thumbnail, Button} from 'native-base';
import '../components/TryRedux';

export default Home = (props) => (
  <Container style={{justifyContent: "center", alignSelf: "center"}}>
    <Content>
      <Thumbnail
        large
        source={{uri: 'http://tool.mobilelegendshack.n-qz.com/logo.png'}}
        style={{alignItems: 'center', width: 250, height: 200}}
      />

      <Text style={nbStyles.subtitle}>
        Welcome to Mobile Legends
      </Text>
      <Text style={nbStyles.subtitle}>
        Heroes Dictionary
      </Text>
      <Text style={nbStyles.subtitle}>
        Start Exploring/Creating
      </Text>
      <Text style={nbStyles.subtitle}>
        Your Favourites Heroes
      </Text>

      <Button
        block
        style={nbStyles.btn}
        onPress={()=> props.navigator.switchToTab({
          tabIndex: 1
        })}
      >
        <Text>Start</Text>
      </Button>

    </Content>
  </Container>
)

const nbStyles = {
  subtitle: {
    textAlign: 'center',
    color: '#ACD2FA'
  },
  btn: {
    marginTop: 15
  }
}
