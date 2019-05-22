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

class BiddingGameRuleForm extends React.Component {
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
      const values = this.props;
        return(
            <React.Fragment>
            <FormGroup row>
                  <Label for="quantity" sm={2}>
                    The targeted product(s)
                  </Label>
                  <Col sm={10}>
                  
                  <Input type="select" name="selectMulti" multiple>
                    <option>product 1</option>
                    <option>product 2</option>
                    <option>product 3</option>
                    <option>product 4</option>
                    <option>product 5</option>
                  </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="quantity" sm={2}>
                    The required quantity to buy
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="number"
                      name="quantity"
                      placeholder="The required quantity to buy of the product..."
                      onChange={this.props.handleChange('quantity')}
                      defaultValue = {values.quantity}
                    />
                  </Col>
                </FormGroup>
          </React.Fragment>
        );
    }
}
export default BiddingGameRuleForm;