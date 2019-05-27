import Page from 'components/Page';
import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import GameStageForm from './GameStageForm';
import axios from 'axios';
import HttpService from '../../services/http';

class GameForm extends React.Component {
  state = {
    game: {
      gameName: '',
      gameStages: [],

    },
  };


  handleChange = input => event => {
    const {game} = this.state;
      game[input] = event.target.value;
      this.setState({game});
  };

  handleGameStageChange = (object, index) => {
      const {game} = this.state;
      game.gameStages[index] = object;
      this.setState({game});

  };


  handleSubmit = data => event => {
    const httpService = new HttpService();
    console.log(data);
    return httpService.postData('http://localhost:8080/api/game', data);
  };

  appendChild() {
    const {game} = this.state;
    game.gameStages.push({ gameStageName: '',rewardName: '' });
    this.setState({game});

  }

  render() {
    const game = this.state;
    const values = game;

    return (
      <Page title="Forms" breadcrumbs={[{ name: 'Game Engine', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <Card>
              <CardHeader>
                Template : Bidding Game{' '}
                <Button
                  type="button"
                  onClick={() => this.appendChild()}
                  className="small"
                >
                  Add GameStage
                </Button>
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
                        value={values.gameName}
                        placeholder="Enter a game name"
                        onChange={this.handleChange('gameName')}
                      />
                    </Col>
                  </FormGroup>

                  <Card className="flex-row" style={{ width: 800 }}>
                    {this.state.game.gameStages.map((gs, index) => (
                      <div key={index}>
                        <Card>
                          <CardHeader>Game Stage Creation Section</CardHeader>
                          <CardBody>
                            <GameStageForm
                              handleChange={this.handleGameStageChange}
                              index={index}
                              // handleChange={this.handleGameStageChange(index)}
                              values={gs}
                            />
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </Card>

                  <Card>
                    <FormGroup check row>
                      <Col sm={10}>
                        <Button onClick={this.handleSubmit(values)}>
                          Submit
                        </Button>
                      </Col>
                    </FormGroup>
                  </Card>
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
