import React from 'react'
import PokemonList from '../../Components/PokemonList/PokemonList';
import PokemonDetail from '../../Components/PokmonDetail/PokemonDetail';
import {Routes, Route} from 'react-router-dom'

const Main = () => {
    return (
        <main class="main mb-5">
            <Routes>
                
                <Route path = '/' element={<PokemonList/>}/>
                <Route path = '/pokemon/:id' element={<PokemonDetail/>} />

            </Routes>
        </main>
    )

}
export default Main