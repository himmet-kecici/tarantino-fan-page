import React from 'react'
import { Link } from 'react-router-dom';
import { AsDirectorsList } from '../data/AsDirectors';

const AsDirectors = (props) => {

    let asdirectorslist = AsDirectorsList.map((director) => {
        return (
            <div className='asdirectors-container'>
                <Link to={`/asdirectors/${director.url}`}>
                    <div className='asdirectors-image' style={{ backgroundImage: "url(" + director.img_src + ")" }}></div>
                </Link>
                <h3 className='movies-names'>{director.name}</h3>
            </div >
        )
    })
    return (
        <div className="main-content" >
            <h2 >{props.title}</h2>
            <div className="container">
                {asdirectorslist}
            </div>

        </div>
    )
}

export default AsDirectors;