"use strict";

// Die Funktion wird ausgeführt wenn das Formular abgeschickt wird
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das normale Abschicken des Formulars

    // Holt die eingegebenen Werte aus dem Formular ------------------------------------------------todo: add password
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Überprüft ob die E-Mailadresse auf techstarter oder docc.techstarter endet
    if (
      !(
        email.endsWith("@techstarter.de") ||
        email.endsWith("@docc.techstarter.de")
      )
    ) {
      // Zeigt eine Fehlermeldung an
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bitte gib eine gültige Techstarter E-Mailadresse ein! Bei Problemen wende Dich bitte an Deinen Kursleiter, Class Manager oder unter Whatsapp an 01579 245 85 70",
      });
      return;
    }

    // Sendet die Daten an die Back4App Datenbank
    Parse.initialize = "2Nci95rXG9BCXLTCnvEyhzTvqeY9FkyCHxxkINAe";
    Parse.serverURL = "JwOlY3bEpYslTtpYlTUH0bvUh8P4KHOC9yp4dSdp";
    const Registration = Parse.Object.extend("Registration");
    const newRegistration = new Registration();

    newRegistration.set("firstName", firstName);
    newRegistration.set("lastName", lastName);
    newRegistration.set("birthday", birthday);
    newRegistration.set("email", email);
    newRegistration.set("course", course);

    newRegistration.save().then(
      function () {
        // Erfolgreich
        Swal.fire({
          icon: "success",
          title: "Registrierung erfolgreich!",
          text: "Vielen Dank für Deine Registrierung!",
        });
        // Leert das Formular
        document.getElementById("registration-form").reset();
      },
      function (error) {
        // Hat nmicht geklappt
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Es ist ein Fehler aufgetreten. Bitte versuche es später noch einmal, wende Dich an Deinen Kursleiter, FClas Manager oder unter Whatsapp an 01579 245 85 70",
        });
      }
    );
  });
