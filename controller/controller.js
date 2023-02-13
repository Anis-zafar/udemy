const express = require("express");

const getuser = async (req, res) => {
    // const id = req.params.id;
     // const name = req.params.name;
    // const {id,name} = req.params 
    res.json({ id:req.params.id, name:req.params.name });
};

module.exports = getuser;
