use hotel;
db.dropDatabase();

db.bookings.insertMany([
{
  firstName: "Noel",
  lastName: "Cowan",
  email: "@me",
  status: true
},
{
  firstName: "GeeGee",
  lastName: "Mercier",
  email: "@you",
  status: false
},
{
  firstName: "zsolt",
  lastName: "Padoba...",
  email: "@him",
  status: true
}

]);
