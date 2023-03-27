const navContent =`
  <li><a class="btn" href="https://eecheve.github.io/emmanuel_echeverri/index.html">Home</a></li>
  <li><a class="btn" href="https://eecheve.github.io/emmanuel_echeverri/html/portfolio.html">Portfolio</a></li>
  <li><a class="btn" href="https://eecheve.github.io/emmanuel_echeverri/html/experience.html">Experience</a></li>
  <li><a class="btn" href="https://eecheve.github.io/emmanuel_echeverri/html/education.html">Education</a></li>
  <li><a class="btn" href="https://eecheve.github.io/emmanuel_echeverri/html/publications.html">Publications</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("navigation");

const navList = document.createElement("ul");
navList.classList.add("panel");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".nav_panel").append(mainNav);