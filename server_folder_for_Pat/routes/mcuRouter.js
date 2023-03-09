const express = require('express');
const router = express.Router();


const {getAllCharacters, createMcuCharacter, updateMcuCharacter, deleteMcuCharacter} = require("../controllers/mcuController");


router.get("/allCharacters", getAllCharacters);

router.post("/createMcuCharacter", createMcuCharacter);

router.put("/updateMcuCharacter", updateMcuCharacter);

router.delete("/deleteMcuCharacter/:name", deleteMcuCharacter);


module.exports = router;