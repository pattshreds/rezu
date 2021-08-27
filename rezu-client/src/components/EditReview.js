import React, { useState } from 'react';

const EditReview = ({ review }) => {
    const [username, setUsername] = useState(review.username);
    const [product_name, setProductname] = useState(review.product_name);
    const [product_image, setProductimage] = useState(review.product_image);
    const [rev, setRev] = useState(review.review);

    const updatedRev = async (id) => {
        const body = { username, product_name, product_image, rev };
        await fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body),
        });
        window.location = '/';
    };

    return (
        <>
            <details>
                <summary>Edit Review</summary>
                Username:{' '}
                <input
                    type='text'
                    className='form-control'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <br />
                Product Name:{' '}
                <input
                    type='text'
                    className='form-control'
                    value={product_name}
                    onChange={(event) => setProductname(event.target.value)}
                />
                <br />
                Product Image:{' '}
                <input
                    type='text'
                    className='form-control'
                    value={product_image}
                    onChange={(event) => setProductimage(event.target.value)}
                />
                <br />
                Review:{' '}
                <textarea
                    type='text'
                    className='form-control'
                    value={rev}
                    onChange={(event) => setRev(event.target.value)}
                ></textarea>
                <br />
                <button
                    type='button'
                    className='btn btn-warning'
                    onClick={() => updatedRev(review.review_id)}
                >
                    Edit
                </button>
            </details>
        </>
    );
};

export default EditReview;
