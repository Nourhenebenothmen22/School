const Etudiantmodel=require('../Modules/Etudiant.model')
module.exports={
    createEtudiant:async(req,res)=>{
        try {
            const Etudiant = new Etudiantmodel(req.body); 
            await Etudiant.save();
            res.status(201).json({ 
            success: true,
            message: 'Étudiant créé avec succès',
            data: Etudiant,
      });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'Erreur lors de la création'+error,
                data:null
            })
            
        }
    },
    getAlletudiant:async(req,res)=>{
        try {
            const getAll=await Etudiantmodel.find()
            res.status(200).json({
            success: true,
            message: 'Étudiants listés avec succès',
            data:getAll,

            })
            
        } catch (error) {
            res.status(400).json({
            success:false,
            message: 'Erreur lors de la récupération des étudiants'+error,
            data:null,
    
            })
            
        }
    },
    getByidetudiant:async(req,res)=>{
            try {
                const id=req.params.id
                const getId=await Etudiantmodel.findById(id)
                if (!getId) {
                    return res.status(404).json({ // 404 Not Found si le cours n'existe pas
                      success: false,
                      message: 'Etudiant non trouvé',
                      data: null,
                    });
                  }
                res.status(200).json({
                    success:true,
                    message:'Etudiant trouvé',
                    data:getId
                })
            } catch (error) {
                console.error('Erreur lors de la récupération du cours :', error); // Consignation de l'erreur
                res.status(500).json({ // 500 Internal Server Error pour les erreurs serveur
                success: false,
                message: 'Erreur lors de la récupération des etudiants',
                error: error.message, // Inclure le message d'erreur
                data: null,
          });
                
            }
          },
          updateEtudiant: async (req, res) => {
            try {
              const id = req.params.id;
              const update = await Etudiantmodel.findByIdAndUpdate(id, req.body, {
                new: true,
                
              });
        
              if (!update) {
                return res.status(404).json({
                  success: false,
                  message: 'Étudiant non trouvé',
                  data: null,
                });
              }
        
              res.status(200).json({
                success: true,
                message: 'Étudiant mis à jour avec succès',
                data: update,
              });
            } catch (error) {
              console.error('Erreur lors de la mise à jour de l\'étudiant :', error);
              res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour de l\'étudiant',
                error: error.message,
                data: null,
              });
            }
        },
        deleteEudiant: async (req, res) => {
            try {
              const id = req.params.id;
              const deletEtud = await Etudiantmodel.findByIdAndDelete(id);
        
              if (!deletEtud) {
                return res.status(404).json({
                  success: false,
                  message: 'Étudiant non trouvé', // Suppression de + error
                  data: null,
                });
              }
        
              res.status(200).json({
                success: true,
                message: 'Étudiant supprimé avec succès',
                data: deletEtud,
              });
            } catch (error) {
              console.error('Erreur lors de la suppression de l\'étudiant :', error);
              res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression de l\'étudiant',
                error: error.message,
                data: null,
              });
            }
          },
    
}