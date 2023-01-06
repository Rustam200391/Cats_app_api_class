import React, { useState, useEffect } from 'react'

// const url = 'https://cataas.com/api/cats';
// это api выводящее изображения не работает https://cataas.com/cat/cute

const Caats = () => {
    const [cats, setCats] = useState([])
    const fetchUsers = async () => {
        const response = await fetch(process.env.REACT_APP_BASE_URL)
        const cats = await response.json()
        setCats(cats)
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <h1><i>Cat's list</i></h1>
            <ul className="list">
                {cats.map((user) => {
                    const { _id } = user
                    return (
                        <li key={_id}>
                            <h2 className="username">{_id}</h2>
                            <img src={_id} alt="кошки" />
                            {/* <a href={_id}>Cats profile</a> */}
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default Caats