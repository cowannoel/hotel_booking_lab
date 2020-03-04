use hotel;
db.dropDatabase();

db.bookings.insertMany([
{
  names: "Noel",
  email: "@me",
  status: "true"
},
{
  names: "GeeGee",
  email: "@you",
  status: "false"
}

]);
