import React, { Fragment } from 'react'
import app from './firebase'

const Home = () => {
    return (
        <Fragment>
            <h1>Home</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </Fragment>
    )
}

export default Home;