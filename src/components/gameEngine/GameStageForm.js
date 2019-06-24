import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import BiddingGameRuleForm from './BiddingGameRuleForm';
import BuyingGameRuleForm from './BuyingGameRuleForm';

class GameStageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasLoggedIn: false,
      gameStage: {
        gameRules: [],
        reward: {
          rewardName: ''
        }
      }
    };
    this.renderGameRule = this.renderGameRule.bind(this);
  }

  handleChangeReward = input => event => {
    const {gameStage} = this.state;
    gameStage.reward.rewardName = event.target.value;
    this.setState({gameStage});
    const {index} = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  handleChange = input => event => {
    const {gameStage} = this.state;
      gameStage[input] = event.target.value;
      this.setState({gameStage});
    const {index} = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  handleChangeBidding = (object,indexGameRule) => {
    const {gameStage} = this.state;
    gameStage.gameRules[indexGameRule] = object;
    this.setState(gameStage)
    const {index} = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  appendGameRule() {
    const { gameStage } = this.state;
    switch (this.props.gameType) {
      case "bidding" :
        console.log("dkhel l bidding");
        gameStage.gameRules.push({ product: { reference: '' }, start_date: '', end_date: '' });
        break;
      case "buying" :
        console.log("dkhel l buying");
        gameStage.gameRules.push({ products: [], quantity: '' });
        break;
    }
    this.setState({ gameStage });
  }

  renderGameRule(values,index) {
    switch(this.props.gameType) {
      case "bidding" :
        return <BiddingGameRuleForm
          handleChange={this.handleChangeBidding}
          indexGameRule={index}
          // handleChange={this.handleGameStageChange(index)}
          values={values}
        />
      case "buying":
        return <BuyingGameRuleForm
          handleChange={this.handleChangeBidding}
          indexGameRule={index}
          // handleChange={this.handleGameStageChange(index)}
          values={values}
        />
       }
    }

  render() {
    const values = this.props;
    //console.log("values",values)
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Button
                  type="button"
                  onClick={() => this.appendGameRule()}
                  className="small"
                >
                  Add {this.props.gameType}
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
                  name="reward.rewardName"
                  value={values.rewardName}
                  placeholder="The reward name"
                  onChange={this.handleChangeReward('rewardName').bind(this)}
                />

              
                  <Card className="flex-row" >
                    {this.state.gameStage.gameRules.map((gameRule, indexGameRule) => (
                      <div key={indexGameRule}>
                        <Card>
                          <CardHeader>Bidding Creation Section</CardHeader>
                          <CardBody>
                            {this.renderGameRule(gameRule,indexGameRule)}
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </Card>

                  </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default GameStageForm;
