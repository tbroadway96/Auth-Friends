import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './axiosWithAuth'
import Friend from './Friend'
import AddFriend from './AddFriend'

const FriendsList = () => {
    const [friends, setFriends] = useState()

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div 
                className="list"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: '10px'
                }}
            >
                {friends && friends.map(friend => (
                    <Friend 
                        name={friend.name} 
                        age={friend.age} 
                        email={friend.email} 
                    />
                ))}
            </div>
            <AddFriend />
        </div>
    )
}

export default FriendsList;
