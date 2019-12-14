import React from 'react';
import Slick from 'react-slick';
import style from './slider.module.css'
import { Link } from "react-router-dom";

const SliderTemplates = (props) => {
    console.log('props :', props);

    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
      };

    switch (props.type) {
        case ('featured'):
            template = props.data.map((item, i)=>{
                return (<div key={1}>
                    <div className={style.featured_item}>
                        <div className={style.featured_image} style={{
                            background: `url(../images/articles/${item.image})`
                        }}></div>
                        <Link to={`/articles/${item.id}`}>
                            <div className={style.featured_caption}>{item.title}</div>
                        </Link>
                    </div>
                </div>)
            })
            break;
    
        default:
            template = null;
            break;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplates;