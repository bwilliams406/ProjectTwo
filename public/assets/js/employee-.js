  // Getting references to the name input and employee container, as well as the table body
  const nameInput = $('#employee-name');
  const employeeList = $('tbody');
  const employeeContainer = $('.employee-container');

  
$( function() {


// Click listener for the submit button
$('.submit').on('click', function(event) {
    event.preventDefault();

    // Here we grab the form elements
    const newEmployee = {
    name: $('#name').val().trim(),
    phone_number: $('#phoneNum').val().trim(),
    office_number: $('#officeNum').val().trim(),
    Email: $('#Email').val().trim(),
    full_time: $('#fulltime').val().trim()
    }

    for(let key in newEmployee){
      if(newEmployee[key] === ''){
        alert('Please fill out all fields');
        return;
      }
    }

    console.log(newEmployee);



    $.post('/api/employee', newEmployee,
      function(data) {

   
        if (data.success) {

          console.log('data', data)
        
        }
      });
  });
  

  
   // Function for creating a new list row for employees
  const createEmployeeRow = function (employeeData) {
    console.log(employeeData);
    let full_time = employeeData.full_time;
    if(full_time){
      full_time = "Yes"
    }
    else{
      full_time = "No"
    }
    const newTr = $(`<tr class="delete">`);
    newTr.data('employee', employeeData);
    newTr.append(`<td>${employeeData.name}</td>`);
    newTr.append(`<td>${employeeData.phone_number}</td>`);
    newTr.append(`<td>${employeeData.office_number}</td>`);
    newTr.append(`<td>${employeeData.Email}</td>`);
    newTr.append(`<td>${full_time}</td>`);
    newTr.append(`<td class="close" data-id=${employeeData.id}><button type="button"aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></td>`);
    return newTr;

  }

  $("tbody").on("click",".close",function(){
 
    let rowId = $(this).data("id");
    console.log(rowId);
    $.ajax({
      url:"/api/employee/" + rowId,
      method:"DELETE"
    }).then(function(response){
      console.log(response)
    })
   })
  
  // Function for retrieving employees and getting them ready to be rendered to the page
  const render = function () {
    $.get('/api/employee', function(data) {
      renderEmployeeList(data); 
      nameInput.val('');
    });
  }
  
  // A function for rendering the list of employees to the page
  const renderEmployeeList = function (data) {
    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push( createEmployeeRow(data[i]) );
    }
    employeeList.append(rowsToAdd)

    }

  render();
  

  });