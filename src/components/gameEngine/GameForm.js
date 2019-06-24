import Page from 'components/Page';
import React from 'react';

import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import GameStageForm from './GameStageForm';
import HttpService from '../../services/http';

const gameCardStyle = {
  backgroundColor: '#C0DAE5',
};

const gameStageCardStyle = {
  backgroundColor: '#A8DADC',
  marginBottom: '20px',
};

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {
        gameType: props.match.params.gameType,
        gameName: '',
        gameStages: [],
      },
    };
  }


  handleChange = input => event => {
    const { game } = this.state;
    game[input] = event.target.value;
    this.setState({ game });
  };

  handleGameStageChange = (object, index) => {
    const { game } = this.state;
    game.gameStages[index] = object;
    this.setState({ game });

  };


  handleSubmit = data => event => {
    const httpService = new HttpService();
    console.log(data);
    return httpService.postData('http://localhost:8080/api/game', data);
  };

  appendChild() {
    const { game } = this.state;
    game.gameStages.push({ gameStageName: '', reward: { rewardName: '' } });
    this.setState({ game });
  }

  handleGameStageDelete(index) {
    let {game} = this.state;
    game.gameStages.splice(index, 1);
     this.setState({game});
    return console.log("Game stage deleted"+this.state.game.gameStages.length);
  }

  render() {
    const game = this.state;
    const values = game;

    return (
      <Page title="Game Engine" breadcrumbs={[{ name: 'Bidding game', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <Card style={gameCardStyle}>
              <CardHeader>
                Template : Bidding Game{' '}
                <Button
                  type="button"
                  onClick={() => this.appendChild()}
                  className="small"
                >
                  Add GameStage
                </Button>
                <span className="font-weight-bold float-right">{this.state.game.gameStages.length} game stages</span>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="Game name" sm={2}>
                      the game's name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="gameName"
                        placeholder="Enter a game name"
                        onChange={this.handleChange('gameName')}
                      />
                    </Col>
                  </FormGroup>
                  <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                      {this.state.game.gameStages.map((gs, index) => (
                        <div key={index}>
                          <Card style={gameStageCardStyle}>
                            <CardHeader>
                              <button
                                className="float-right"
                                type="button"
                                onClick={() => {if(window.confirm("Are you sure you want to delete this game stage?"))this.handleGameStageDelete(index)}}>
                                &times;
                              </button>
                              Game Stage Creation Section <span className="font-weight-bold">{index + 1}/ {this.state.game.gameStages.length}</span>
                            </CardHeader>
                            <CardBody>
                              <GameStageForm
                                handleChange={this.handleGameStageChange}
                                index={index}
                                // handleChange={this.handleGameStageChange(index)}
                                values={gs}
                                gameType={this.state.game.gameType}
                              />
                            </CardBody>
                          </Card>
                        </div>
                      ))}
                    </Col>
                  </Row>
                  <FormGroup check row>
                    <Col sm={10}>
                      <Button onClick={this.handleSubmit(this.state.game)}>
                        Create
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }


}

export default GameForm;
