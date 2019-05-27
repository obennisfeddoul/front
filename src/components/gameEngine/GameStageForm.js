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
    this.state = { hasLoggedIn: false,
      gameStage: {
        biddings: []
      }
    };
  }

  handleChange = input => event => {
    const {gameStage} = this.state;
      gameStage[input] = event.target.value;
      this.setState({gameStage});
  };

  handleChangeBidding = (object,indexBid) => {
    const {gameStage} = this.state;
    console.log("object")
    console.log(object)
    gameStage.biddings[indexBid] = object;
    this.setState(gameStage)
    const {index} = this.props;
    this.props.handleChange(gameStage, index);
  };

  appendBidding() {
    const {gameStage} = this.state;
    gameStage.biddings.push({ product: '',start_date: '',end_date: '' });
    this.setState({gameStage});
  }

  render() {
    const values = this.props;
    //console.log("values",values)
    return (
      <React.Fragment>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <Card>
              <CardHeader>
                <Button
                  type="button"
                  onClick={() => this.appendBidding()}
                  className="small"
                >
                  Add Bidding
                </Button>
              </CardHeader>
              <CardBody>
              <a>Create Game Stage</a>
                <Input
                  type="text"
                  name="gameStageName"
                  value={values.gameStageName}
                  placeholder="The game stage name"
                  onChange={this.handleChange('gameStageName').bind(this)}
                />

                <Input
                  type="text"
                  name="rewardName"
                  value={values.rewardName}
                  placeholder="The reward name"
                  onChange={this.handleChange('rewardName').bind(this)}
                />

              
                  <Card className="flex-row" style={{ width: 800 }}>
                    {this.state.gameStage.biddings.map((bidding, indexBid) => (
                      <div key={indexBid}>
                        <Card>
                          <CardHeader>Bidding Creation Section</CardHeader>
                          <CardBody>
                            <BiddingGameRuleForm
                              handleChange={this.handleChangeBidding}
                              indexBid={indexBid}
                              // handleChange={this.handleGameStageChange(index)}
                              values={bidding}
                            />
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </Card>

                  </CardBody>
            </Card>
          </Col>
        </Row>
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
