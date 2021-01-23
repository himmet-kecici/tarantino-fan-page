import React from 'react';

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2 className='pages-header'>{props.title}</h2>
            <div className="home-image"></div>
            <div className="thumbnail-container">
                <div className="home-thumbnail-1"></div>
                <div className="home-thumbnail-2"></div>
                <div className="home-thumbnail-3"></div>
                <div className="home-thumbnail-4"></div>


            </div>
        </div>

    </div>
)

export default Home;