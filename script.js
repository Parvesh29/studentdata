document.getElementById('saveButton').addEventListener('click', function() {
    // Get form data
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;

    // Create a new row and cells for the table
    let table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // Add data to cells
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = gender;
    cell4.textContent = email;

    // Reset form after saving
    document.getElementById('studentForm').reset();
});
