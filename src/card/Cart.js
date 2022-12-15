import React, { useContext } from 'react';
import { CharacterContext } from '../context/characterContext';
import "./cart.css"
import { Link } from 'react-router-dom';

export default function Cart() {


    const {onAdd, onRemove, cartItems} = useContext(CharacterContext)

    return (
        <div className='main'>
            <div className="cart-container">
                {cartItems.length === 0 && <h5>EMPTY</h5>}
                {cartItems.map((character) =>(
                    <div key={character.id} className="cart-card">
                        <div className='cart-info'>
                            <h1 className='cart-name'>{character.name}</h1>
                            <h1 className='cart-power'>{character.power}</h1>
                            {character.attributes.map(attributes =>(
                                <div>
                                    <h1 className='attribute-name'>{attributes.name}:</h1>
                                    <div className='item-btns'>
                                        {attributes.items.map(items=>(
                                            <div className='attribute-btns'>
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
                        </div>
                        <div className='image-qty'>
                            <div className='plus-minus'>
                                <button className='cart-plus' onClick={()=> onAdd(character)}>+</button>
                                <h4 className='quantity'>{character.qty}</h4>
                                <button className='cart-minus' onClick={()=> onRemove(character)}>-</button>
                            </div>
                            <img className='cart-image' alt='cart' src={`../images/${character.image}`} />
                        </div>
                          
                    </div>
                ))}
            </div>
            <div className='go-to-card'><Link to="/" >GO TO CARD</Link></div>
        </div>
    );
}