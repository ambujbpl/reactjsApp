import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, isLoading: true, term: '', isInitial: 'true'};

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    this.setState({
      isLoading: true,
      term:term,
    });
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      isLoading: false,
      isInitial: true
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      isLoading: true
    });
    setTimeout(()=> {
      this.setState({ selectedVideo: video, isLoading: false, isInitial: false });
    },100)
  };

  render() {
    if(this.state.isLoading) {
      return <Loader message="Please wait data is loading ......" />;
    }
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} term={this.state.term}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} isInitial={this.state.isInitial}/>
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
