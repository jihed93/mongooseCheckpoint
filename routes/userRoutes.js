const userController = require("../controllers/userController")

const Router=require("express").Router()
Router.get("/users",userController.getUsers)
Router.get("/byname",userController.getbyName)
Router.get("/byid",userController.getById)
Router.get("/one",userController.getOne)
Router.post('/addUser',userController.addUser)
Router.post('/addUsers',userController.addUsers)
/*Router.post('/updateUser',userController.updateUser)
Router.post('/deleteUser',userController.deleteUser)*/
module.exports = Router