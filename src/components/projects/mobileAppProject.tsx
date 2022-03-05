function note() {
  return "The Github page for this project is private, but a link is provided on the top to show a basic example. Unforunately, the mobile app project can only be run on Android using the Expo Go app as of now.";
}

function about() {
  return (
    <>
      <p className="text-style">
        I got an idea for a mobile app in January-February of 2021. However, due
        to the lack of knowledge in app development, I was unable to immediately
        start building the prototype. Prior to this, I was working on a web
        development project, which involves server and cloud side development in
        Node.js (Express.js) too. Thus, along with my Node.js server side
        knowledge, I started to learn React Native for mobile app development.
        The course I had enrolled in is Mosh's Ultimate React Native course (
        <a
          href="https://codewithmosh.com/p/the-ultimate-react-native-course"
          target="_blank"
          rel="noreferrer"
        >
          https://codewithmosh.com/p/the-ultimate-react-native-course
        </a>
        . The framework used in the course is Expo (
        <a href="https://docs.expo.dev/" target="_blank" rel="noreferrer">
          https://docs.expo.dev
        </a>
        ).
      </p>
      <p className="text-style">
        Besides the course, I have also actively read documentations and
        articles about various frameworks and concepts such as{" "}
        <strong>React Navigation</strong>, <strong>custom React hooks</strong>,
        and have been experimenting with other Expo libraries. My plan for this
        project is to better understand the workflows of mobile development and
        the best practices involved.
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
  return [
    "TypeScript",
    "React Native",
    "Expo",
    "Node.js (Express.js)",
    "AWS DynamoDB",
    "AWS S3",
    "AWS Lambda",
  ];
}

function examples() {
  return [
    {
      name: "Expo app example - To be ran from Expo Go app",
      url: "https://expo.dev/@jarrett_goh/mapitin-mobile-app?serviceType=classic&distribution=expo-go",
    },
  ];
}

function resources() {
  return [
    {
      name: "React Native Course",
      url: "https://codewithmosh.com/p/the-ultimate-react-native-course",
    },
    {
      name: "Expo.dev Documentation",
      url: "https://docs.expo.dev/",
    },
    {
      name: "React Navigation Documentation",
      url: "https://reactnavigation.org/docs/getting-started/",
    },
  ];
}

//eslint-disable-next-line
export default {
  note,
  about,
  problems,
  learnt,
  tech,
  examples,
  resources,
};
