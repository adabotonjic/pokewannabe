import React from 'react'

const Sprite = ({pokemon}) => {        
    return (
            <>
               
                {pokemon.map(poke => (
  
                    <div key={poke.id} className="about-info">
                        <h2 >Details about <span className="text-capitalize">{poke.name}</span></h2>
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
      
            </>
    )
}


export default Sprite
