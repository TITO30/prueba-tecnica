import {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list';
import {SearchBox} from './components/seach-box'

//Declaración de constructor y arreglo que almacenará los datos de la API
class App extends Component{
constructor(){
  super();
  this.state={
    personajes:[],
    searchField:'',
    next:"",
    previous:""
  };
  this.handleChange = this.handleChange.bind(this);
}


//

componentDidMount = async () =>{
    await fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(resp => this.setState({personajes:resp.results}));
}

handleChange = (e)=>{
  this.setState({searchField: e.target.value})
}

render() {
  const{personajes,searchField} = this.state;
  const filteredpersonajes = personajes.filter(personajes => 
    personajes.name.toLowerCase().includes(searchField.toLowerCase()))
  
  console.log(personajes);
  return (
    <div className="App">
      <h1>Rick and Morty API</h1>
      <SearchBox 
      placeholder='Search your favorite character'
      handleChange={this.handleChange }/>
      <button>After</button>
      <button>Next</button>

      <CardList personajes={filteredpersonajes}/>
    </div>
  );
}
}

export default App;
