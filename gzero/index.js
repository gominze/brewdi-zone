const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.use( bodyParser.urlencoded({})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const course = req.body.course;

  if (email.endsWith("@docc.techstarter.de")) {
    console.log(
      `Ein Techi wurde erfolgreich registriert: ${firstName} ${lastName}, E-Mail: ${email}, Kurs: ${course}`
    );
    res.redirect("/");
  } else {
    console.log(`Registrierung fehlgeschlagen: ungültige E-Mail-Adresse.`);
    res
      .status(400)
      .send("Registrierung fehlgeschlagen: ungültige E-Mail-Adresse.");
  }
});

app.listen(3000, () => {
  console.log("rdy Port 3000");
});
