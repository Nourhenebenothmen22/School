const AdminModel=require("../Modules/Admin.model")
module.exports={
    createAdmin:async(req,res)=>{
      try {
        const Admin=new AdminModel(req.body)
        await Admin.save()
        res.status(200).json({
            success:true,
            message: "Admin created successfully",
            data:Admin
        })
        
      } catch (error) {
        res.status(400).json({
            success:false,
            message:"admin not created"+error,
            data:null
        })
        
      }
    },
    Deleteadmin:async(req,res)=>{
        
        try {
            const id=req.params.id
            const deleteAdmin=await AdminModel.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                message:"admin deleted successfully",
                data:deleteAdmin
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"admin not deleted"+error,
                data:null
            })
            
        }
    },
    getAlladmin:async(req,res)=>{
        try {
            const Admin=await AdminModel.find()
            res.status(200).json({
                success:true,
                message:"admin listed successfully",
                data:Admin

            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"admin is not listed "+error,
                data:Admin

            })
            
        }
    },
    getByidAdmin:async(req,res)=>{
        try {
            const id=req.params.id
            const Admin=await AdminModel.findById(id)
            res.status(200).json({
                success:true,
                message:"admin listed successfully",
                data:Admin

            })

        } catch (error) {
            res.status(200).json({
                success:false,
                message:"admin is not listed "+error,
                data:null

            })
            
        }
    },
    updateAdmin:async(req,res)=>{
        try {
            const id=req.params.id
            const update=await AdminModel.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json({
                success:true,
                message:"admin is updated",
                data:update
            })
        } catch (error) {
            res.status(200).json({
                success:false,
                message:"admin is not updated"+error,
                data:null
            })
            
        }
    }
}