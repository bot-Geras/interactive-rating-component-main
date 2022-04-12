let ourFormBtn = document.getElementById("Form-Btn")

ourFormBtn.addEventListener("submit", function (event) {
    event.preventDefault()
    let ourFormData = new FormData(event.target)

    let firstRate = ourFormData.get("firstRate")

    console.log(firstRate)

    // let updatedHtmlRating = `
    //     <img src="images/illustration-thank-you.svg" alt="" class="star-image" />
        
    //     <h1>Thank you!</h1>

    //     <p>
    //     We appreciate you taking the time to give a rating. If you ever need more support, 
    //     don't hesitate to get in touch!
    //     </p>

    // `

    // let ourRateDesc = document.getElementById("Rate-Desc")

    // ourRateDesc.innerHTML = updatedHtmlRating
})