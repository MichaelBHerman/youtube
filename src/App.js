import React from 'react';
import youtube from './api/youtube';
import { Grid } from '@mui/material/';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import VideoComments from './components/VideoComments';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyAgkG99RfkaAalMcu5QAtBhuV_625p14Ho',
      q: searchTerm,
    } 
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  createComment = async (newComment) => {
    let tempComments = this.state.comments.comment;
    let response = await axios.post('http://127.0.0.1:8000/comment/', newComment)
    tempComments.push(response)
    console.log(response)
    this.getAllComments()
      }


  render () {
    const { selectedVideo, videos } = this.state;
    return(
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs ={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
             <VideoDetail video={this.state.selectedVideo}/>
            </Grid>
            {/* <Grid item xs ={8}>
              <VideoComments />
              
            </Grid> */}
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              
            </Grid>
            <Grid item xs ={12}>
              <VideoComments />
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}



export default App