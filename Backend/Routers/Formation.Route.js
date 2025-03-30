const formationController=require('../Controllers/Formation.controller')
const route=require('express').Router()
route.post('/add',formationController.createFormation)
route.get('/get',formationController.getAllFormations)
route.get('/get/:id',formationController.getFormationById)
route.delete('/delete/:id',formationController.deleteFormation)
route.put('/update/:id',formationController.updateFormation)
module.exports=route