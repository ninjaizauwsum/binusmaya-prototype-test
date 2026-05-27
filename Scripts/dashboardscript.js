

/*dashboard data */
var percentage = average(courses.map(course => course.progress));
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}



// Assign colors based on type
upcoming.forEach(item => {

  if (item.type === 'AOL') {
    item.color = '#00a2e8';
  }

  if (item.type === 'Quiz') {
    item.color = '#d10e00';
  }
});


document.getElementById("Header").innerHTML = "Welcome Back, " + name.split("/")[0] + "!";
document.getElementById("Role").innerHTML = role;
document.getElementById("Active-Courses").innerHTML = active_courses;
document.getElementById("Due").innerHTML = due;
document.getElementById("Prog-Percentage").innerHTML = percentage + "%";
document.getElementById("Unread-Messages").innerHTML = unread_messages;

/*Course List */
for (var i = 0; i < 4; i++) {
    document.getElementById("Course" + (i + 1)).innerHTML = `<h3>${courses[i].coursecode}: ${courses[i].name}</h3><p>${courses[i].type}</p><p>Progress: ${courses[i].progress}%</p>`;
}

/*Prog */
if (percentage >= 80) {
    document.getElementById("Prog-Percentage").style.color = "green";
} else if (percentage >= 50) {
    document.getElementById("Prog-Percentage").style.color = "orange";
} else {
    document.getElementById("Prog-Percentage").style.color = "red";
}



document.addEventListener('DOMContentLoaded', function () {

  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 650,

    events: upcoming
  });

  calendar.render();
});

/*Upcoming Assignments */


var container = document.getElementById("upcoming-container");
for (var i = 0; i < upcoming.length; i++) {
  // Make the entire card a clickable link by creating an anchor as the card
  var card = document.createElement("a");
  card.className = "upcoming";
  card.href = "DummyPage.html";
  card.innerHTML = `
    <h3>${upcoming[i].title}</h3>
    <p>${upcoming[i].course}</p>
    <p>Due: ${upcoming[i].date}</p>
    <p>Type: ${upcoming[i].type}</p>
  `;
  // Ensure the anchor behaves like a block-level card and looks like regular text
  card.style.display = 'block';
  card.style.color = 'inherit';
  card.style.textDecoration = 'none';
  container.appendChild(card);
}

/*adding dummy page link to the upcoming buttons(for testing purposes) */


