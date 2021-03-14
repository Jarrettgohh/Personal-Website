function note() {
  return "The activities shown on the website are not actual activites and are made up by me :)";
}

function about() {
  return (
    <>
      <p className="text-style">
        This website provides a simple platform for users to place activities on
        a map for others to find and join them. I started on this project in
        July-August of 2020 after I finished a course on a React Js course. As
        this was my first website project using React, I was able to experience
        the basic web development experince processes such as planning of
        design, implementation of it and to refactor the code to make them more
        readable by other developers. This project includes good and industry
        standard practices such as clean code syntaxing, reusable component,
        responsive/clean design using React-Bootstrap and basic web security
        such as usage of JWT. After finishing on the frontend of this project, I
        went on to take a Node Js course to develop the backend. Despite
        imperfections in areas, I would strive to make it better by continue
        researching and improving on my web development workflow.
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
      <p className="text-style">
        A problem I faced when working on this project was the responsive design
        structure. Back when I first started on web development with React, I
        had no idea on the idea of responsive design. However, I quickly
        realised its importance when I tried to view the website on my smaller
        laptop and mobile phone screens.
      </p>
      <p className="text-style">
        Another problem that I faced was the understanding of how APIs works,
        for example the Google Maps Javascript API. Despite knowing the basics
        of how it works, I still wasn't exactly sure of how it can be used to
        render applications or how I could interact with it.
      </p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        To solve the responsive design issue, after extensive research about the
        principles of it, I have managed to learnt more about CSS through the
        use of Bootstrap. I used Bootstrap to implement responsive design to
        make the website look presentable on various screen sizes. Other areas
        of responsive design learnt include usage of responsive units such as
        rem, em vh and vw, and also usage of media queries to allow dynamic font
        scaling for different screen sizes to allow for the most responsive and
        presentable design/interface.
      </p>
      <p className="text-style">
        I was also able to apply my knowledge of reusable components to allow
        for a clean/readable code syntax that would be easily maintanable by
        future developers who joins the project. Web security was another key
        factor that I was able to apply in this project to better improve the
        security such as usage of JWT tokens to protect the originality of the
        data/requests from server through the use of signatures.
      </p>
      <p className="text-style">
        Another key takeaway from this project would be that I have developed a
        deeper understanding of how API works through the use of Google Maps
        Javascript API to display a map on the website. I have experimented with
        building an NPM package to display google maps.
      </p>
    </>
  );
}

function resources() {
  return [
    {
      name: "React Js course",
      url: "https://codewithmosh.com/p/mastering-react",
    },
    {
      name: "React Bootstrap",
      url: "https://react-bootstrap.github.io/",
    },
    {
      name: "Node Js Course",
      url: "https://codewithmosh.com/p/the-complete-node-js-course",
    },
  ];
}

function github() {
  return [{ url: "https://github.com/Jarrettgohh/Jarrettgoh.github.io" }];
}

//eslint-disable-next-line
export default {
  note,
  about,
  examples,
  problems,
  learnt,
  resources,
  github,
};
