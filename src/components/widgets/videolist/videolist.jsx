import React, { Component } from "react";
import style from "./videoList.module.css";
import Axios from "axios";
import Button from "../buttons/buttons";
import { URL } from "../../../config";
import VideosListTemplate from "./videosListTemplate";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request =(start,end)=> {
    if ( this.state.teams.length < 1 ) {
        Axios.get(`${URL}/teams`).then(response=> {
            this.setState({
                teams: response.data
            })
        })
    }

    Axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then( response => {
                this.setState({
                    videos:[...this.state.videos,...response.data],
                    start,
                    end
                })
            })
  }

  renderVideos = () => {
    let template = null;

    switch(this.props.type){
        case('card'):
            template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
            break;
        default:
            template = null
    }
    return template;
}

  loadMore =()=> {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderButton = () => {
    return this.props.loadMore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="link" cta="More Videos" linkTo="/videos" />
    );
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  render() {
    return (
      <div className={style.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
