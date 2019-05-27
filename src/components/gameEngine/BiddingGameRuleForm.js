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
  constructor(props){
    super(props)
    this.state = {
      hasLoggedIn: false,
      bidding: {}
  };
  }

  handleChange = input => event => {
    const {bidding} = this.state;
    bidding[input] = event.target.value;
    this.setState(bidding)
    const {indexBid} = this.props;
    this.props.handleChange(bidding, indexBid);
  };

    render() {
      const values = this.props;
        return(
            <React.Fragment>
              <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <Card>
            <CardBody>
            <a>Create Bidding</a>
                  <Label for="product">
                   
                  </Label>
                  
                  
                  <Input value={values.product} onChange={this.handleChange('product').bind(this)} type="select" name="selectMulti" multiple>
                    <option>product 1</option>
                    <option>product 2</option>
                    <option>product 3</option>
                    <option>product 4</option>
                    <option>product 5</option>
                  </Input>
                 
      
                  <Label for="start_date">
                   
                  </Label>
            
                    <Input
                      type="Date"
                      name="start_date"
                      value={values.start_date}
                      placeholder="The start date of the bidding"
                      onChange={this.handleChange('start_date').bind(this)}
                  
                    />

                    <Label for="end_date"/>
                    <Input
                      type="Date"
                      name="end_date"
                      value={values.end_date}
                      placeholder="The end date of the bidding"
                      onChange={this.handleChange('end_date').bind(this)}

                    />
                  
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
               
          </React.Fragment>
        );
    }
}
export default BiddingGameRuleForm;
