// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it

var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({apiKey: "keyrtHLLF69GUxFLW" }).base(
  "appp1fR5UpMEicao2"
);
let allItems = [];
console.log(base);
base('Clouds').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }


  console.log(allItems);

  // now, call a new function to do stuff with your data and pass the allItems array into it
//  setTable(allItems);
});
