const express = require('express')

const createRouter = function (collection) {

    const router = express.Router()

    router.get('/found', (req, res) => {
        collection.find().toArray()
        .then(docs => res.json(docs))
        .catch((err) => {
            console.error(err);
          })
    });
  
    return router;
  };

module.exports = createRouter