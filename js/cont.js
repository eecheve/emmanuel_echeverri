const navContent =`
  <li style="list-style-image: url('icons/gmail.png')"><a class="contact_item" href="mailto:ei.echeverri2@gmail.com">ei.echeverri2@gmail.com</a></li>
  <li style="list-style-image: url('icons/github.png')"><a class="contact_item" href="https://github.com/eecheve">GitHub</a></li>
  <li style="list-style-image: url('icons/orcid.png')"><a class="contact_item" href="https://orcid.org/0000-0002-5199-897X">ORCID</a></li>
  <li style="list-style-image: url('icons/linkedin.png')"><a class="contact_item" href="https://linkedin.com/in/emmanuel-echeverri-jimenez/">LinkedIn</a></li>
  <li style="list-style-image: url('icons/twitter.png')"><a class="contact_item" href="https://twitter.com/eiecheverri">Twitter</a></li>
`;

const mainNav = document.createElement("cont");
mainNav.classList.add("contact");

const navList = document.createElement("ul");
navList.classList.add("footer_panel");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".contact_info").append(mainNav);