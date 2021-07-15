import React from 'react';

class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit (event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
      return (
        <div>
          <header>
            <p> STRING CALCULATOR </p>
          </header>
          <form onSubmit = {this.handleSubmit}>
              <label> <span> String Value: </span>
                 <input type="text" value= {this.state.value} onChange = {this.handleChange} />
                 <span><input type = "submit" value= "Submit" /></span>
              </label>
          </form>
        </div>
      );
    }
}

export default App;
