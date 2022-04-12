document.getElementById('submit-btn').addEventListener('click', () => {
    var parentTable = document.getElementById('tbody-id');
    var newRow = document.createElement('tr');
    newRow.innerHTML = "Success"
    parentTable.appendChild(newRow);
    console.log("Success");
});