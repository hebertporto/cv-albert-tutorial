import React from "react";
import { Input } from "./components/Input";
import { Section } from "./components/Section";
import "./styles/main.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "valor do input",
      email: "",
      phone: "",
      isSubmitted: false,
    };
    this.handleSubmit.bind(this);
    this.handleInputChange.bind(this);
  }

  handleSubmit = () => {
    this.setState({
      isSubmitted: true,
    });
  };

  handleInputChange = (value) => {
    console.log(value);
    this.setState({
      name: this.input.value,
    });
  };

  render() {
    return (
      <div className='app'>
        {this.state.isSubmitted ? (
          <div>
            <div>Exibir os dados</div>
            <h2>Name</h2>
            <p>{this.state.name}</p>
          </div>
        ) : (
          <div>
            <Section title='General Information'>
              <Input
                placeholder='Name'
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <Input placeholder='Email' />
              <Input placeholder='Phone numer' />
            </Section>
            <Section title='Educational experience'>
              <Input placeholder='school name' />
              <Input placeholder='title of study' />
              <Input placeholder='date of study' />
            </Section>
            <Section title='Practical experience'>
              <Input placeholder='company name' />
              <Input placeholder='position title' />
              <Input placeholder='main tasks of your jobs' />
              <Input placeholder='date from and until when you worked for that company' />
            </Section>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    );
  }
}

export { App };
