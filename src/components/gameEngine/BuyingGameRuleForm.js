import React from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import HttpService from '../../services/http';

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
    let httpService = new HttpService();
    let data = httpService.fetchProducts().then((data) => {
      this.setState({ products: data.data });
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

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    //this.fetchProducts();
    const values = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <button
                  className="float-right"
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this game rule?')) this.props.handleGameRuleDelete(this.props.indexGameRule);
                  }}
                >
                  &times;
                </button>
                <span>Bidding game Rule N°: <span
                  className="font-weight-bold"> {this.props.indexGameRule + 1}</span></span>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="product" sm={2}>
                    Targeted project(s)
                  </Label>
                  <Col sm={10}>
                    <Input value={values.reference} onChange={this.handleChangeProduct('reference').bind(this)}
                           type="select" name="selectMulti" multiple>
                      {this.state.allProducts.map((product, index) => (
                        <option key={index}>{product.reference}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Quantity" sm={2}>
                    Required Quantity
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="Text"
                      name="quantity"
                      value={values.quantity}
                      placeholder="The quantity of these products"
                      onChange={this.handleChange('quantity').bind(this)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}

export default BuyingGameRuleForm;
