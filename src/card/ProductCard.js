import React, { useContext } from 'react';
import "./card.css"
import { CharacterContext } from '../context/characterContext';
import { Link } from 'react-router-dom';



export default function ProductCard() {


    const {onAdd, character} = useContext(CharacterContext)



    return (
    <div className='main'>
        <div className='product-card'>
            {character.map(character =>(
                <div className='card' key={character.id}>
                    <div>
                        <h1 className='anime-name'>{character.anime}</h1>
                        <h1 className='card-name'>{character.name}</h1>
                        <h1 className='height'>{character.height}</h1>
                        <h1 className='power'>{character.power}</h1>
                        {character.attributes.map(attributes =>(
                            <div>
                                <h1 className='attribute-name'>{attributes.name}:</h1>
                                <div className='item-btns'>
                                    {attributes.items.map(items=>(
                                        <div>
                                                <input 
                                                    value={items.value}
                                                    name={character.id + attributes.name} 
                                                    id={character.id + attributes.id + items.id}
                                                    type={"radio"}>
                                                </input>
                                                <label for={character.id + attributes.id + items.id}>
                                                    {items.value}
                                                </label>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                        <button onClick={() => onAdd(character)} className='add-btn'>ADD CHARACTER</button>
                    </div>
                    <img className='character-images' alt='character' src={`../images/${character.image}`} />
                </div>
            ))}
            
        </div>
        <div className='go-to-cart'><Link to="cart" >GO TO CART</Link></div>
    </div>
    );
}

