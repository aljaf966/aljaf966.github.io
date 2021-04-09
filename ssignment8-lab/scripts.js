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


function setTable(allItems) {
  // make a container div and append it to the body
  // this way we can append all of our items to a div which we can style later
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  // run a forEach loop on your array, with each item
  // then make a new HTML element and position it somewhere on the page
  allItems.forEach(function(item) {
    // store the name of the item (from your spreadsheet) into a variable
    let name = item.fields.items;
    // store the image for the item into a variable
    let imageUrl = item.fields.images[0].url;


  //let Diningable = document.createElement('img');
  //  DiningTable.src = imageUrl;
  //  DiningTable.classList.add(item.fields.kind_of_item);
  // container.appendChild(DiningTable);

    // the following code is for making multiple cups and plates etc out of just one Airtable record and then positioning them in specific spots on the table. these are the names I used in my airtable, yours will be different!!
    // here i want to do different things with different items
    // so if the item is a Cup, I want to add a class name of cup, and put each one in a different position on the page.
    // dont forget, some of the styling for my page here in JS and some is in my CSS file, for example I know that my .cup class has position: absolute set in CSS, which means that style.left and style.top will work here in the JS.

    if (name === "Plates") {
      for (var i=0; i<3; i++) {
        let Plates = document.createElement('img');
        Plates.src = imageUrl;
      Plates.classList.add("Plates");

        if (i === 0) {
          Plates.style.left = "80%";
        }
        if (i === 1) {
          Plates.style.left = "80%";
          Plates.style.top = "60%";
        }
        if (i === 2) {
      Plates.style.left = "10%";
          Plates.style.top = "10%";
          Plates.style.scale = "30%";
        }

        container.appendChild(Plates);
      }
    }

    if (name === "placemat") {
      for (var i=0; i<3; i++) {
        let Placemat = document.createElement('img');
        Placemat.src = imageUrl;
      Placemat.classList.add("placemat");

        if (i === 0) {
          Placemat.style.left = "80%";
        }
        if (i === 1) {
          Placemat.style.left = "80%";
          Placemat.style.top = "60%";
        }
        if (i === 2) {
      Placemat.style.left = "10%";
          Placemat.style.top = "10%";
          Placemat.style.scale = "30%";
        }

        container.appendChild(Placemat);
      }
    }

    if (name === "pizza") {
        for (var i=0; i<1; i++) {
          let pizza = document.createElement('img');
        pizza.src = imageUrl;
        pizza.classList.add("pizza");

    if (i === 0) {
        pizza.style.left = "80%";
        pizza.style.top = "50%";
            }

            container.appendChild(pizza);
         }
       }

if (name === "glass") {
    for (var i=0; i<1; i++) {
      let glass = document.createElement('img');
    glass.src = imageUrl;
    glass.classList.add("glass");

if (i === 0) {
    glass.style.left = "70%";
    glass.style.top = "20%";
        }

        container.appendChild(glass);
     }
   }

   if (name === "guestone") {
       for (var i=0; i<1; i++) {
         let guestone = document.createElement('img');
       guestone.src = imageUrl;
       guestone.classList.add("guestone");

   if (i === 0) {
       guestone.style.left = "30%";
       guestone.style.top = "40%";
           }

           container.appendChild(guestone);
        }
      }

   if (name === "chairs") {
       for (var i=0; i<1; i++) {
         let chairs = document.createElement('img');
       chairs.src = imageUrl;
       chairs.classList.add("chairs");

   if (i === 0) {
       chairs.style.left = "60%";
       chairs.style.top = "80%";
           }

           container.appendChild(chairs);
        }
      }
      if (name === "table") {
          for (var i=0; i<1; i++) {
            let table = document.createElement('img');
          table.src = imageUrl;
          table.classList.add("table");

      if (i === 0) {
          table.style.left = "60%";
          table.style.top = "40%";
              }

              container.appendChild(table);
           }
         }
})
}
