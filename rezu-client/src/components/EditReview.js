import React, {useState} from 'react'

  const EditReview = ({reviews}) => {

  const [username, setUsername] = useState(reviews.username)
  const [product_name, setProduct_name] = useState("")
  const [product_image, setProduct_image] = useState("")
  const [review, setReview] = useState("")

  const updatedRev = async (e) => {
    e.preventDefault()
    try {
      const body = {username, product_name, product_image, review}
      const response = await fetch(`http://localhost:3000/reviews/${reviews.review_id}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
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
          Product Name: <input type="text" className="form-control" value={product_name} onChange={e => setProduct_name(e.target.value)} />
          <br />
          Product Image: <input type="text" className="form-control" value={product_image} onChange={e => setProduct_image(e.target.value)} />
          <br />
          Review: <textarea type="text" className="form-control" value={review} onChange={e => setReview(e.target.value)}></textarea>
          <br />
          <button type="button" className="btn btn-warning" onClick = {e => updatedRev(e)}>
            Edit
          </button>
      </details>
    </>
  )
}

export default EditReview
