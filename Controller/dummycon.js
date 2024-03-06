
const asynchandler = require('express-async-handler')


exports.dummy = asynchandler(async (req, res) => {
  try {
   
    res.status(200).send({
        data:"reached"
    });
  } catch (error) {
    res.send(error);
  }
});
