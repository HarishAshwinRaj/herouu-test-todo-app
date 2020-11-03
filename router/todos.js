const express = require("express");
const router = express.Router();
const todosModel = require('../database/todos_db')



router.get("/todos", (req, res) => {
    console.log("GET TODOS");
    todosModel.find({}).then(d => res.send(d))

});

router.post("/todos", (req, res) => {
    console.log(req.body, "POST TODOS");
    const todos = new todosModel({
        ...req.body
    })
    todos.save()
        .then(d => {
            res.send({
                hello: "post"
            });
        })
        .catch(err => console.log(err, "error in post todos"))
});

router.delete("/todos/:id", (req, res) => {
    
    console.log("DELETE TODOS", req.params.id)
    todosModel.deleteOne({_id:req.params.id}).then((d)=>{console.log("removesuccess");
    res.send({status:"DELETE_SUCCESS"})})
})

module.exports = router;
