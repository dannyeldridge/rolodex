import React, { useContext } from 'react'
import { AuthContext } from './auth'

const Test = () => {

    const {currentUser} = useContext(AuthContext);
    console.log('user', currentUser);
    return null
}
export default Test;
