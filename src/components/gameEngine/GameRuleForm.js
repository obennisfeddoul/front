import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class GameRuleForm extends React.Component {
  constructor(){
    super()
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