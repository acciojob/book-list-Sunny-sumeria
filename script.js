// //your JS code here. If required.

// const bookForm = document.querySelector('#book-form');
//     const bookList = document.querySelector('#book-list');

//     // 2. Event Listener for Adding a Book
//     bookForm.addEventListener('submit', (e) => {
//         // Prevent the actual form submission (prevents page refresh)
//         e.preventDefault();

//         // Get values from input fields
//         const title = document.querySelector('#title').value;
//         const author = document.querySelector('#author').value;
//         const isbn = document.querySelector('#isbn').value;

//         // Basic Validation
//         if (title === '' || author === '' || isbn === '') {
//             alert('Please fill in all fields');
//             return;
//         }

//         // Create a new row element
//         const row = document.createElement('tr');

//         // Add columns to the row using a template literal
//         row.innerHTML = `
//             <td>${title}</td>
//             <td>${author}</td>
//             <td>${isbn}</td>
//             <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
//         `;

//         // Append the row to the table body
//         bookList.appendChild(row);

//         // Clear fields after submission
//         bookForm.reset();
//     });

//     // 3. Event Listener for Deleting a Book (Event Delegation)
//     bookList.addEventListener('click', (e) => {
//         // Check if the clicked element has the 'delete' class
//         if (e.target.classList.contains('delete')) {
//             // Remove the parent row (tr) of the button's parent (td)
//             e.target.parentElement.parentElement.remove();
//         }
//     });
