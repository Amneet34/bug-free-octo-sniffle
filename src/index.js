// Your code here
const characterBar = document.getElementById("character-bar")
const detailedInfo = document.getElementById("detailed-info")
const name = document.getElementById("name")
const image = document.getElementById("image")
const votes = document.getElementById("votes")
const votesForm = document.getElementById("votes-form")
const voteCount = document.getElementById("vote-count")
const resetBtn = document.getElementById("reset-btn")

votesForm.addEventListener("submit", (e) => {
    e.preventDefault()
    voteCount.innerText = parseInt(votesForm.votes.value) + parseInt(voteCount.innerText)
})

const renderPage = (dogs) => {
    name.textContent = dogs.name 
    image.src = dogs.image
    // votesForm.textContent = dogs.votes_form
    voteCount.textContent = dogs.votes
    votes.textContent = dogs.votes
    
    


}

const request = async () => {
    let req = await fetch("http://localhost:3000/characters")
    let res = await req.json()
    renderPage(res[0])
    res.forEach((dogs) => {
        const div = document.createElement("div")
        div.textContent = dogs.name
        
        

        
        characterBar.append(div)
        div.addEventListener("click", () => {
            voteCount.innerText = dogs.vote_count
            // votesForm.innerText = dogs.votes_form
            
            renderPage(dogs)

        })
    })
}
request()