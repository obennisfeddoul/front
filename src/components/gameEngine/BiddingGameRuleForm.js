import React from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from 'reactstrap';
import HttpService from '../../services/http';

const biddingGameRuleCardStyle = {
  marginBottom: '20px',
};

class BiddingGameRuleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedIn: false,
      gameRulesCounter: 0,
      products: [],
      bidding: {
        //typeRule: 'bidding',
        product: {
          reference: '',
        },
      },
    };
    //this.handleGameRuleDelete = this.handleGameRuleDelete.bind(this);
  }

  fetchProducts() {
    let httpService = new HttpService();
    let data = httpService.fetchProducts().then((data) => {
      this.setState({ products: data.data });
    });
  }

  handleChange = input => event => {
    const { bidding } = this.state;
    bidding[input] = event.target.value;
    this.setState(bidding);
    const { indexGameRule } = this.props;
    this.props.handleChange(bidding, indexGameRule);
  };

  handleChangeProduct = input => event => {
    const { bidding } = this.state;
    bidding.product.reference = event.target.value;
    this.setState(bidding);
    const { indexGameRule } = this.props;
    this.props.handleChange(bidding, indexGameRule);
  };

  componentDidMount() {
    let { gameRulesCounter } = this.props;
    this.setState({ gameRulesCounter: gameRulesCounter });
    this.fetchProducts();
  }

  render() {
    const values = this.props;
    return (
      <React.Fragment>
        <Card style={biddingGameRuleCardStyle}>
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
              <Label for="Targeted product" sm={2}>
                Targeted product
              </Label>
              <Col sm={10}>
                <Input value={values.reference} onChange={this.handleChangeProduct('reference').bind(this)}
                       type="select" name="selectMulti">
                  {this.state.products.map((product, index) => (
                    <option key={index}>{product.reference}</option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="start_date" sm={2}>
                Start date
              </Label>
              <Col sm={10}>
                <Input
                  type="Date"
                  name="start_date"
                  value={values.start_date}
                  placeholder="The start date of the bidding"
                  onChange={this.handleChange('start_date').bind(this)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="end_date" sm={2}>
                The end date
              </Label>
              <Col sm={10}>
                <Input
                  type="Date"
                  name="end_date"
                  value={values.end_date}
                  placeholder="The end date of the bidding"
                  onChange={this.handleChange('end_date').bind(this)}
                />
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BiddingGameRuleForm;
