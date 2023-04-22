const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// router.route("/").get(getContacts);//Defined GET method=> GET all contacts

// router.route("/").post(createContact); //Defined POST method=> Create contact

// router.route("/:id").get(getContact); //Defined GET method=>GET contact (particular)

// router.route("/:id").put(updateContact); //Defined PUT method=>Update contact (particular)

// router.route("/:id").delete(deleteContact); //Defined DELETE method=>DELETE contact(particular)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
