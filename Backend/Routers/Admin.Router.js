const AdminController = require('../Controllers/Admin.controller')
const route=require('express').Router()
route.post('/add',AdminController.createAdmin)
route.get('/get/:id',AdminController.getByidAdmin)
route.get('/get',AdminController.getAlladmin)
route.put('/update/:id',AdminController.updateAdmin)
route.delete('/delete/:id',AdminController.Deleteadmin)
module.exports=route
