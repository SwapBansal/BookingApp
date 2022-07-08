import express, { Router }  from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom,updateRoomAvailability } from "../controllers/Room.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router=express.Router();
//CRUD OPERATIONS
router.post("/:hotelid",verifyAdmin,createRoom);
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id",updateRoomAvailability);
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);
router.get("/:id",getRoom);
router.get("/",getRooms);


export default router;