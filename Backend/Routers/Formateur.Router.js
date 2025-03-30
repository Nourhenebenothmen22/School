const FormateurController=require('../Controllers/Formateur.controller')
const route=require('express').Router()
route.post('/add',FormateurController.createFormateur)
route.get('/get',FormateurController.getAllFormateur)
route.get('/get/:id',FormateurController.getByidFormateur)
route.put('/update/:id',FormateurController.updateFormateur)
route.delete('/delete/:id',FormateurController.deleteFormateur)
module.exports=route