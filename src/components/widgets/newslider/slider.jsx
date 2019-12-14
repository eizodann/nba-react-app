import React, { Component } from 'react';
import Axios from 'axios';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {
    state = {
        news:[]
    }

    componentWillMount() {
        Axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`).then(response=> {
            this.setState({
                news:response.data
            })
        })
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