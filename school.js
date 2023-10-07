function Student(fullName, dob, gender, major, imageUrl, phoneNumber) {
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.major = major;
    this.imageUrl = imageUrl;
    this.phoneNumber = phoneNumber;
}

function renderStudentCard(student) {
    const studentCards = document.getElementById("student-cards");

    const card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <img src="${student.imageUrl}" alt="${student.fullName}">
        <h3>${student.fullName}</h3>
        <p><strong>Date of Birth:</strong> ${student.dob}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Major:</strong> ${student.major}</p>
        <p><strong>Phone Number:</strong> ${student.phoneNumber}</p>
    `;

    studentCards.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach((student) => {
        renderStudentCard(student);
    });

    

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("full-name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const major = document.getElementById("major").value;
        const imageUrl = document.getElementById("image-url").value;
        const phoneNumber = document.getElementById("phone").value;

        const student = new Student(fullName, dob, gender, major, imageUrl, phoneNumber);
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        renderStudentCard(student);

        studentForm.reset();
    });
});