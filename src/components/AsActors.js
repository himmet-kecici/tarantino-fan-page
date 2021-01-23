import React from 'react';
import { Link } from 'react-router-dom';
import { AsActorsList } from '../data/AsActors';


const AsActors = (props) => {
    let asactorslist = AsActorsList.map((director) => {
        return (
            <div className='asdirectors-container'>

                <div className='asActors-image' style={{ backgroundImage: "url(" + director.img_src + ")" }}></div>

                <h3 className='movies-names'>{director.name}</h3>

            </div >
        )
    })
    return (
        <div className="main-content" >
            <div><Link className="back" to="/">Back</Link></div>
            <h2 >{props.title}</h2>
            <div className="container">
                {asactorslist}
            </div>

        </div>
    )
}

export default AsActors