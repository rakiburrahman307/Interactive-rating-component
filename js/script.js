const ratingContainer = document.querySelector(".rating-container");
const containerContents = document.querySelector(".container-contents");
const submitContainer = document.querySelector(".container-submitted");

["1", "2", "3", "4", "5"].forEach((item) => {
  const ratingHTML = `
  <input type="radio" id="option${item}" name="rating" value="${item}">
  <label for="option${item}">${item}</label>
  `;
  ratingContainer.innerHTML += ratingHTML;
});

const handleSubmit = () => {
  const selectedRating = document.querySelector(
    "input[name=rating]:checked"
  )?.value;

  if (selectedRating) {
    const submitContent = `
      <div class="feedback-container">
        <img src="/images/illustration-thank-you.svg" alt="illustration-thank-you">
        <div class="feedback-para-container">
          <p>You selected ${selectedRating} out of 5</p>
        </div>
        <div class="feedback-content">
          <h2 class="feedback-heading">Thank You</h2>
          <p class="feedback-para">Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      </div>`;

    submitContainer.innerHTML = submitContent;
    containerContents.style.display = "none";
    submitContainer.style.display = "block";
  } else {
    containerContents.style.display = "black";
    alert("Please select a rating");
  }
};
