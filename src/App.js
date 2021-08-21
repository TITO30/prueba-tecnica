import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/seach-box";

//Declaración de constructor y arreglo que almacenará los datos de la API
class App extends Component {
  constructor() {
    super();
    this.state = {
      personajes: [],
      searchField: "",
      currentpage: 1,
      postperpage: 6,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //

  componentDidMount = () => {
    this.fetchData(this.currentpage);
  };

  fetchData = async () => {
    await fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.currentpage}`
    )
      .then((res) => res.json())
      .then((response) => this.setState({ personajes: response.results }));
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { personajes, searchField, currentpage } = this.state;
    const filteredpersonajes = personajes.filter((personajes) =>
      personajes.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const previouspage = async () => {
      if (currentpage > 1) {
        await this.setState({ currentpage: currentpage - 1 });
        this.fetchData(currentpage);
      } else {
      }
    };

    const nextpage = async () => {
      await this.setState({ currentpage: currentpage + 1 });
      this.fetchData(currentpage);
    };

    console.log(currentpage);
    console.log(personajes);
    return (
      <div className="App">
        <h1>Rick and Morty API</h1>
        <div className="mb-4">
          <SearchBox
            placeholder="Search your favorite character"
            handleChange={this.handleChange}
          />

          <div className="d-flex justify-content-evenly">
            <button className="btn-primary" onClick={previouspage}>
              Previous
            </button>
            <button className="btn-primary" onClick={nextpage}>
              Next
            </button>
          </div>
        </div>
        <CardList personajes={filteredpersonajes} />
      </div>
    );
  }
}

export default App;
