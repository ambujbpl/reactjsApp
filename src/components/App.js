import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';

const App = () => {
  const [ videos, setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ term, setTerm ] = useState('');
  const [ isInitial, setIsInitial ] = useState(true);
  
  const onTermSubmit = async (term) => {
    setIsLoading(true);
    setTerm(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    setIsLoading(false);
    setIsInitial(true);
  };

  const onVideoSelect = (video) => {
    setIsLoading(true);
    setTimeout(()=> {
      setSelectedVideo(video);
      setIsLoading(false);
      setIsInitial(false);
    },100)
  };

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  // render UI
  if(isLoading) {
    return <Loader message="Please wait data is loading ......" />;
  }
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} term={term}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} isInitial={isInitial}/>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null, isLoading: true, term: '', isInitial: 'true'};

//   componentDidMount() {
//     this.onTermSubmit('buildings');
//   }

//   onTermSubmit = async (term) => {
//     this.setState({
//       isLoading: true,
//       term:term,
//     });
//     const response = await youtube.get('/search', {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//       isLoading: false,
//       isInitial: true
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({
//       isLoading: true
//     });
//     setTimeout(()=> {
//       this.setState({ selectedVideo: video, isLoading: false, isInitial: false });
//     },100)
//   };

//   render() {
//     if(this.state.isLoading) {
//       return <Loader message="Please wait data is loading ......" />;
//     }
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} term={this.state.term}/>
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} isInitial={this.state.isInitial}/>
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
