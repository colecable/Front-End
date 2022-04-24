let breweryList = [];//creates the array that our breweries will live in

let tableBody = document.getElementById('tbody');

// To Jeff: I really didn't want to use your API. I tried using multiple different ones, but I couldn't iterate
// over the objects that were given. They were nested in my array and I couldn't access the data properly.

$.get('https://api.openbrewerydb.org/breweries/', (data) => { 
    for (let brewery of data) {
        breweryList.push(brewery);
        let newRow = tableBody.insertRow(0);
        let idRow = newRow.insertCell(0);
        let nameRow = newRow.insertCell(1);
        let stateRow = newRow.insertCell(2);

        idRow.innerHTML = brewery.id;
        nameRow.innerHTML = brewery.name;
        stateRow.innerHTML = brewery.state;
    }
})

console.log(breweryList); //testing
//below are variables that hold the inputs for when I need to add a row to the table

let deleteNameField = document.getElementById('name-delete').value

//below function takes values above the add button and creates a new row with them
document.getElementById('add-btn').addEventListener('click', () => {
    let userNewRow = tableBody.insertRow(0);
    let userIdRow = userNewRow.insertCell(0);
    let userNameRow = userNewRow.insertCell(1);
    let userStateRow = userNewRow.insertCell(2);

    let idField = document.getElementById('id-input').value
    let nameField = document.getElementById('name-input').value
    let stateField = document.getElementById('state-input').value
    
    userIdRow.innerHTML = idField;
    userNameRow.innerHTML = nameField;
    userStateRow.innerHTML = stateField; 
})

document.getElementById('delete-btn').addEventListener('click' , () => {
    let foundChild = document.documentElement.innerHTML.includes(document.getElementById('delete-btn').value);
    $(foundChild.parent).remove();
})


