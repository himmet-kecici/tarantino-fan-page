import React from 'react';
import { Route } from 'react-router-dom';
import { AsActorsList } from '../data/AsActors';
import AsActor from './AsActor';
import AsActors from './AsActors';


const AsActorsContainer = (props) => {
    let movieUrl = AsActorsList.map((movie) => {
        return (
            <Route path={`/asactors/${movie.url}`} render={() => <AsActor name={movie.name} details={movie.description} image={movie.profileImg} />} />

        )
    })

    return (
        <React.Fragment>
            <Route exact path='/asactors' render={() => <AsActors title={props.title} />} />
            { movieUrl}

        </React.Fragment>

    )
}

export default AsActorsContainer