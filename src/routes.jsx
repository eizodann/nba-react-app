import React from "react";
import { Switch } from "react-router-dom";
import Home from "./components/home/home.jsx";
import Layout from "./hoc/layout/layout.jsx";
import NewsArticle from "./components/articles/news/post/index.jsx";
import VideoArticle from "./components/articles/videos/video/index.jsx";
import NewsMain from "./components/articles/news/main/index.jsx";
import VideosMain from "./components/articles/videos/main/index.jsx";
import SignIn from "./components/signin/signin.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

const Routes =(props)=> {
    console.log('this.props :', props);
    return (
      <Layout user={props.user}>
        <Switch>
          <PublicRoutes {...props} path="/" restricted={false} exact component={Home}></PublicRoutes>
          <PublicRoutes {...props} path="/news" restricted={false} exact component={NewsMain}></PublicRoutes>
          <PublicRoutes {...props} path="/articles/:id" restricted={false} exact component={NewsArticle}></PublicRoutes>
          <PublicRoutes {...props} path="/videos/:id" restricted={false} exact component={VideoArticle}></PublicRoutes>
          <PublicRoutes path="/videos" restricted={false} exact component={VideosMain}></PublicRoutes>
          <PublicRoutes {...props} path="/sign-in" restricted={true} exact component={SignIn}></PublicRoutes>
          <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}></PrivateRoutes>

        </Switch>
      </Layout>
    );
}

export default Routes;
