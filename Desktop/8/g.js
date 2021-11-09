console.log("Working")
fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        console.log(data[0].id)
        const id = document.createElement("div")
        id.textContent=data[0].id
        const image = document.createElement("img")
        image.src = data[0].url
        document.querySelector(".container").appendChild(image)
        document.querySelector(".container").appendChild(id)
        
    });