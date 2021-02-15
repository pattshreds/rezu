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

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Share your experience!</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

      {/*
      =====
      Form
      =====
        */}

        <div class="modal-body">
              <form onSubmit={onSubmitForm}>
                Username: <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                Product Name: <input type="text" value={product_name} onChange={e => setProduct_name(e.target.value)} />
                <br />
                Product Image URL: <input type="text" value={product_image} onChange={e => setProduct_image(e.target.value)} />
                <br />
                Review: <textarea value={review} onChange={e => setReview(e.target.value)}></textarea>
                <br />
                <button class="btn btn-info">Submit</button>
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
