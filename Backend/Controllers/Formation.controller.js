const formationModel = require('../Modules/Formation.model');

module.exports = {
  createFormation: async (req, res) => {
    try {
      const formation = new formationModel(req.body);
      await formation.save();
      res.status(201).json({
        success: true,
        message: 'Formation créée avec succès',
        data: formation,
      });
    } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Erreur lors de la création'+error,
          data: null,
        });
      }
    },
  getAllFormations: async (req, res) => {
    try {
      const formations = await formationModel.find();
      res.status(200).json({
        success: true,
        message: 'Formations listées avec succès',
        data: formations,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des formations :', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des formations',
        error: error.message,
        data: null,
      });
    }
  },

  getFormationById: async (req, res) => {
    try {
      const formation = await formationModel.findById(req.params.id);
      if (!formation) {
        return res.status(404).json({
          success: false,
          message: 'Formation non trouvée',
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        message: 'Formation trouvée',
        data: formation,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération de la formation :', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération de la formation',
        error: error.message,
        data: null,
      });
    }
  },

  updateFormation: async (req, res) => {
    try {
      const formation = await formationModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!formation) {
        return res.status(404).json({
          success: false,
          message: 'Formation non trouvée',
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        message: 'Formation mise à jour avec succès',
        data: formation,
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la formation :', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour de la formation',
        error: error.message,
        data: null,
      });
    }
  },

  deleteFormation: async (req, res) => {
    try {
      const formation = await formationModel.findByIdAndDelete(req.params.id);
      if (!formation) {
        return res.status(404).json({
          success: false,
          message: 'Formation non trouvée',
          data: null,
        });
      }
      res.status(200).json({
        success:true,
        message: 'Formation supprimée',
        data: formation,

      }); 
    } catch (error) {
      console.error('Erreur lors de la suppression de la formation :', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la suppression de la formation',
        error: error.message,
        data: null,
      });
    }
  },
};