import * as React from 'react';
import './LatestPost.scss';

const LatestPost = ({title, description, imgUrl}) => {

    return (
        <div className="latestPost__container">
            <div className="latestPost__img">
                <img src={imgUrl} alt="flower" />
            </div>
            <div className="latestPost__info">
                <h6>{title.slice(0, 50)}...</h6>
                <p>{description.slice(0, 55)}...</p>
            </div>
        </div>
    );
}

export default LatestPost;
