use hotel;
db.dropDatabase();

db.bookings.insertMany([
{
  names: "Noel",
  email: "@me",
  status: "checkedIn"
},
{
  names: "GeeGee",
  email: "@you",
  status: "checkedOut"
},
{
  names: "zsolt",
  email: "@him",
  status: "notCheckedIn"
}

]);
