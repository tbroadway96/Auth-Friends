import React, { useState } from 'react'
import { axiosWithAuth } from './axiosWithAuth'

const AddFriend = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()

    const handleNameChange = (e) => {
        setName(e?.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e?.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e?.target.value)
    }

    const handleSubmit = () => {
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', {
                name: name,
                age: age,
                email: email
            })
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    }

    return (
        <>
            <h3>Add A Friend!</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type='text'
                    name='name'
                    onChange={handleNameChange} 
                />
                <label>Age: </label>
                <input 
                    type='text'
                    name='age'
                    onChange={handleAgeChange}
                />
                <label>Email: </label>
                <input 
                    type='text'
                    name='email'
                    onChange={handleEmailChange}
                />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddFriend;
