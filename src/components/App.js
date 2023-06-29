import React from 'react';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Card from './Card.js';
import data from '../data.js'

function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        key= {card.id}
        item={card}
      />
    )
  })

  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>

  );
}

export default App;
