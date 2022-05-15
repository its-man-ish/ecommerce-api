const router = require("express").Router()

router.get("/users",(req,res)=>{
    res.send("Users")
})
router.post("/user",(req,res)=>{
    const name = req.body.name
    console.log(name)
    res.send(name)
})
module.exports = router