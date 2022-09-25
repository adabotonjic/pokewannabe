import React, { useState, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import './PokemonList.css'

const fetchPokemonData = async (len) => {
  const promiseArr = [];
  for (let i = len; i < len + 50; i++) {
    promiseArr.push(
      (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
    );
  }
  const resolvedData = await Promise.all(promiseArr);
  return resolvedData.map((item) => {
    return {
      id: item.id,
      name: item.name,
      sprite: item.sprites.other.home.front_default,
      type: item.types[0].type.name
    };
  });
};

const PokemonList = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);


  const [searchInput, setSearchInput] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMessage("Loading...");
      const resp = await fetchPokemonData(1);
      setData(resp);
      setLoading(false);
    };
    fetchData();
  }, []);


  window.onscroll = () => {
    if (data.length > 500) {
      setMessage("Reached end of the list!!");
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setMessage("Loading...");
      setLoading(true);
      fetchPokemonData(data.length).then((newPokemons) => {
        setData([...data, ...newPokemons]);
        setLoading(false);
      });
    }
  };

  return (
    <div className="PokemonList">
      

      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center px-1 pb-0 mb-4">
            <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback">
                      <RiSearch2Line className="search-icon" />
                  </span>
                    <input type="text" className="form-control"
                    onChange={event => {setSearchInput(event.target.value)}}
                    placeholder="Search for Pokemon" />
                </div>
            </div>
            <hr className="mb-4"></hr>



          {data.filter((pokemon) => {
              if (searchInput === "") {
                  return pokemon
              } else if (pokemon.name.toLowerCase().includes(searchInput.toLowerCase())){
                  return pokemon
              } 
              return false;
          }).map((pokemon, index) => (
          
            <div className="col-sm-6 col-md-4 col-xl-3">

                
                  <div className="card text-center py-3 py-lg-4 px-3 mb-4" key={"num" + index}  >
                    <a className="text-decoration-none" href={'/pokemon/' + pokemon.id} title={pokemon.name}>
                        <p className="card-id mb-2">#{pokemon.id}</p>
                        <img className="card-img mb-2" src={pokemon.sprite} width={120} height={120} alt={pokemon.name} />
                        <h2 className="card-name text-capitalize mb-0"> {pokemon.name} </h2>
                      </a>
                  </div>
          
               
       
            </div>

        )

        )}
        {isLoading && <p className="h1">{message}</p>}
        </div>
    </div>
    </div>
   
  );
}

export default PokemonList