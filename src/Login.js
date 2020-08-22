import React, { useState } from 'react';
import './Login.css';
import {Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

function Login() {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); //Stops page from refreshing

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/');
    })
    .catch(e => alert(e.message))
  };

    const register = (event) => {
      event.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
          history.push('/');
      })
      .catch((e) => alert(e.message));

  };

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='login'>
          <Link to='/'>
            <img className='login__logo' 
            src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScJgDNxKxF5MgcdWieiACt-mgVY5sQ5v24AFYVWHNU18-Yp0hr-Oa--rH-UWDdV9sd-zZgWXRcQiYFPnESiJeVyICGUIOW0zSYaA&usqp=CAU&ec=45690273'alt=''/>
          </Link>

          <div className='login__container'>
              
              <form>
              <h5>UserName</h5>
                  <input value={username} onChange = {event => setUserName(event.target.value)} type='username' placeholder='User Name'></input>
                  <h5>E-mail</h5>
                  <input value={email} onChange = {event => setEmail(event.target.value)} type='email' placeholder='E-mail'></input>
                  <h5>Password</h5>
                  <input value={password} onChange={event => setPassword(event.target.value)} type='password' placeholder='Password'></input>
                  <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
              </form>

              <p>By sighing-in you agree to the Condition of Use & sale. Please
                  see our Privacy Notice and our Cookies and our internet-Based Ads
                  Notice.
              </p>
              <button onClick={register} className='login__createButton'>Create your Account</button>
          </div>
        </div>
       
      </IonContent>
    </IonPage>
  
  );
}

export default Login


