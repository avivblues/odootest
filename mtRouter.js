const express = require("express");
const router = express.Router();
const itemController = require("../controllers/mtControllers");

//
//========== Master processing
//# create a item
router.post("/create", itemController.create);
//#get a single item

router.get("/all", itemController.fetch);

//#update a item
router.put("/:id", itemController.update);

//#delete a item
router.delete("/:id", itemController.delete);
//
//========== Transaction processing

//
//========== Report processing
// ✅ export the router
module.exports = router;