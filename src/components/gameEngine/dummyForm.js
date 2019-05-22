import React from 'react'
import  axios  from "axios";

class MyForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

     gameMock = {
        gameName: ''
    };
    
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

            data.set("userName","fred");
            data.set("gameStages",[{},{}])

        console.log(data.getAll("gameSatgeNames[]"));

      axios.post(`http://localhost:8080/api/games`,this.gameMock)
      .then(res => {
          console.log(res.data);
      })
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/games`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            
          console.log(persons);
          })

      }
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} name="myForm" id="myForm">
          <label htmlFor="gameName">Enter gameName</label>
          <input id="gameName" name="gameName" type="text" /><br></br>
  
            {/* gameStages */}
            <label htmlFor="gameName">Enter gameStagesName</label>
            <input id="gameStageNames" name="gameSatgeNames[]" type="text" />
            <input id="gameStageNames" name="gameSatgeNames[]" type="text" />
            <input id="gameStageNames" name="gameSatgeNames[]" type="text" />
          <button>Send data!</button>
        </form>
      );
    }
  }

export default MyForm;