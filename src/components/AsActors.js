import React from 'react';
import { Link } from 'react-router-dom';
import { AsActorsList } from '../data/AsActors';


const AsActors = (props) => {
    let asactorslist = AsActorsList.map((movie) => {
        return (
            <div className='asdirectors-container'>
                <Link to={`/asactors/${movie.url}`}>
                    <div className='asActors-image' style={{ backgroundImage: "url(" + movie.img_src + ")" }}></div>
                </Link>
                <h3 className='movies-names'>{movie.name}</h3>

            </div >
        )
    })
    return (
        <div className="main-content" >
            <h2 >{props.title}</h2>
            <div className="container">
                {asactorslist}
            </div>

        </div>
    )
}

export default AsActors