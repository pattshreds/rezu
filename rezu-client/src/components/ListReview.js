import React, {useState, useEffect} from 'react'

const ListReview = () => {

  const [reviews, setReviews] = useState([])

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
        <div>
          <h3>
            {review.product_name}
            <small class="text-muted">{review.username}</small>
          </h3> <br />
          <img height="150em" src={review.product_image} alt="product" /> <br />
          <p className="userreview">
            {review.review}
          </p>
          <br /><br />
        </div>
      ))}
    </div>
  )
}

export default ListReview
