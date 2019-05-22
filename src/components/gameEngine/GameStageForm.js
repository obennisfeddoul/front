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

import GameRuleForm from './GameRuleForm';
import BiddingGameRuleForm from './BiddingGameRuleForm';

class GameStageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasLoggedIn: false };
  }

  handleChange = input => event => {
    this.props.handleChange({
      ...this.state.values,
      [input]: event.target.value,
    });
  };

  render() {
    const values = this.props;
    console.log(values);
    return (
      <React.Fragment>
        <Input
          type="text"
          name="gameStageName"
          value={values.stageName}
          placeholder="The game stage name"
          onChange={this.handleChange('stageName').bind(this)}
        />

        {/* <Card>
                 <CardHeader>Game Rule Creation Section</CardHeader>
                 <CardBody>
                    <BiddingGameRuleForm 
                    handleChange = {this.props.handleChange}
                    values={values}
                    />          
                </CardBody>
                </Card> */}
      </React.Fragment>
    );
  }
}
export default GameStageForm;
