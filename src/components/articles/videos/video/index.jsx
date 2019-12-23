import React, { Component } from 'react';
import Axios from "axios";
import { URL } from "../../../../config";
import style from "../../articles.module.css";
import Header from './header';

class VideoArticle extends Component {
    state = {
        article : [],
        team : []
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
                video
            </div>
        );
    }
}

export default VideoArticle;