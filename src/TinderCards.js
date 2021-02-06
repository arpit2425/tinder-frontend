import React,{useState} from 'react'
import './tinderCards.css';
import TinderCard from 'react-tinder-card';
function TinderCards() {
const [Person, setPerson] = useState([
  {
    name: "Alie",
    url:"https://images.pexels.com/photos/6677447/pexels-photo-6677447.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
   {
    name: "Stephen",
    url:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  },

])
  const swiped = (direction, name) => {
    
  }
  const outOfFrame = (name) => {
    
  }
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {
          Person.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={()=>outOfFrame(person.name)}
            >
              <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                <h3>{person.name }</h3>
              </div>
              

        </TinderCard>
            
          ))
        }
       

      </div>
    </div>
  )
}

export default TinderCards
