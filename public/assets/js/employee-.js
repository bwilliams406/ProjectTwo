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
    const newTr = $('<tr>');
    newTr.data('employee', employeeData);
    newTr.append(`<td>${employeeData.name}</td>`);
    newTr.append(`<td>${employeeData.phone_number}</td>`);
    newTr.append(`<td>${employeeData.office_number}</td>`);
    newTr.append(`<td>${employeeData.Email}</td>`);
    newTr.append(`<td>${employeeData.full_time}</td>`);
    return newTr;

  }
  
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
  
  
  
    // Getting the initial list of Authors
    getemployees();
  
  });