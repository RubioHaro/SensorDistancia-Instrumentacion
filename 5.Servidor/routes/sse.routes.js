const express = require("express");
const {sse, changeSelection} = require("../sse");

const router = express.Router();

router.get("/stream", sse.init);

router.post("/selected0", (req, res) => {
    // const option = JSON.selected;
    changeSelection("0");
});

router.post("/selected1", (req, res) => {

    // const option = JSON.selected;
    changeSelection("1");
});

router.post("/selected2", (req, res) => {
    // const option = JSON.selected;
    changeSelection("2");
});

module.exports = router;