import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const { loading, planets } = store; // Destructure loading from store

    return (
        <div>
            <h2 className="text-start mx-auto w-75 mb-4 mt-5">Planets</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="mx-auto w-75" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {planets.map(planet => (


                        <li key={planet.uid}>
                            <div className="card bg-dark" style={{ width: '18rem', marginRight: '2rem' }}>
                                <img src="https://static.wikia.nocookie.net/starwars/images/7/72/Teth-TVE.png/revision/latest?cb=20190423045047" className="card-img-top" alt="star wars item" />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.result.properties.name}</h5>
                                    <p className="card-text">climate: {planet.result.properties.climate}</p>
                                    <p className="card-text">terrain: {planet.result.properties.terrain}</p>
                                    <p className="card-text">orbital period: {planet.result.properties.orbital_period}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>


                    ))}
                </ul>
            )}
        </div>
    )
}