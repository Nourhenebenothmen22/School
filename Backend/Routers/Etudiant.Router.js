const EtudiantController=require('../Controllers/Etudiant.controller')
const route=require('express').Router()
route.post('/add',EtudiantController.createEtudiant)
route.get('/get/:id',EtudiantController.getByidetudiant)
route.get('/get',EtudiantController.getAlletudiant)
route.put('/update/:id',EtudiantController.updateEtudiant)
route.delete('/delete/:id',EtudiantController.deleteEudiant)
module.exports=route