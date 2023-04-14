let fortuneDB = require('./db.json')
let fortuneID = 6


module.exports = {

    // getCompliment: (req, res) => {
    //     const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
    //     // choose random compliment
    //     let randomIndex = Math.floor(Math.random() * compliments.length);
    //     let randomCompliment = compliments[randomIndex];
      
    //     res.status(200).send(randomCompliment);
    // },
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortuneDB.length);
        // console.log(randomIndex)
        let randomCompliment = fortuneDB[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    addCompliment: (req, res)=>{
        const { body } = req
        body.id = fortuneID
        fortuneDB.push(body)
        res.status(200).send(fortuneDB)
        fortuneID++
        console.log(fortuneDB)

    },
    
    deleteCompliment: (req, res)=>{
        let { id } = req.params
        let index = fortuneDB.findIndex((fortune => fortune.id === +id))
        fortuneDB.splice(index,1)
        res.status(200).send(fortuneDB)
    },

    

}