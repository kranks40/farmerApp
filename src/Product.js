import React from 'react'
import './Product.css';
import { IonContent, IonHeader,IonToolbar, IonPage, IonTitle } from '@ionic/react';

function Product({id, title, image, price}) {

    const addToBasket = () => {
        dispatchEvent({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };
    return (
    <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>Home Page</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent className='Product'>
     <div className='product'>
           <div className='product__info'>
           <p>{title}</p>
            <p className='product__price'>
                <small>XCD</small>
                <strong>{price}</strong>
            </p>

            </div>
            <img className='product__image' src={image} alt='' />
            <button onClick={addToBasket} className='product__button'>Add to Basket</button>
            </div>
        </IonContent>  
 </IonPage>
    );
                }

export default Product
