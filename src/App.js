import './App.css';
import TodoSearch from './TodoSearch';
import Ytsearch from 'youtube-api-search';
import React,{Component} from 'react';
import Videolist from './Videolist';

const api = 'AIzaSyAE17BN3MHIhLpyvn-NuN6usDLSWof_hXs';
// ';

// AIzaSyBxQvM74tXn85-uP4gCMkmu2ckUw7hccDc



class App extends Component {

    constructor(props){
        super(props);

        this.state = {videos:[]};
        
        Ytsearch({key:api, term:'surfboards'}, (videos) => {
          this.setState({videos})
        })
    }

  render(){
  return (
    <div className="container">
        <h1>Hello this is it</h1>
        <TodoSearch />
        <Videolist  videos={this.state.videos} />
    </div>
  );
}

}

export default App;
