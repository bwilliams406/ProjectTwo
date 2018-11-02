 // Getting references to the name input and recipe container, as well as the table body
 const nameInput = $('#inventory-name');
 const inventoryList = $('tbody');
 const inventoryContainer = $('.inventory-container');

 
$( function() {


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
 



 
  // Function for creating a new list row for inventory
 const createInventoryRow = function (inventoryData) {
   console.log(inventoryData);
   const newTr = $(`<tr class="delete" data-id=${inventoryData.id}>`);
   newTr.data('inventory', inventoryData);
   newTr.append(`<td>${inventoryData.item_discription}</td>`);
   newTr.append(`<td>${inventoryData.part_number}</td>`);
   newTr.append(`<td>${inventoryData.weight_needed}</td>`);
   newTr.append(`<td>${inventoryData.amount_instock}</td>`);
   newTr.append(`<td>${inventoryData.in_stock}</td>`);
   newTr.append(`<td><button type="button" class="close" aria-label="Close">
   <span aria-hidden="true">&times;</span>
 </button></td>`);
   return newTr;

 }

 $("#inventory-form").on("click",".delete",function(){
	
	let rowId = $(this).data("id");
	console.log(rowId);

})


  $('#delrow').on('click', function(){
    console.log('it clicks')
    $(".Check1").each(function(){
      var obj = $(this);
      if (this.checked) {
        $(obj).closest("tr").remove();
      }
      return false;  
    });
  });








 
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









































