function note() {
  return "Click anywhere on the canvas of the binary rain to see the change in color!";
}

function about() {
  return (
    <>
      <p className="text-style">
        This was a random small project that was done sometime in early of 2020.
        I was watching videos of scenes in the movie Matrix, and I suddenly
        remembered the cool binary rain falling effect from that movie, which I
        always wanted to try and make. So I searched up Youtube for tutorials on
        this, and tried to make it work. I modified the original code a little
        to make the cool effect of changing colors on click of the screen.
      </p>
      <p className="text-style">
        I also tried to make the cool text animation effect, where the text
        would appear on its own in a certain manner; appearing like the computer
        was talking.
      </p>
    </>
  );
}

function examples() {
  return [
    {
      name: "Wanna see some cool matrix stuff?!",
      url: "https://jarrettgohh.github.io/Cool-Matrix-Stuff/",
    },
  ];
}

function learnt() {
  return (
    <>
      <p className="text-style">
        From this project, I have learnt how to better utilise Javascript
        methods such as loops so as to allow for the effects that are rendered.
        Another important skill I have learnt is how Javascript is able to be
        linked and communicate with HTML to control how the elements are
        rendered.
      </p>
      <p className="text-style"></p>
    </>
  );
}

function resources() {
  return [
    {
      name: "Binary rain tutorial",
      url: "https://www.youtube.com/watch?v=nWZGbZ1nBKM&ab_channel=TADevelops",
    },
  ];
}

function github() {
  return [
    {
      url: "https://github.com/Jarrettgohh/Cool-Matrix-Stuff",
    },
  ];
}

//eslint-disable-next-line
export default {
  note,
  about,
  examples,
  learnt,
  resources,
  github,
};
