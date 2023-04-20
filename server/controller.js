let fortuneDB = require('./db.json')
let fortuneID = 6


module.exports = {

    
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortuneDB.length);
        // console.log(randomIndex)
        let randomCompliment = fortuneDB[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    addCompliment: (req, res)=>{
        console.log('this is working')
        const { body } = req
        body.id = fortuneID
        fortuneDB.push(body)
        res.status(200).send(fortuneDB)
        fortuneID++
        console.log(fortuneDB)

    },
    
    deleteCompliment: (req, res)=>{
        let { id } = req.params
        console.log(id)
        let index = fortuneDB.findIndex((fortune => fortune.id === +id))
        fortuneDB.splice(index,1)
        res.status(200).send(fortuneDB)
    },

    

}