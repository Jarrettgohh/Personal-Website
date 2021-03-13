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
      url: "https://youtube.com",
    },
  ];
}
function problems() {
  return (
    <>
      <p className="text-style"></p>
      <p className="text-style"></p>
      <p className="text-style"></p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style"></p>
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
      name: "Matrix stuff",
      url: "https://github.com/Jarrettgohh/Binary-Rain",
    },
  ];
}

//eslint-disable-next-line
export default {
  about,
  examples,
  problems,
  learnt,
  resources,
  github,
};
