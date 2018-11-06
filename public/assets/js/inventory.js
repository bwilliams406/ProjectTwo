 // Getting references to the name input and recipe container, as well as the table body
 const nameInput = $('#inventory-name');
 const inventoryList = $('tbody');
 const inventoryContainer = $('.inventory-container');

 
$( function() {

//==================================for updating ANDREW******=========================================================


let currentStock = "";
  $("#partNumber").on("change", function(){
    currentStock = $(this).find(":selected").data("currentstock");
    console.log("bitching", currentStock)
  })

  $('#order').on('click', function(event) {
      console.log("works")
      event.preventDefault();
      
      let order = {
          part_number:$("#partNumber").val(),
          amount_instock:$("#quantityToOrder").val() + currentStock
      }
  
      let updateInventory = $("#order").val(); 

      

      let currentInventory = $(this).data("currentInventory")

      updateInventory:currentInventory + $("#order").val()

      console.log(currentInventory);
      $.ajax({
        url:"/api/inventory" + currentInventory,
        method:"PUT"
      }).then(function(response){
        console.log(response)
      })


  });

  //$("#partNumber").append(`<option value=${inventoryData.part_number} data-currentStock=${inventoryData.amount_instock}>${inventoryData.item_discription}</option>`)

//=============================== for adding data to db==================================================================

// Click listener for the submit button
$('.submit').on('click', function(event) {
   event.preventDefault();

   // Here we grab the form elements
   const newInventory = {
    item_discription: $('#item_discription').val().trim(),
    part_number: $('#part_number').val().trim(),
    weight_needed: $('#weight_needed').val().trim(),
    amount_instock: $('#amount_instock').val().trim(),
    in_stock: $('#in_stock').val().trim()
   }

   for(let key in newInventory){
     if(newInventory[key] === ''){
       alert('Please fill out all fields');
       return;
     }
   }


   console.log(newInventory);


   $.post('/api/inventory', newInventory,
     function(data) {

  
       if (data.success) {

         console.log('data', data)
       
       }
     });
 });
 

//======================================================================================================

 
    // Function for creating a new list row for inventory
 const createInventoryRow = function (inventoryData) {
  console.log(inventoryData);


  let in_stock = inventoryData.in_stock;
  if(in_stock){
    in_stock = "Yes"
  }
  else{
    in_stock = "No"
  }



    
    
// for rendering items into drop downlist on update page
  $("#partNumber").append(`<option value=${inventoryData.part_number} data-currentStock=${inventoryData.amount_instock}>${inventoryData.item_discription}</option>`)


  // renders DB on inventory page
  const newTr = $(`<tr class="delete">`);
  newTr.data('inventory', inventoryData);
  newTr.append(`<td>${inventoryData.item_discription}</td>`);
  newTr.append(`<td>${inventoryData.part_number}</td>`);
  newTr.append(`<td>${inventoryData.weight_needed}</td>`);
  newTr.append(`<td>${inventoryData.amount_instock}</td>`);
  newTr.append(`<td>${in_stock}</td>`);
  newTr.append(`<td class="close" data-id=${inventoryData.id}><button type="button"aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></td>`);
  return newTr;

}

//============================= for deleting =====================================================

$("tbody").on("click",".close",function(){
 
 let rowId = $(this).data("id");
 console.log(rowId);
 $.ajax({
   url:"/api/inventory/" + rowId,
   method:"DELETE"
 }).then(function(response){
   console.log(response)
 })
})








 
 // Function for retrieving Recipes and getting them ready to be rendered to the page
 const render = function () {
   $.get('/api/inventory', function(data) {
     renderInventoryList(data); 
     nameInput.val('');
   });
 }
 
 // A function for rendering the list of Recipes to the page
 const renderInventoryList = function (data) {
   const rowsToAdd = [];
   for (let i = 0; i < data.length; i++) {
     rowsToAdd.push( createInventoryRow(data[i]) );
   }
   inventoryList.append(rowsToAdd)

   }

 render();
 



  

});
