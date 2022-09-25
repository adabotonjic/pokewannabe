import React from 'react'

const About = ({pokemon}) => {        
    return (
        <div className="poke-about">

            <div className="poke-about-info-container">
               
                {pokemon.map((poke, index) => (
  
                    <div key={index} className="about-info mb-5">
                        <h3>Details about <span className="text-capitalize">{poke.name}</span></h3>
                        <p className ="type">Type: {poke.types[0].type.name}</p>
                        <div className="info">
                            <p>Base Experience: {poke.base_experience}</p>
                        </div>
                        <div className="info">
                            <p>Height: {poke.height * 10} cm</p>
                            
                        </div>
                        <div className="info">
                            <p>Weight: {poke.weight / 10} kg</p>
                        </div>    
                        <div className="info">
                            <p>Abilities: {poke.abilities.map(ability => (
                                    <span key={ability.ability.name}>{ability.ability.name}, </span>
                                ))} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default About
