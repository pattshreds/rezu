import React, {useState} from 'react'

const EditReview = ({reviews}) => {

  const [username, setUsername] = useState(reviews.username)
  const [product_name, setProduct_name] = useState(reviews.product_name)
  const [product_image, setProduct_image] = useState(reviews.product_image)
  const [review, setReview] = useState(reviews.review)

  const updateRevs = async e => {
    e.preventDefault()
    try {
      const body = {username, product_name, product_image, review}
      const response = await fetch(`http://localhost:3000/reviews/    ${reviews.review_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
        console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  return(
    <>
      <details>
        <summary>Edit Review</summary>
          Username: <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
          <br />
          Product Name: <input type="text" className="form-control" value={product_name} />
          <br />
          Product Image: <input type="text" className="form-control" value={product_image} />
          <br />
          Review: <textarea type="text" className="form-control" value={review}></textarea>
          <br />
          <button type="button" class="btn btn-warning" onClick = {e => updateRevs(e)}>
            Edit
          </button>
      </details>
    </>
  )
}

export default EditReview
