function note() {
  return "This project is not completed, as its a relatively new one and I'm still experimenting with it ;)";
}

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

function problems() {
  return (
    <>
      <p className="text-style">
        A problem I faced while working on this project was learning the design
        structure/convention of mobile apps. React Native uses a styling
        method/syntax that is similar to React Js which uses CSS for its
        designs, but is not entirely the same as the structure is a little
        different. Thus a problem that I had to deal with was to get used to the
        way React Native styling works.
      </p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        From this project, I have learnt the design structure for mobile apps
        and how it differs from websites. Due to my past knowledge in React Js,
        I managed to understand React Native relatively fast and a framework
        that I have learnt too is Expo. React Native allowed me to not deal with
        native languages such as Swift/Obj-c and Java/Kotlin, however I have
        learnt a little of them to understand how React Native itself works too,
        due to it being built on top of native langugages.
      </p>
      <p className="text-style">
        I have also learnt that for a particular project; with mobile and
        website requirements, the same backend server used for websites can be
        used for the mobile version too. This is due to the basis of RESTful
        APIs that would query the same url endpoints.
      </p>
    </>
  );
}

function tech() {
  return ["React Native", "Expo", "Node Js"];
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
  note,
  about,
  problems,
  learnt,
  resources,
  tech,
  github,
  packages,
};
