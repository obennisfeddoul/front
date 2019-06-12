import React from 'react';
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from 'reactstrap';

class BuyingGameRuleForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasLoggedIn: false,
      buying: {
        quantity: '',
        products: []
      }
    };
  }

  handleChange = input => event => {
    const {buying} = this.state;
    buying[input] = event.target.value;
    this.setState(buying)
    const {indexGameRule} = this.props;
    this.props.handleChange(buying, indexGameRule);
  };

  handleChangeProduct = input => event => {
    const {buying} = this.state;
    buying.products.push(event.target.value);
    this.setState(buying)
    const {indexGameRule} = this.props;
    this.props.handleChange(buying, indexGameRule);
  };

  render() {
    const values = this.props;
    return(
      <React.Fragment>
        <Row>
          <Col >
            <Card>
              <CardBody>


                {/*<Card className="flex-row" >*/}
                {/*  {this.state.buying.products.map((product, indexProduct) => (*/}
                {/*    <div key={indexProduct}>*/}
                {/*      <Card>*/}
                {/*        <CardHeader>Bidding Creation Section</CardHeader>*/}
                {/*        <CardBody>*/}
                {/*          {this.renderGameRule(product,indexProduct)}*/}
                {/*        </CardBody>*/}
                {/*      </Card>*/}
                {/*    </div>*/}
                {/*  ))}*/}
                {/*</Card>*/}

                <a>Create Buying</a>
                <Label for="product">

                </Label>


                <Input value={values.reference} onChange={this.handleChangeProduct('reference').bind(this)} type="select" name="selectMulti" multiple>
                  <option>product 1</option>
                  <option>product 2</option>
                  <option>product 3</option>
                  <option>product 4</option>
                  <option>product 5</option>
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
