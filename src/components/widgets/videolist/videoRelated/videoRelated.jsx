import React from 'react';
import style from "../videoList.module.css";
import VideosListTemplate from '../videosListTemplate';

const videoRelated = (props) => {
    return (
        <div className={style.relatedWrapper}>
            <VideosListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    );
};

export default videoRelated;