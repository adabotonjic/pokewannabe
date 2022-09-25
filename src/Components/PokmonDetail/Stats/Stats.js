import React from 'react'
import './Stats.css'


const Stats = ({pokemon}) => {

    return (
        <div className="stats">

            {pokemon.map(poke => (
                <div key={poke.id} className="stats-container">
                    <h3 className='mb-4'><span className="text-capitalize">{poke.name}</span> stats</h3>
                    <table className="table table-dark table-bordered">
                          <thead>
                            <tr>
                            <th scope="col">Stat name</th>
                            <th scope="col">Base stat</th>
                            </tr>
                        </thead>
                        <tbody>
                    {poke.stats.map((stat, index) => (
                   
                        
                            <tr key = {index} className="detail-info">
                                    
                                    <td>{stat.stat.name}</td>
                                    <td>{stat.base_stat}</td>
                            
        
                            </tr>
                            
                    
                    ))}
                    </tbody>
                    </table>
                </div>
            ))}
     
        </div>
    )
}

export default Stats
