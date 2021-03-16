function note() {
  return "This was my first actual serious programming project that I have worked on, thus there may be some bad practices in the codes and other flaws too.";
}

function about() {
  return (
    <>
      <p className="text-style">
        I started on this project during Singapore's Circuit Breaker of the
        COVID-19 pandemic. This was the first Javascript, HTML and CSS project I
        have worked on after learning the basics of these languages. This
        project was started just as a simple experimental project due to the
        boredom from the lockdown.
      </p>
      <p className="text-style">
        Despite the steep learning curve of game development with Javascript, I
        have managed to learn and implement the basics of it from online
        resources such as educational websites, Youtube and W3schools. However,
        I couldn't find all the videos or websites I have learnt from, thus
        would not be able to list all.
      </p>
    </>
  );
}

function examples() {
  return [{ name: "Move some characters!", url: "https://youtube.com" }];
}

function problems() {
  return (
    <>
      <p className="text-style">
        A problem I faced while working on this project was understanding how
        Javascript works to communicate with HTML and how it can be used to
        render animations on the screen. Due to the nature of user input games,
        another issue I faced was on how to link the user inputs with the
        movements of game characters.
      </p>
      <p className="text-style">
        As the first few examples of games I made are just made up of colored
        boxes made with simple CSS, I found it a little boring. Thus, I wanted
        to use images instead. However, this brought another problem, where the
        images must be cropped properly and coordinated for the animation of the
        images to work.
      </p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        From this project, I have learnt various skills not only limited to
        programming; but also how to use basic design softwares and logics
        behind games. This includes how user inputs are translated to movements
        in the game characters using programming logics, using images called
        sprites to make frame by frame movements of characters and also how to
        properly crop images using design softwares.
      </p>
      <p className="text-style">
        As for the programming part, I have learnt how to use various Javascript
        methods such as canvas drawImage() and requestAnimationFrame(). I have
        also learnt the basics of CSS design and how HTML are used to render
        elements on screen and how these elements can be controlled with
        Javascript.
      </p>
    </>
  );
}

function tech() {
  return ["Javascript", "HTML", "CSS"];
}

function resources() {
  return [
    {
      name: "W3schools requestAnimationFrame()",
      url: "https://www.w3schools.com/js/js_htmldom_animate.asp",
    },
    {
      name: "W3schools drawImage()",
      url: "https://www.w3schools.com/tags/canvas_drawimage.asp",
    },
    {
      name: "W3schools Game Basics",
      url: "https://www.w3schools.com/graphics/game_intro.asp",
    },
  ];
}

function github() {
  return [{ url: "https://github.com/Jarrettgohh" }];
}

//eslint-disable-next-line
export default {
  note,
  about,
  examples,
  problems,
  learnt,
  tech,
  resources,
  github,
};
