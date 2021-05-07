// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// the next two lines are calling the Airtable API!!
var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({apiKey: "keyrtHLLF69GUxFLW" }).base(
  "appEl7AISn3UPE7e5"
);

// create an empty array for all of your items to go into
let allItems = [];
let allChairs = [];

// inside the () after base put the name of YOUR spreadsheet
base('my-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
  });


  // if there is another page of items, get those too
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  // all items received, no errors!!
  // console log the allItems array, you should see all of your data in there now.
  console.log(allItems);

  // now, call a new function to do stuff with your data and pass the allItems array into it
  setTable(allItems);
});


let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function setTable(allItems) {
  allItems.forEach(function(item) {
    let name = item.fields.items;
    let imageUrl = item.fields.images[0].url;
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.class_name);
    container.appendChild(itemImage);

    if (item.fields.kind_of_item === "furniture") {
      allChairs.push(item);
    }
  })
}

let placeChairsButton = document.getElementById("place-chairs");
placeChairsButton.addEventListener('click', showAllChairs);

function showAllChairs() {
  allChairs.forEach(function(chairsItem) {
    let chairs = document.createElement('img');
    chairs.src = chairsItem.fields.images[0].url;
    chairs.classList.add(chairsItem.fields.class_name);
    chairs.style.display = "block";
    container.appendChild(chairs);
  })
  console.log(allChairs)
}
