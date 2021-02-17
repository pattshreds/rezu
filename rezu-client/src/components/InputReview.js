import React, {useState} from 'react'

const InputReview = () => {

const [username, setUsername] = useState("")
const [product_name, setProduct_name] = useState("")
const [product_image, setProduct_image] = useState("")
const [review, setReview] = useState("")

const onSubmitForm = async (e) => {
  e.preventDefault()
  try {
    const body = {username, product_name, product_image, review}
    const response = await fetch("http://localhost:3000/reviews", {
      method: "POST",
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

    {/*
    ======
    Modal
    ======
      */}

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Share your experience!</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

      {/*
      =====
      Form
      =====
        */}

        <div className="modal-body">
              <form onSubmit={onSubmitForm}>
                Username: <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                Product Name: <input type="text" className="form-control" value={product_name} onChange={e => setProduct_name(e.target.value)} />
                <br />
                Product Image URL: <input type="text" className="form-control" value={product_image} onChange={e => setProduct_image(e.target.value)} />
                <br />
                Review: <textarea value={review} className="form-control" onChange={e => setReview(e.target.value)}></textarea>
                <br />
                <button className="btn btn-info">Submit</button>
              </form>

            </div>

          </div>
        </div>
        </div>

      <hr />

    </>
  )
}

export default InputReview
