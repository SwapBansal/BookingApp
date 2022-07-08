import express, { Router }  from "express";
import {deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();
//CRUD OPERATIONS

// router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user ,you are logged in");
// })
// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user you are logged in and can delete your account");
// })
// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin");
// })

router.put("/:id",verifyUser,updateUser);
router.delete("/:id",verifyUser,deleteUser);
router.get("/:id",verifyUser,getUser);
router.get("/",verifyAdmin,getUsers);


export default router;