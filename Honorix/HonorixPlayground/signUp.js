//Paste your Application Key and JavaScript Key, respectively
Parse.initialize(
  "2Nci95rXG9BCXLTCnvEyhzTvqeY9FkyCHxxkINAe",
  "JwOlY3bEpYslTtpYlTUH0bvUh8P4KHOC9yp4dSdp"
);
Parse.serverURL = "https://parseapi.back4app.com/";

signUp();

function signUp() {
  // new instance
  var user = new Parse.User();
  user.set("username", "my name");
  user.set("password", "my pass");
  user.set("email", "email@example.com");

  user.set("phone", "415-392-0202");

  user
    .signUp()
    .then(function (user) {
      console.log(
        "User created successful with name: " +
          user.get("username") +
          " and email: " +
          user.get("email")
      );
    })
    .catch(function (error) {
      console.log("Error: " + error.code + " " + error.message);
    });
}
