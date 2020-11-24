import React from 'react';
import {teams} from '../data'

const Team = () => {
    return (
        <article className="team">
            <div className="team-heading">
                <h2>Meet The Team</h2>
                <div className="underline"></div>
            </div>
            {
                teams.map((team) => {
                    const { id, image, name, info, position } = team;
                    return (
                        <div id={id} className="team-member">
                            <div className="image-div">
                            <img src={image} alt={name} className="team-pic" />
                            </div>
                            <div className="team-info">
                    <h3 className="header-team">{name}</h3>
                    <h5 className="team-position">{position}</h5>
                    <p className="team-info">{info}</p>
                            </div>
                        </div>
                    )
                })
            }
        </article>
    )
}

export default Team;