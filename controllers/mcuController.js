const Mcu = require("../models/mcuModel");


async function deleteMcuCharacter(req, res) {

    try {
        await Mcu.deleteOne( {name: req.params.name});

        res.json(
            {
                message: "success",
                payload: req.params.name
            }
        );

    }
    catch (error) {
        console.log("Error in delete:" + error);

        res.json(
            {
                message: 'failure',
                payload: req.params.name
            }
        )
    }
}


async function updateMcuCharacter(req, res) {
    try {
        let updatedMcuCharacter = {
            name: req.body.nane,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        Mcu.updateOne(
            {name: req.params.name},
            { $set: updatedMcuCharacter},
            {upsert: true}
        );

        res.json(
            {
                message: "success",
                payload: updatedMcuCharacter            
            }
        )

    }
    catch(error) {
        console.log("Error in update:" + error);

        res.json(
            {
                message: "failure",
                payload: "error in update " + error
            }
        );
    }
}

async function createMcuCharacter(req, res) {

    try {

        const newMcuHero = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.create(newMcuHero);

        res.json(
            {
                message: "success",
                payload: newMcuHero
            }
        );

    }
    catch (error) {
        console.log("Error in create character" + error);
        res.json(
          {
            message: "failure",
            payload: "Error in create: " + error
          }

        );
    }
}


async function getOneCharacter(req, res) {
    try {

        let nameToFind = req.params.name;
        let result = await Mcu.find({name: nameToFind});

        res.json(
            {
                message: "success",
                payload: result
            }
        )

    }
    catch (error) {
        console.log("Error:" + error);
        res.json(
            {
                message: "failure",
                payload: `Error occured: ${error}`
            }
        );
    }
}

async function getAllCharacters(req, res) {
    try {
            let result = await Mcu.find({});

            res.json(
                {
                    message: "success",
                    payload: result
                }
            );
    }
    catch (error) {
        console.log("Error:" + error);
        res.json(
            {
                message: "failure",
                payload: `Error occured: ${error}`
            }
        );
    }
}

module.exports = {getAllCharacters, createMcuCharacter, updateMcuCharacter, deleteMcuCharacter, getOneCharacter};