// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.querySelector("#modal");
errorDiv.className = "hidden";
const errorMessageP = document.querySelector("#modal-message");

const likeSpans = document.querySelectorAll(".like-glyph")
likeSpans.forEach((span) => {
  span.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      if (span.textContent === EMPTY_HEART) {
        span.textContent = FULL_HEART;
        span.className = "activated-heart";
      } else if (span.textContent === FULL_HEART) {
        span.textContent = EMPTY_HEART;
        span.className = "";
      }
    })
    .catch(() => {
      errorDiv.className = "";
      errorMessageP.textContent = "Random server error. Try again.";
      setTimeout(() => {
        errorDiv.className = "hidden"
      }, 300);
    })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
