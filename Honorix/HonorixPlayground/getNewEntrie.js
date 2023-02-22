//connect to db

Parse.initialize(
  "2Nci95rXG9BCXLTCnvEyhzTvqeY9FkyCHxxkINAe",
  "JwOlY3bEpYslTtpYlTUH0bvUh8P4KHOC9yp4dSdp"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// create parse and save

async function saveNewPerson() {
  const person = new Parse.Object("Person");

  person.set("name", "John Snow");
  person.set("age", 27);
  try {
    let result = await person.save();
    alert("New object created with objectId: " + result.id);
  } catch (error) {
    alert("Failed to create new object, with error code: " + error.message);
  }
}
