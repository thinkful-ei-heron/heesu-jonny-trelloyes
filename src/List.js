import React from 'react';

import './App.css';

function List(props) {
    const header = props.header;
    const cards = props.cards;

    return (
        <section class="List">
            <header class="List-header">
                <h2>{header}</h2>
            </header>
            <div class="List-cards">
                {cards.map(card => (<Card header={card.header} desc={card.desc}/>))}
                <button type="button" class="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}

export default List;
