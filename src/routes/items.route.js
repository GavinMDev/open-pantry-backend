const express = require("express");
const router = express.Router();

    // Search
    router.get('/', (req, res) => {
        res.json({result: 'Item Found'});
    });

    module.exports = router;