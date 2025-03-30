const courModel = require('../Modules/Cour.model');

module.exports = {
  createCour: async (req, res) => {
    try {
      const cour = new courModel(req.body)
      await cour.save();

      res.status(201).json({ 
        success: true,
        message: 'Cours créé avec succès',
        data: cour,
      });
    } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Erreur lors de la création du cours :'+error,
          data: null,
        });
      }

     
    },
    deleteCour: async (req, res) => {
        try {
          const id = req.params.id; // Récupération de l'ID depuis req.params.id
          const deletedCour = await courModel.findByIdAndDelete(id);
    
          if (!deletedCour) {
            return res.status(404).json({
              success: false,
              message: 'Cours non trouvé',
              data: null,
            });
          }
    
          res.status(200).json({ // Utilisation du code 200 (OK)
            success: true,
            message: 'Cours supprimé avec succès',
            data: deletedCour,
          });
        } catch (error) {
          console.error('Erreur lors de la suppression du cours :', error); // Consignation de l'erreur
          res.status(500).json({ // Utilisation du code 500 (Internal Server Error)
            success: false,
            message: 'Erreur lors de la suppression du cours',
            error: error.message, // Inclure le message d'erreur
            data: null,
          });
        }
      },
    getAllCours: async (req, res) => {
        try {
          const Cours = await courModel.find();
    
          res.status(200).json({
            success: true,
            message: 'Tous les cours sont listés',
            data: Cours,
          });
        } catch (error) {
          console.error('Erreur lors de la récupération des cours :', error); 
    
          res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des cours',
            error: error.message, // Envoie le message d'erreur
            data: null,
          });
        }
      },
      getByidCours:async(req,res)=>{
        try {
            const id=req.params.id
            const getAll=await courModel.findById(id)
            if (!getAll) {
                return res.status(404).json({ // 404 Not Found si le cours n'existe pas
                  success: false,
                  message: 'Cours non trouvé',
                  data: null,
                });
              }
            res.status(200).json({
                success:true,
                message:' Cours trouvé',
                data:getAll
            })
        } catch (error) {
            console.error('Erreur lors de la récupération du cours :', error); // Consignation de l'erreur
            res.status(500).json({ // 500 Internal Server Error pour les erreurs serveur
            success: false,
            message: 'Erreur lors de la récupération du cours',
            error: error.message, // Inclure le message d'erreur
            data: null,
      });
            
        }
      },
      updateCours:async(req,res)=>{
        try {
            const id=req.params.id
            const update=await courModel.findByIdAndUpdate(id,req.body,{new:true})
            if (!update) {
                return res.status(404).json({
                  success: false,
                  message: 'Cours non trouvé',
                  data: null,
                });
              }
            res.status(200).json({
                success:true,
                message:'les sont mise a jour',
                data:update
            })
        } catch (error) {
            console.error('Erreur lors de la mise à jour du cours :', error);
            res.status(500).json({
              success: false,
              message: 'Erreur lors de la mise à jour du cours',
              error: error.message,
              data: null,
            });
            
        }
      }
}