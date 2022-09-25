
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import About from './About/About'
import Stats from './Stats/Stats'

import './PokemonDetail.css'


const pageUrl =  window.location.href;
const id = pageUrl.split("/")[pageUrl.split("/").length - 1];

const PokemonDetail = () => {
    
    const [pokemon, setPokemon] = useState([]);



    useEffect(() => {
        const fetchPokemon = async () => {

            const promiseArr = [];
            promiseArr.push(
                (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
              );
            const resolvedData = await Promise.all(promiseArr);
    
            setPokemon(resolvedData);
    
            
        }
        fetchPokemon()
    }, [])

  

    console.log(pokemon);
    
    return (
        <>
        <div className="container">
            <div id="go-back" className="row ">
                <div className="col-12 d-flex justify-content-center mb-4">
                <Button href="/">Go back</Button> 
                </div>
                <hr className="mb-4"></hr>
            </div>
        
        
 
              
            {pokemon.map(item => (
                
         <>
                <div  id="poke-title" className="row " key={item.id}>  
                    <div className="col-12">
                        <h2 className = "poke-name h1 text-capitalize mb-4" >{item.name}</h2>
                    </div>
                </div>
                <div id="poke-card" className="row" key={item.id}>
                    <div className="col-md-4">
                    
                    <div className="poke-front-img pb-5 mb-4">
                        <img class="w-100" src={item.sprites.other.home.front_default} alt={item.name} />
                    </div>

                    </div>
                    <div className="col-md-8 ps-md-5">
                        <div className="poke-info">
                            <About pokemon={pokemon} />    
                            <Stats pokemon={pokemon} />                            
                        </div>
                    </div>
                </div>
                </>
            ))}
               
            </div>
      
        </>
    )
}


export default PokemonDetail
