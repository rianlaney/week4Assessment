const complimentBtn = document.getElementById("complimentButton")
const inputBtn = document.getElementById("intBtn")
const input = document.querySelector('input')
const container1 = document.getElementById('container1') 

// const complimentCallback = ({ data: fortune }) => input.value
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log(data)
            alert(data.fortune);
    });
};

const addCompliment = (event) =>{
    event.preventDefault() //submiting form refreshes the page, this stops this
    let body = {
        fortune: input.value
    }
    axios.post(`http://localhost:4000/api/compliment/`,body)
        .then(res=> {
            // console.log(res.data)
            container1.innerHTML=''
            for(let i=0; i<res.data.length; i++){
                createFortune(res.data[i])}
            })
        .catch(errCallback)
}

const deleteCompliment = (id) => {
    axios.delete(`http://localhost:4000/api/compliment/${id}`)
    .then(res=> {
        container1.innerHTML=''
        console.log(res.data)
        for(let i=0; i<res.data.length; i++){
            createFortune(res.data[i])}
        })
    .catch(errCallback)}


complimentBtn.addEventListener('click', getCompliment)
inputBtn.addEventListener('click', addCompliment)


function createFortune(fortune) {
    console.log(fortune)
    const cookieCard = document.createElement('div')
    cookieCard.classList.add('cookie-card')

    cookieCard.innerHTML = `
    <p class="fortune-title">${fortune.fortune}</p>
    
    <button onclick="deleteCompliment(${fortune.id})">delete</button>
    `


    container1.appendChild(cookieCard)
}

const displayCompliment = () =>{
    console.log(fortuneDB)
}