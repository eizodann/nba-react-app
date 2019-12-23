import React, { Component } from 'react';
import Axios from "axios";
import { URL } from "../../../../config";
import style from "../../articles.module.css";
import Header from './header';
import VideoRelated from '../../../widgets/videolist/videoRelated/videoRelated';

class VideoArticle extends Component {
    state = {
        article : [],
        team : [],
        teams : [],
        related : []
    }

    componentWillMount() {
        Axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0];

            Axios.get(`${URL}/teams?id=${article.team}`)
            .then(response => { 
                this.setState({
                    article,
                    team : response.data
                });
                this.getRelated()
            })
        })
    }

    getRelated =()=> {
        
        Axios.get(`${URL}/teams`)
        .then (response => {
            let teams = response.data

            Axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
            .then(response => {
                this.setState({
                    teams,
                    related : response.data
                })
            })
        })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;

        return (
            <div>
                <Header teamData={team[0]}/>
                <div className={style.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe title="videoplayer" width="100%" height="300px" src={`https://www.youtube.com/embed/${article.team}`} frameborder="0"></iframe>
                </div>
                <VideoRelated
                    data={this.state.related}
                    teams={this.state.teams}
                />
            </div>
        );
    }
}

export default VideoArticle;