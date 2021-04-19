function about() {
  return (
    <>
      <p className="text-style">
        This page serves as a timeline of my journey into exploring the Rust
        language!
      </p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        I have learnt the basics of the Rust language. This includes basic data
        types, loops, enums, structs, concepts of ownerships, computer memory
        systems such as stack & heap and more.
      </p>
    </>
  );
}

function resources() {
  return [
    {
      name: "Introduction to Rust",
      url: "https://doc.rust-lang.org/book/",
    },
  ];
}

function github() {
  return [
    {
      name: "learning_rust repo",
      url: "https://github.com/Jarrettgohh/learning_rust",
    },
  ];
}

//eslint-disable-next-line
export default {
  about,
  learnt,
  resources,
  github,
};
