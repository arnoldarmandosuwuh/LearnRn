import React, {Component} from 'react';
import {Container, Header, Body, Left, Right, Content, Text, Icon, Form, Label, Input, Item} from 'native-base';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {fetchHeroes} from '../actions/heroes';

class HeroAdd extends Component {

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  }

  constructor(){
    super();
    this.state = {
      name: "",
      title: "",
      role: "",
      speciality: "",
      imageUri: "",
      isValid: false
    }
  }

  handleDone(){
    const self = this;
    axios({
      method: 'post',
      url: 'http://rest.learncode.academy/api/radiegtya/heroes',
      data: this.state
    }).then(()=>{
      self.props.dispatch(fetchHeroes());
      self.props.navigator.pop();
    });
  }

  _checkIsValid(){
    const self = this;
    setTimeout(()=>{
      const {name, title, role, speciality, imageUri} = self.state;
      if(name != "" && title != "" && role != "" && speciality != "" && imageUri != ""){
        self.setState({isValid: true});
      }else{
        self.setState({isValid: false});
      }
    }, 1000);
  }

  renderHeader(){
    const {isValid} = this.state;

    return (
      <Header>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
            <Icon name="arrow-back" style={{color: '#62AFEF'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text>New Hero</Text>
        </Body>
        <Right>
          {
            isValid?
            (
              <TouchableOpacity onPress={()=>this.handleDone()}>
                <Text style={{color: '#62AFEF'}}>Done</Text>
              </TouchableOpacity>
            ):
            (
              <Text style={{color: '#D0D0D0'}}>Done</Text>
            )
          }
        </Right>
      </Header>
    )
  }

  render(){
    return (
      <Container>
        {this.renderHeader()}

        <Content>

          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input onChangeText={(text)=> {
                this.setState({name: text});
                this._checkIsValid();
              }}/>
            </Item>
            <Item floatingLabel>
              <Label>image Uri</Label>
              <Input onChangeText={(text)=> {
                this.setState({imageUri: text});
                this._checkIsValid();
              }}/>
            </Item>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input onChangeText={(text)=> {
                this.setState({title: text});
                this._checkIsValid();
              }}/>
            </Item>
            <Item floatingLabel>
              <Label>Role</Label>
              <Input onChangeText={(text)=> {
                this.setState({role: text});
                this._checkIsValid();
              }}/>
            </Item>
            <Item floatingLabel>
              <Label>Speciality</Label>
              <Input onChangeText={(text)=> {
                this.setState({speciality: text});
                this._checkIsValid();
              }}/>
            </Item>
          </Form>

        </Content>

      </Container>
    )
  }

}

const mapStateToProps = (state)=> ({
  
});

export default connect(mapStateToProps)(HeroAdd)
