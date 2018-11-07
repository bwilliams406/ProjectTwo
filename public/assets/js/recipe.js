// Getting references to the name input and recipe container, as well as the table body
const nameInput = $('#recipe-name');
const recipeList = $('tbody');
const recipeContainer = $('.recipe-container');


$(function () {

  // Function for creating a new list row for Recipes
  const createRecipeRow = function (recipeData) {
    console.log(recipeData);
    const newTr = $('<tr>');
    newTr.data('recipe', recipeData);
    newTr.append(`<td>${recipeData.item_discription}</td>`);
    newTr.append(`<td>${recipeData.part_number}</td>`);
    newTr.append(`<td>${recipeData.weight_needed}</td>`);
    newTr.append(`<td>${recipeData.amount_instock}</td>`);
    newTr.append(`<td>${recipeData.in_stock}</td>`);
    return newTr;

  }

  // Function for retrieving Recipes and getting them ready to be rendered to the page
  const render = function () {
    $.get('/api/recipe', function (data) {
      renderRecipeList(data);
      nameInput.val('');
    });
  }

  // A function for rendering the list of Recipes to the page
  const renderRecipeList = function (data) {
    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push(createRecipeRow(data[i]));
    }
    recipeList.append(rowsToAdd)

  }

  render();


});