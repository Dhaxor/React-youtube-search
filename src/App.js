import './App.css';
import _ from 'lodash';
import SearchBar from './SearchBar';
import Ytsearch from 'youtube-api-search';
import React,{Component} from 'react';
import Videolist from './Videolist';
import Videodetail from './Videodetail';

const api = '';




class App extends Component {

    constructor(props){
        super(props);

        this.state = {
          videos:[],
          selectedVideo:null,
        
        };


        this.videoSearch('surfboards')
      }

        videoSearch(term){
          Ytsearch({key:api, term: term}, (videos) => {
            this.setState({
              videos,
              selectedVideo:videos[0]
            })
          });
        }




    

  render(){

    const videoSearch = _.debounce((item) => {this.videoSearch(item)},300)

  return (
    <div className="container">
        {/* <h1>Hello this is it</h1> */}
        <SearchBar onSearchtermChange={videoSearch} />
        <Videodetail video={this.state.selectedVideo} />
        <Videolist 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
  );
}

}

export default App;
