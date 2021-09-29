import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword
} from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

const auth = firebase.auth()

function App() {
  const [authenticatedUser, isAuthenticating, hasAuthenticationError] =
    useAuthState(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth)

  useEffect(() => {
    console.log('authenticatedUser', authenticatedUser)
  }, [authenticatedUser])

  const signUp = () => {
    if (!email.length || !password.length) return
    createUserWithEmailAndPassword(email, password)
  }

  const signIn = () => {
    if (!email.length || !password.length) return
    setIsSigningIn(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
    setIsSigningIn(false)
  }

  const signOut = () => {
    setEmail('')
    setPassword('')
    firebase.auth().signOut()
  }

  if (hasAuthenticationError) {
    return (
      <div>
        <h1>Error: {hasAuthenticationError.message}</h1>
      </div>
    )
  }

  if (isAuthenticating || isSigningIn) {
    return (
      <div>
        <h1>Currently authenticating...</h1>
      </div>
    )
  }

  if (!authenticatedUser) {
    return (
      <div>
        <div>
          <label htmlFor='email-address'>Email Address</label>
          <input
            type='text'
            id='email-address'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <button onClick={signIn}>Sign In Now</button>
        <button onClick={signUp}>Sign Up Now</button>
      </div>
    )
  }

  return (
    <div className='App'>
      <h1>hello, {authenticatedUser.email}</h1>
      <button onClick={signOut}>Sign Out</button>
      {/* insert authenticated related content here */}
    </div>
  )
}

export default App
