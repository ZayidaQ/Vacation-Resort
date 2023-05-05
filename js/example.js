function calculateRoomPrice() {
  // input
  let selectedRoom = document.querySelector("input[name='roomtype']:checked");
  // let room = document.getElementById("roomtype1").checked;
  // let room2 = document.getElementById("roomtype2").checked;
  // let room3 = document.getElementById("roomtype3").checked;

  let selectedDiscount = document.querySelector("input[name='discount']:checked");
  // let discount1 = document.getElementById("discount1").checked;
  // let discount2 = document.getElementById("discount2").checked;
  // let discount3 = document.getElementById("discount3").checked;
  
  let price;
  let discount;
  
  // Price - discount
  // calculation -> room
  if (selectedRoom.value == "Queen") {
    price = 250;
  }
  else if (selectedRoom.value == "King") {
    price = 250;
  }
  if (selectedRoom.value == "2bed") 
  {
    price = 350;
  }
  
  //
  
  if (selectedDiscount.value == "None") {
    discount = 1;
  }
  
  if  (selectedDiscount.value == "AA") {
    discount = 0.9;
  }
  if (selectedDiscount.value == "Military")
    {
    discount = 0.8;
  }
  
  //output
  let total = price * discount;
  document.getElementById("demo").innerHTML = total;
  
  let totalIncludingTaxes = total * 1.12;
  document.getElementById("demo2").innerHTML = totalIncludingTaxes.toFixed(2);
  //12 procent taxes after discount reduction
  //output
}
  

//   "use strict";

// let costForm = document.getElementById("costForm");

// costForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Selecting all the elements
//   let name = document.getElementById("name").value;
//   alert(name);
// });


// "use strict";

// let costForm = document.getElementById("costForm");

// costForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Selecting all the elements
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let days = document.getElementById("days").value;
//   let adults = document.getElementById("adults").value;
//   let children = document.getElementById("children").value;
//   alert(children);
//   //   let selectedRoom = document.querySelector("input[name='roomtype']:checked");
//   //   let selectedDiscount = document.querySelector(
//   //     "input[name='discount']:checked"
//   //   );

//   //   let price;
//   //   let discount;

//   //   // Price - discount

//   //   if (selectedRoom.value == "Queen") {
//   //     price = 250;
//   //   } else if (selectedRoom.value == "King") {
//   //     price = 250;
//   //   }
//   //   if (selectedRoom.value == "2bed") {
//   //     price = 350;
//   //   }

//   //   //

//   //   if (selectedDiscount.value == "None") {
//   //     discount = 1;
//   //   }

//   //   if (selectedDiscount.value == "AA") {
//   //     discount = 0.9;
//   //   }
//   //   if (selectedDiscount.value == "Military") {
//   //     discount = 0.8;
//   //   }

//   //   let total = price * discount;
//   //   document.getElementById("demo").innerHTML = total;

//   //   let totalIncludingTaxes = total * 1.12;
//   //   document.getElementById("demo2").innerHTML = totalIncludingTaxes.toFixed(2);
//   //   //12 procent taxes after discount reduction
//   //output
// });

// "use strict";

// let costForm = document.getElementById("costForm");

// costForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Selecting all the elements
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let days = document.getElementById("days").value;
//   let adults = document.getElementById("adults").value;
//   let children = document.getElementById("children").value;
//   alert(children);
  //   let selectedRoom = document.querySelector("input[name='roomtype']:checked");
  //   let selectedDiscount = document.querySelector(
  //     "input[name='discount']:checked"
  //   );

  //   let price;
  //   let discount;

  //   // Price - discount

  //   if (selectedRoom.value == "Queen") {
  //     price = 250;
  //   } else if (selectedRoom.value == "King") {
  //     price = 250;
  //   }
  //   if (selectedRoom.value == "2bed") {
  //     price = 350;
  //   }

  //   //

  //   if (selectedDiscount.value == "None") {
  //     discount = 1;
  //   }

  //   if (selectedDiscount.value == "AA") {
  //     discount = 0.9;
  //   }
  //   if (selectedDiscount.value == "Military") {
  //     discount = 0.8;
  //   }

  //   let total = price * discount;
  //   document.getElementById("demo").innerHTML = total;

  //   let totalIncludingTaxes = total * 1.12;
  //   document.getElementById("demo2").innerHTML = totalIncludingTaxes.toFixed(2);
  //   //12 procent taxes after discount reduction
  //output