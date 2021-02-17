import React, {useState, useEffect} from 'react'
import EditReview from "./EditReview"


const ListReview = () => {

  const [reviews, setReviews] = useState([])

  const deleteReview = async (id) => {
    try {
      const deleteReview = await fetch(`http://localhost:3000/reviews/${id}`, {method: "DELETE"})
        setReviews(reviews.filter(review => review.review_id !== id))
    } catch (err) {
      console.error(err.message);
    }
  }

  const getRevs = async() => {
    try {
      const response = await fetch("http://localhost:3000/reviews")
      const jsonData = await response.json()
      setReviews(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getRevs()
  }, [])

  return(
    <div className="listReview">

      {reviews.map(review => (
        <div key={review.review_id}>
          <h3>
            {review.product_name}
            <small className="text-muted">{review.username}</small>
          </h3> <br />
          <img height="150em" src={review.product_image} alt="product" /> <br />
          <p className="userreview">
            {review.review}
          </p>
          <EditReview reviews={reviews} />
          <button className="btn btn-danger" onClick={() => deleteReview(review.review_id)}> Delete this review </button>
          <br /><br />

        </div>
      ))}
    </div>
  )
}

export default ListReview
