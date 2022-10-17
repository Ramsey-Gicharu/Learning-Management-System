const server = 'http://localhost:8080';
var studentId;
var studentName;
var studentEmail;
var password ;

async function fetchStudents() {
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const students = await response.json();
    populateContent(students);
}

async function addStudent() {
    const url = server + '/students';
    const student = {id: studentId, name: studentName, email: studentEmail, password: password};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(student)
    }
    const response = await fetch(url, options);
}

function populateContent(students) {
    var table = document.getElementById('content');
    table.innerHTML = "<tr><th>Student Id</th><th>Student Name</th><th>Student Email</th><th>Password</th></tr>";
    students.forEach(student => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId= document.createTextNode(student.id);
        dataId.appendChild(textId);

        var dataName = document.createElement('td');
        var textName= document.createTextNode(student.name);
        dataName.appendChild(textName);
       
        var dataEmail = document.createElement('td');
        var textEmail = document.createTextNode(student.email);
        dataEmail.appendChild(textEmail);

         var dataPassword = document.createElement('td');
        var textPassword = document.createTextNode(student.password);
        dataPassword.appendChild(textPassword);
        
        row.appendChild(dataId);
        row.appendChild(dataName);
        row.appendChild(dataEmail);
        row.appendChild(dataPassword);
        table.appendChild(row);
    });
}

document.querySelector('form').addEventListener('submit', (e) => {
    studentId = document.getElementById('studentId').value;
    studentName = document.getElementById('studentName').value;
    studentEmail = document.getElementById('studentEmail').value;
    password = document.getElementById('password').value;
    if (studentId && studentName && studentEmail && studentPassword) {
        id = parseInt(id);
        addStudent();
        fetchStudents();
    }
    e.preventDefault();
});