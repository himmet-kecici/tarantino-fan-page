import React from 'react'
import { Link } from 'react-router-dom';
import { AsDirectorsList } from '../data/AsDirectors';

const AsDirectors = (props) => {

    let asdirectorslist = AsDirectorsList.map((director) => {
        return (
            <div className='asdirectors-container'>

                <div className='asdirectors-image' style={{ backgroundImage: "url(" + director.img_src + ")" }}></div>

                <h3 className='movies-names'>{director.name}</h3>
            </div >
        )
    })
    return (
        <div className="main-content" >
            <div><Link className="back" to="/">Back</Link></div>
            <h2 >{props.title}</h2>
            <div className="container">
                {asdirectorslist}
            </div>

        </div>
    )
}

export default AsDirectors;