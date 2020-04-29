import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './axiosWithAuth'
import Friend from './Friend'

const FriendsList = () => {
    const [friends, setFriends] = useState()

    useEffect(() => {
        axiosWithAuth
            .get('http://localhost:5000/api/friends')
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>Hello</div>
    )
}

export default FriendsList;
