import React from 'react'
import './Home.css';
//import Product from './Product';
import {Link } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';


function Home() {

  const start = ( event) => {
    event.preventDefault();
  }
  return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>Home Page</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent className='home'>
     <div className='home'>
           <img className='home__image' 
           src='https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'alt=''></img>
            <Link to='/login'>
            <IonButton className='home__button' onClick={start} type='string' expand='full'>Start</IonButton>
            </Link>
                

        </div>
     </IonContent>
   </IonPage>
   
  );
}

export default Home
