const complimentBtn = document.getElementById("complimentButton")
const inputBtn = document.getElementById('inputBtn')

const complimentCallback = ({ data: fortune }) => input.value
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            // console.log(data)
            alert(data.fortune);
    });
};

const addCompliment = (body) =>{
    axios.post(`http://localhost:4000/api/compliment/:id}`,body)
        .then(console.log(createFortune))   // kept going in circles
        // .catch(errCallback)
}

const deleteCompliment = () => {
    axios.delete(`http://localhost:4000/api/compliment/${id}`).then(complimentCallback).catch(errCallback)
}


complimentBtn.addEventListener('click', getCompliment)
inputBtn.addEventListener('click', addCompliment)

function createFortune(fortune) {
    const cookieCard = document.createElement('div')
    cookieCard.classList.add('cookie-card')

    cookieCard.innerHTML = `
    <p class="fortune-title">${body.fortune}</p>
    
    <button onclick="deleteMovie(${body.id})">delete</button>
    `


    moviesContainer.appendChild(cookieCard)
}

const displayCompliment = () =>{
    console.log(fortuneDB)
}