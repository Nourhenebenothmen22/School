const courController=require('../Controllers/Cour.controller')
const upload=require('../middellware/upload')
const route=require('express').Router()
route.post('/add',upload.array('image'),courController.createCour)
route.get('/get/:id',courController.getByidCours)
route.get('/get',courController.getAllCours)
route.put('/update/:id',upload.array('image'),courController.updateCours)
route.delete('/delete/:id',courController.deleteCour)
module.exports=route