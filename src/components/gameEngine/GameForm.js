import Page from 'components/Page';
import React from 'react';
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
import GameStageForm from './GameStageForm';
import axios from 'axios';
import GameStage from './GameStage-model';

class GameForm extends React.Component {
  state = {
    game: {
      gameName: '',
      gameStages: [],
      rewardName: '',
      quantity: '',
      product: '',
    },
  };

  // handleAddGameStage = () => {
  //   const game = this.state;
  //   const values = game;
  //   let gameStages = this.state.game.gameStages;

  //   console.log(values);

  //   let gameStage = new GameStage;
  //   gameStage.gameStageName = values.gameStageName;

  //   gameStages.push(
  //                   <GameStageForm
  //                     key={this.state.game.gameStages.length}
  //                     handleChange = {this.handleChange}
  //                     values={values}
  //                   />

  //   )

  //   this.setState({
  //     gameStages: gameStages
  //   });
  // };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  handleGameStageChange = index => value => {
    this.setState(prevState => {
      const newGameStages = prevState.game.gameStages.concat();
      newGameStages[index] = value;
      return {
        game: {
          gameStages: newGameStages,
        },
      };
    });
  };

  // handleSubmit(event){
  //   event.preventDefault();
  //   let data = new FormData(event.target);

  //  console.log(data.getAll("gameStageName"));

  //   // axios.post(`http://localhost:8080/api/games`,data)
  //   //   .then(res => {
  //   //       console.log(res.data);
  //   //   })

  // }

  handleSubmit = data => event => {
    console.log(data);
    return axios
      .post('http://localhost:8080/api/games', data, {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(data => console.log(data));
  };

  appendChild() {
    this.setState(prevState => ({
      game: {
        gameStages: [...prevState.game.gameStages, { stageName: '' }],
      },
    }));
  }

  render() {
    const game = this.state;
    const values = game;

    return (
      <Page title="Forms" breadcrumbs={[{ name: 'Game Engine', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12}>
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
                        placeholder="Enter a game name"
                        onChange={this.handleChange('gameName')}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="quantity" sm={2}>
                      the game rewards available
                    </Label>
                    <Col sm={10}>
                      <Input type="select" name="selectMulti">
                        <option>Free Shipping on next purchase</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  {/* Looping through game stages */}

                  <a>Create Game Stage</a>
                  <Card className="flex-row" style={{ width: 800 }}>
                    {this.state.game.gameStages.map((gs, index) => (
                      <div key={index}>
                        <Card>
                          <CardHeader>Game Stage Creation Section</CardHeader>
                          <CardBody>
                            <GameStageForm
                              handleChange={this.handleGameStageChange(index)}
                              values={gs}
                            />
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </Card>

                  {/* <div>
                {this.state.game.gameStages.map((item, index) => (
                  <Card key={index}>
                 <CardHeader>Game Stage Creation Section <Button
                    type="button"
                    onClick={this.handleAddGameRule}
                    className="small"
                  >
                    Add GameRule
                    </Button>
        </CardHeader>
                 <CardBody>
                    <GameStageForm  
                      handleChange = {this.handleChange}
                      values={values}
                    />          
                </CardBody>
                </Card>
                ))}
              </div> */}

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
