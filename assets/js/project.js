AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Logo: AG Textile",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "Fashion Logo"
  },
  {
    title: "Logo: Uthkrishtam Fashion",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "Fashion Logo"
  },
  {
    title: "Logo: CodeCraft",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Coder Logo"
  },
  {
    title: "YouTube Clone",
    cardImage: "assets/images/project-page/utube.png",
    description: "YouTube Clone using React Js."
  },
  {
    title: "Logo: VR Cosmetic",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Cosmetic Logo"
  },
  {
    title: "Web Scarping",
    cardImage: "assets/images/project-page/webscarp.png",
    description: "Web Scarping using Python"
  },
  {
    title: "Result Management",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Develop using a React and MongoDB."
  },
  {
    title: "E-Learning Platform",
    cardImage: "assets/images/project-page/book.png",
    description: "Learning Platform using PHP."
  },
  {
    title: "Quiz App",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Quiz using JavaScipt."
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python."
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Python."
  },
  {
    title: "Music Application",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Java and Android Studio."
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description}) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title">${title}</h1>
                </div>
            		<ul class="menu-content"><br>
			<li>${description}</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
