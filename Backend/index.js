const express = require("express");
const app = express();
const port = 3000;
const connectdb=require("./database")
connectdb()
app.use(express.json())
const userRoute=require("./Routers/User.Router")
app.use("/user",userRoute)
const adminRoute=require('./Routers/Admin.Router')
app.use("/admin",adminRoute)
const etudiantRoute=require('./Routers/Etudiant.Router')
app.use("/etudiant",etudiantRoute)
const formateurRoute=require('./Routers/Formateur.Router')
app.use("/formateur",formateurRoute)
const formationRoute=require('./Routers/Formation.Route')
app.use("/formation",formationRoute)
const courRoute=require('./Routers/Cour.Router')
app.use("/cour",courRoute)
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`); // Message de confirmation
  });