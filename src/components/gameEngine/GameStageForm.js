import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import BiddingGameRuleForm from './BiddingGameRuleForm';
import BuyingGameRuleForm from './BuyingGameRuleForm';

const gameStageStyle = {
  backgroundColor: '#F1FAEE',
};

class GameStageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedIn: false,
      gameStage: {
        gameRules: [],
        reward: {
          rewardName: '',
        },
      },
    };
    this.handleGameRuleDelete = this.handleGameRuleDelete.bind(this);
  }

  handleChangeReward = input => event => {
    const { gameStage } = this.state;
    gameStage.reward.rewardName = event.target.value;
    this.setState({ gameStage });
    const { index } = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  handleChange = input => event => {
    const { gameStage } = this.state;
    gameStage[input] = event.target.value;
    this.setState({ gameStage });
    const { index } = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  handleChangeBidding = (object, indexGameRule) => {
    const { gameStage } = this.state;
    gameStage.gameRules[indexGameRule] = object;
    this.setState(gameStage);
    const { index } = this.props;
    this.props.handleChange(this.state.gameStage, index);
  };

  appendGameRule() {
    const { gameStage } = this.state;
    switch (this.props.gameType) {
      case 'bidding' :
        console.log('bidding');
        gameStage.gameRules.push({ product: { reference: '' }, start_date: '', end_date: '' });
        break;
      case 'buying' :
        console.log('buying');
        gameStage.gameRules.push({ products: [], quantity: '' });
        break;
    }
    this.setState({ gameStage });
  }

  handleGameRuleDelete(index) {
    let {gameStage} = this.state;
    gameStage.gameRules.splice(index, 1);
    this.setState({gameStage});
    return console.log('Game Rule deleted');
  }

  renderGameRule(values, index) {
    switch (this.props.gameType) {
      case 'bidding' :
        return <BiddingGameRuleForm
          handleChange={this.handleChangeBidding}
          indexGameRule={index}
          handleGameRuleDelete={this.handleGameRuleDelete}
          gameRulesCounter={this.state.gameStage.gameRules.length}
          // handleChange={this.handleGameStageChange(index)}
          values={values}
        />;
      case 'buying':
        return <BuyingGameRuleForm
          handleChange={this.handleChangeBidding}
          indexGameRule={index}
          // handleChange={this.handleGameStageChange(index)}
          values={values}
        />;
    }
  }

  render() {
    const values = this.props;
    //console.log("values",values)
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card style={gameStageStyle}>
              <CardHeader>
                GAME RULES CREATION SECTION
                <Button
                  type="button"
                  onClick={() => this.appendGameRule()}
                  className="small"
                >
                  Add {this.props.gameType}
                </Button>
                <span className="font-weight-bold float-right">{this.state.gameStage.gameRules.length} game Rules</span>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="Game name" sm={2}>
                    the game stage name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="gameStageName"
                      value={values.gameStageName}
                      placeholder="The game stage name"
                      onChange={this.handleChange('gameStageName').bind(this)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Game name" sm={2}>
                    the game stage reward
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="reward.rewardName"
                      value={values.rewardName}
                      placeholder="The reward name"
                      onChange={this.handleChangeReward('rewardName').bind(this)}
                    />
                  </Col>
                </FormGroup>
                <Row className="row">
                  <Col xl={12} lg={12} md={12} sm={12}>
                    {this.state.gameStage.gameRules.map((gameRule, indexGameRule) => (
                      <div key={indexGameRule}>
                        {this.renderGameRule(gameRule, indexGameRule)}
                      </div>
                    ))}
                  </Col>
                </Row>
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
