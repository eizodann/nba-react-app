import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home.jsx";
import Layout from "./hoc/layout/layout.jsx";
import NewsArticle from "./components/articles/news/post/index.jsx";
import VideoArticle from "./components/articles/videos/video/index.jsx";
import NewsMain from "./components/articles/news/main/index.jsx";
import VideosMain from "./components/articles/videos/main/index.jsx";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/news" exact component={NewsMain}></Route>
          <Route path="/articles/:id" exact component={NewsArticle}></Route>
          <Route path="/videos/:id" exact component={VideoArticle}></Route>
          <Route path="/videos" exact component={VideosMain}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
