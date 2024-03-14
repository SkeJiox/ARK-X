const express = require("express");
const router = express.Router();

const { getallpost, createtpost , postbyid, updatepost,  deletepost} = require("../Controllers/Post.controller");

router.get('/:p',getallpost);
router.get('/:id',postbyid);
router.post('/',createtpost);
router.put('/:id',updatepost);
router.delete('/:id',deletepost);

module.exports=router;