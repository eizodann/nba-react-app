import React, { Component } from "react";
import style from "../../articles.module.css";
import Header from "./header";
import {
  firebaseDB,
  firebaseTeams,
  firebaseLooper
} from "../../../../firebase";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    firebaseDB
      .ref(`articles/${this.props.match.params.id}`)
      .once("value")
      .then(snapshot => {
        let article = snapshot.val();
        console.log('snapshot.val() :', snapshot.val());
        firebaseTeams
          .orderByChild("teamId")
          .equalTo(article.team)
          .once("value")
          .then(snapshot => {
            const team = firebaseLooper(snapshot);
            this.setState({
              article,
              team
            });
          });
      });

    // Axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
    // .then( response => {
    //     let article = response.data[0];

    //     Axios.get(`${URL}/teams?id=${article.team}`)
    //     .then(response => {
    //         this.setState({
    //             article,
    //             team : response.data
    //         })
    //     })
    // })
  }

  render() {
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
          <div
            className={style.articleImage}
            style={{
              background: `url('/images/articles/${article.image}')`
            }}
          ></div>
          <div className={style.articleText}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
