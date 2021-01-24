import React from 'react';
import { Route } from 'react-router-dom';
import { AsDirectorsList } from '../data/AsDirectors';
import AsDirector from './AsDirector';
import AsDirectors from './AsDirectors';

const AsDirectorsContainer = (props) => {

    let movieUrl = AsDirectorsList.map((movie) => {
        return (
            <Route path={`/asdirectors/${movie.url}`} render={() => <AsDirector name={movie.name} details={movie.description} image={movie.profileImg} />} />
        )
    })

    return (
        <React.Fragment>
            <Route exact path="/asdirectors" render={() => <AsDirectors title={props.title} />} />
            {movieUrl}
        </React.Fragment>

    )
}

export default AsDirectorsContainer;
