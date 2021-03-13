function about() {
  return (
    <>
      <p className="text-style">
        I started on this project in January-February of 2021 after learning
        React Native from an online course. It was relatively easy for me to
        learn React Native due to my background of Javascript and React. My plan
        for this project is to better understand the workflows of mobile
        development and the best practices involved.
      </p>
    </>
  );
}

function examples() {
  return [{ name: "Map some activities!", url: "https://youtube.com" }];
}

function problems() {
  return (
    <>
      <p className="text-style"></p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        From this project, I have learnt that for a particular project; with
        mobile and website requirements, the same backend server used for
        websites can be used for the mobile version too. This is due to the
        basis of RESTful APIs that would query the same url endpoints.
      </p>
    </>
  );
}

function resources() {
  return [
    {
      name: "React Native Course",
      url: "https://codewithmosh.com/p/the-ultimate-react-native-course",
    },
  ];
}

function packages() {
  return [
    {
      name: "RN-draggable-bottom-sheet",
      url:
        "https://www.npmjs.com/package/@react-native-tools/rn-draggable-bottom-sheet",
    },
  ];
}

function github() {
  return [{ url: "https://github.com/Jarrettgohh/React-Native-App" }];
}

//eslint-disable-next-line
export default {
  about,
  examples,
  problems,
  learnt,
  resources,
  github,
  packages,
};
