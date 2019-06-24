import React from 'react';
import HttpService from '../../services/http';

import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import axios from 'axios';

class BiddingGameRuleForm extends React.Component {
  constructor(props){
    super(props)
    const httpService = new HttpService();
    this.state = {
      products : [],
      hasLoggedIn: false,
      bidding: {
        product: {
          reference : ''
        }
      }
  };
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  fetchProducts(){
    return axios.get('http://localhost:8080/api/products', {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(data => this.setState({products : data.data}))
      .catch(error => {
        console.log(error)
      });
  }

  handleChange = input => event => {
    const {bidding} = this.state;
    bidding[input] = event.target.value;
    this.setState(bidding)
    const {indexGameRule} = this.props;
    this.props.handleChange(bidding, indexGameRule);
  };

  handleChangeProduct = input => event => {
    const {bidding} = this.state;
    bidding.product.reference = event.target.value;
    this.setState(bidding)
    const {indexGameRule} = this.props;
    this.props.handleChange(bidding, indexGameRule);
  };

    render() {
      this.fetchProducts();
      const values = this.props;
        return(
            <React.Fragment>
              <Row>
          <Col >
            <Card>
            <CardBody>
            <a>Create Bidding</a>
                  <Label for="product">
                   
                  </Label>
                  
                  
                  <Input value={values.reference} onChange={this.handleChangeProduct('reference').bind(this)} type="select" name="selectMulti">
                    {this.state.products.map((product, index) => (
                     <option key={ index }>{product.reference}</option>
                  ))}
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
