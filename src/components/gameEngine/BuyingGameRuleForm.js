import React from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import axios from 'axios';

class BuyingGameRuleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedIn: false,
      allProducts: [],
      buying: {
        quantity: '',
        products: [],
      },
    };
  }

  fetchProducts() {
    return axios.get('http://localhost:8080/api/products', {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(data => this.setState({ allProducts: data.data }))
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = input => event => {
    const { buying } = this.state;
    buying[input] = event.target.value;
    this.setState(buying);
    const { indexGameRule } = this.props;
    this.props.handleChange(buying, indexGameRule);
  };

  handleChangeProduct = input => event => {
    const { buying } = this.state;
    buying.products.push(event.target.value);
    this.setState(buying);
    const { indexGameRule } = this.props;
    this.props.handleChange(buying, indexGameRule);
  };

  render() {
    this.fetchProducts();
    const values = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card>
              <CardBody>

                <a>Create Buying</a>
                <Label for="product">

                </Label>


                <Input value={values.reference} onChange={this.handleChangeProduct('reference').bind(this)}
                       type="select" name="selectMulti" multiple>
                  {this.state.allProducts.map((product, index) => (
                    <option key={index}>{product.reference}</option>
                  ))}
                </Input>
                <Label for="quantity">
                </Label>
                <Input
                  type="Text"
                  name="quantity"
                  value={values.quantity}
                  placeholder="The quantity of these products"
                  onChange={this.handleChange('quantity').bind(this)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}

export default BuyingGameRuleForm;
