import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

class GameRuleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasLoggedIn: false
  }
  }

  handleChange = (e) =>{
    this.setState({
        gameRuleName: e.target.value
    })

  };
    render() {
        return(
            <React.Fragment>
            <FormGroup row>
                  <Label for="GameRuleName" sm={2}>
                    Game Rule name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="GameRuleName"
                      placeholder="The game rule name"
                    />
                  </Col>
                </FormGroup>
          </React.Fragment>
        );
    }
}
export default GameRuleForm;