const FormateurModel=require('../Modules/Formateur.model')
module.exports={
    createFormateur:async(req,res)=>{
        try {
            const Formateur = new FormateurModel(req.body); 
            await Formateur.save();
            res.status(200).json({ 
            success: true,
            message: 'Formateur créé avec succès',
            data:Formateur,
      });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'Erreur lors de la création'+error,
                data:null
            })
            
        }
    },
    getAllFormateur:async(req,res)=>{
        try {
            const getAll=await FormateurModel.find()
            res.status(200).json({
            success: true,
            message: 'Formateurs listés avec succès',
            data:getAll,

            })
            
        } catch (error) {
            console.error('Erreur lors de la récupération du formateur :', error);
            res.status(500).json({
              success: false,
              message: 'Erreur lors de la récupération des formateurs',
              error: error.message,
              data: null,
            });
            
        }
    },
    getByidFormateur:async(req,res)=>{
            try {
                const id=req.params.id
                const getId=await FormateurModel.findById(id)
                if (!getId) {
                    return res.status(404).json({ // 404 Not Found si le cours n'existe pas
                      success: false,
                      message: 'Formateur non trouvé',
                      data: null,
                    });
                  }
                res.status(200).json({
                    success:true,
                    message:'Formateur trouvé',
                    data:getId
                })
            } catch (error) {
                console.error('Erreur lors de la récupération du formateur :', error); // Consignation de l'erreur
                res.status(500).json({ // 500 Internal Server Error pour les erreurs serveur
                success: false,
                message: 'Erreur lors de la récupération des formateurs',
                error: error.message, // Inclure le message d'erreur
                data: null,
          });
                
            }
          },
          updateFormateur: async (req, res) => {
            try {
              const id = req.params.id;
              const update = await FormateurModel.findByIdAndUpdate(id, req.body, {
                new: true,
                
              });
        
              if (!update) {
                return res.status(404).json({
                  success: false,
                  message: 'Formateur non trouvé',
                  data: null,
                });
              }
        
              res.status(200).json({
                success: true,
                message: 'Formateur mis à jour avec succès',
                data: update,
              });
            } catch (error) {
              console.error('Erreur lors de la mise à jour de formateur :', error);
              res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour de formateur',
                error: error.message,
                data: null,
              });
            }
        },
        deleteFormateur: async (req, res) => {
            try {
              const id = req.params.id;
              const deletForm = await FormateurModel.findByIdAndDelete(id);
              if (!deletForm) {
                return res.status(404).json({
                  success: false,
                  message: 'Formateur non trouvé',
                  data: null,
                });
              }
              res.status(200).json({
                success: true,
                message: 'Formateur supprimé',
                data: deletForm,
                
              }); 
            } catch (error) {
              console.error('Erreur lors de la suppression de formateur :', error);
              res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression de formateur',
                error: error.message,
                data: null,
              });
            }
          }
}