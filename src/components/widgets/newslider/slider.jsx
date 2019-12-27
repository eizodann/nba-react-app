import React, { Component } from 'react';

import SliderTemplates from './slider_templates';
import { firebaseArticles, firebaseLooper } from '../../../firebase';

class NewsSlider extends Component {
    state = {
        news:[]
    }

    componentWillMount() {

        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot)=>{
            // const news = [];
            // snapshot.forEach((childSnapshot)=>{
            //     news.push({
            //         ...childSnapshot.val(),
            //         id: childSnapshot.key
            //     })
            // })
            const news=firebaseLooper(snapshot)
            this.setState({
                news
            })
        })

        // Axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`).then(response=> {
        //     this.setState({
        //         news:response.data
        //     })
        // })
    }
    render() {
        // setTimeout(()=>console.log('time :', this.state.news))
        // console.log('this.state.news :', this.state.news);

        return (
            <div>
                <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        );
    }
}

export default NewsSlider;