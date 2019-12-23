import React, { Component } from 'react';
import Axios from "axios";
import { URL } from "../../../../config";
import style from "../../articles.module.css";
import Header from './header';

class NewsArticles extends Component {

    state = {
        article:[],
        team:[]
    }

    componentWillMount() {
        Axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
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

    render() { console.log('this.state :', this.state);
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div className={style.articleWrapper}>
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={style.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={style.articleImage}
                        style={{
                            background:`url('/images/articles/${article.image}')`
                        }}
                    ></div>
                    <div className={style.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsArticles;