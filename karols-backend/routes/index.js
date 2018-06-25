const express = require("express")
const router = express.Router()
const { DateTime } = require("luxon")

const shopsPrestations = require("../public/shopsPrestations.json")
const createWeekTimeSlots = require("../timeslots/timeslots")

const nodemailer = require("nodemailer")

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

// POST method route
router.post("/", function(req, res) {
  res.send("POST request to the homepage")
})

router.get("/test", (req, res) => {
  res.json(test)
})

router.get("/shops-prestations", (req, res) => {
  res.json(shopsPrestations)
})

router.get("/timeslots", (req, res) => {
  res.json(
    createWeekTimeSlots(
      DateTime.fromObject({
        day: 27,
        month: 7,
        year: 2018
      })
    )
  )
})

router.post("/reservations", (req, res) => {
  console.log("body", req.body)
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "marlowdevweb@gmail.com",
      pass: "eRwKiiPwSpMr56wXCD"
    }
  })
  // parametre l'objet reservation ,
  // module.export : sendMail

  smtpTransport.sendMail(
    {
      from: "KAROLS <marlowdevweb@gmail.com>", // Expediteur
      to: `${req.body.selectedForm.email}`, // Destinataires
      subject: `Confirmation de votre réservation à ${
        req.body.selectedShop.city
      }`, // Sujet
      html: `<h1 style="margin-bottom: 10px;"> Hey ${
        req.body.selectedForm.firstName
      } !</h1><p  style="font-size: 20px;">Vous avez réservé pour ${
        req.body.selectedShop.city
      }</p>

      Vous avez pris les préparations ci-dessous :
      <ul style="list-style-type: none;">
      ${req.body.selectedPreparations.map(
        service => `<li>${service.preparations[0].titlePreparation}</li>`
      )}
      </ul>
      
      <footer><img src="https://image.noelshack.com/fichiers/2018/25/5/1529659014-logoemail.png"/></footer>`
    },
    (error, response) => {
      if (error) {
        console.log(error)
      } else {
        console.log("Message sent: Confirmation de mail envoyée ")
      }
    }
  )
})

router.get("/date-selected/:date", (req, res) => {
  console.log("date : ", req.params.date)
  res.send(createWeekTimeSlots(DateTime.fromISO(req.params.date)))
})

module.exports = router
