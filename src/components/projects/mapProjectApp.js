function about() {
  return (
    <>
      <p className="text-style">
        I started on this project in January-February of 2021 after learning
        React Native from an online course. It was relatively easy for me to
        learn React Native due to my background of Javascript and React. My plan
        for this project is to better understand the workflows of mobile
        development & the best practices involved.
      </p>
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

function github() {
  return "https://github.com/Jarrettgohh/React-Native-App";
}

export default {
  about,
  learnt,
  resources,
  github,
};
