import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({query}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
            setPosts(data)
        })
    }, [])

    const filteredPosts = posts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <hr />
            {filteredPosts.map((item) => (
                <React.Fragment key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <hr />
                </React.Fragment>
            ))}
        </div>
    )
}

export default Home