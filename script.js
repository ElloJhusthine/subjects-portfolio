document.addEventListener("DOMContentLoaded", function () {
    fetch('https://raw.githubusercontent.com/ElloJhusthine/subjects-portfolio/refs/heads/main/courses.json')
        .then(response => response.json())
        .then(data => displaySubjects(data))
        .catch(error => console.error('Error loading subjects:', error));
});

function displaySubjects(data) {
    let container = document.getElementById("subjectsContainer");
    container.innerHTML = "";

    data.forEach(entry => {
        let section = document.createElement("div");
        section.innerHTML = `<h2>${entry.year} - ${entry.semester}</h2>`;
        
        let list = document.createElement("ul");
        entry.subjects.forEach(subject => {
            let item = document.createElement("li");
            item.className = "subject";
            item.textContent = `${subject.code}: ${subject.title} (${subject.credit} credits)`;
            list.appendChild(item);
        });

        section.appendChild(list);
        container.appendChild(section);
    });
}

function searchSubject() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let subjects = document.getElementsByClassName("subject");

    for (let i = 0; i < subjects.length; i++) {
        let subjectName = subjects[i].textContent.toLowerCase();
        subjects[i].style.display = subjectName.includes(input) ? "" : "none";
    }
}
