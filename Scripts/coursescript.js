/* make course cards */
var courseContainer = document.getElementById("course-list");

for (var i = 0; i < courses.length; i++) {

    var card = document.createElement("a");

    card.className = "course-card";

    card.href = `${courses[i].name.toLowerCase().replace(/\s+/g, '-')}.html`;

    card.innerHTML = `
        <h3>${courses[i].coursecode}: ${courses[i].name}</h3>
        <p>${courses[i].type}</p>
        <p>Progress: ${courses[i].progress}%</p>
    `;

    courseContainer.appendChild(card);
}