import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AlertPage from 'pages/AlertPage';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import BadgePage from 'pages/BadgePage';
import ButtonGroupPage from 'pages/ButtonGroupPage';
import ButtonPage from 'pages/ButtonPage';
import CardPage from 'pages/CardPage';
import ChartPage from 'pages/ChartPage';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class GameForm extends React.Component{
    constructor(){
        super()
        this.state = {
          hasLoggedIn: false,
        }
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange = (e) => {
        this.setState({
          gameName: e.target.value
      })

      console.log("help"+this.state.gameName);
      }

      render() {
          return(
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Game creation
              </Typography>
              <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                  <TextField required id="gameName" value={this.state.gameName} onChange={this.handleChange} label="The Name of the game" fullWidth />
                </Grid>
              </Grid>
          </React.Fragment>
  );
      }
}

export default GameForm;