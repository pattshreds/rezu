import React, { useState } from 'react';

const EditReview = ({ reviews }) => {
    const [username, setUsername] = useState(reviews.username);
    const [product_name, setProductname] = useState(reviews.product_name);
    const [product_image, setProductimage] = useState(reviews.product_image);
    const [review, setReview] = useState(reviews.review);

    const updatedRev = async (id) => {
        const body = { username, product_name, product_image, review };
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
                    value={reviews.username}
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
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                ></textarea>
                <br />
                <button
                    type='button'
                    className='btn btn-warning'
                    onClick={() => updatedRev(reviews.review_id)}
                >
                    Edit
                </button>
            </details>
        </>
    );
};

export default EditReview;
