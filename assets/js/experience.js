AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder of HG VisuaLab",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "HG VisuaLab",
    time: "(March, 2024 - Present)",
    desp: "<li>Founded HG Visualab: 2024</li> <li>Successfully launched and managed 150 projects for clients in various industries.</li> <li>Expertise in logo design, branding, web design, social media graphics.</li> <li>Proven track record of delivering high-quality, visually impactful designs.</li> <li>Collaborated with diverse teams to achieve project goals.</li> <li>Received 136 positive client testimonials.</li>",
  },
  {
    title: "Designer at AG Textile",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "AG Textile",
    time: "(May, 2020 - Present)",
    desp: "<li> Developed unique and visually appealing designs for a variety of textile-related projects.</li> <li>Contributed to the creation of a strong brand identity for AG Textile.</li> <li>Created visually stunning product photography to showcase AG Textile's fabric offerings.</li> <li>Marketing Materials: Designed marketing materials such as brochures, catalogs, and social media graphics.</li> <li>Stayed up-to-date with industry trends to deliver innovative and effective designs.</li>",
  },
  {
    title: "WeeTech Solution Pvt Ltd Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Weetech Solution",
    time: "(July - November, 2023)",
    desp: "<li>Worked on the project clone of YouTube using React Js.</li><li>Master modern web development by building a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
