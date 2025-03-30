const courController=require('../Controllers/Cour.controller')
const route=require('express').Router()
route.post('/add',courController.createCour)
route.get('/get/:id',courController.getByidCours)
route.get('/get',courController.getAllCours)
route.put('/update/:id',courController.updateCours)
route.delete('/delete/:id',courController.deleteCour)
module.exports=route