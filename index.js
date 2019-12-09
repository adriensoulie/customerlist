import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Adrien Soulié" },
      { id: 2, nom: "Paul Baguette" },
      { id: 3, nom: "Henry Biscotte" }
    ],
    nouveauClient: ""
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return clients.id === id;
    });

    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = {id: id, nom};

    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({clients: clients, nouveauClient: ''});
  };

  handleChange = event => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
  };

  render() {
    const title = "Customers List";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            type="text"
            placeholder="Add a client"
          />
          <button>Confirm</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
