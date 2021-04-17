import React,{useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople]=useState([]);
    //const people =[];
   // people.push('akshit','gautam');
   // OR
   // setPeople([...people,'akshit','gautam'])
   useEffect(() =>{
       const unsubscribe =database.collection('people').onSnapshot((snapshot)=>{
           setPeople(snapshot.docs.map(doc=> doc.data()));
       })
       return ()=>{
           unsubscribe();
       }
   },[]);
    return (
        <div>
        
         <div class="card_container">
        {people.map(person =>(
            <TinderCard className="swipe" 
                key={person.name}>
                <div
                style={{backgroundImage: `url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
         </div>
        </div>
    )
}

export default TinderCards;