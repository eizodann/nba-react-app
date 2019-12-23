import React from 'react';
import VideoList from '../../../widgets/videolist/videolist';

const VideosMain = (props) => (
    <VideoList type="card" loadMore={true} title={false} start={0} amount={10} />
)

export default VideosMain;