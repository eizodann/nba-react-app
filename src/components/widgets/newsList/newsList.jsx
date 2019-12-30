import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import style from "./newsList.module.css";

import Button from "../buttons/buttons";
import CardInfo from "../cardInfo/cardInfo";
import { firebaseLooper, firebaseTeams, firebaseArticles } from "../../../firebase";

class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      // Axios.get(`${URL}/teams`).then(response => {
      //   this.setState({
      //     teams: response.data
      //   });
      // });

      firebaseTeams.once("value")
      .then(snapshot => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams
        });
      });
    }
    // Axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
    //   this.setState({
    //     items: [...this.state.items, ...response.data],
    //     start,
    //     end
    //   });
    // });

    firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
    .then((snapshot)=>{
      const articles = firebaseLooper(snapshot);
      this.setState({
        items: [...this.state.items, ...articles],
        start,
        end
      })
      
    })
    .catch(e=>console.log('e :', e))
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };

  renderNews = type => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: style.newsList_wrapper,
              enterActive: style.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div>
              <div className={style.newsList_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;

      case "cardMain":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: style.newsList_wrapper,
              enterActive: style.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div className={style.link_deco}>
              <Link to={`/articles/${item.id}`}>
                <div className={style.flex_wrapper}>
                  <div
                    className={style.left}
                    style={{
                      background: `url('/images/articles/${item.image}')`
                    }}
                  >
                    <div></div>
                  </div>
                  <div className={style.right}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          </CSSTransition>
        ));
        break;

      default:
        template = null;
        break;
    }
    return template;
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
