import React from "react";

function App() {
  return (
    <React.Fragment>
      <div style={{ marginBottom: 80, padding: 20 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
          style={{ height: 120 }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
          style={{ height: 120 }}
        />
        <img
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          style={{ height: 120 }}
        />
        <img
          src="https://img.favpng.com/11/9/21/scalable-vector-graphics-javascript-python-logo-png-favpng-tKyB5ctiXpKLLQAf8tKx9kjyi.jpg"
          style={{ height: 120 }}
        />
      </div>
      <div style={{ padding: 20 }}>
        <h1>About myself</h1>
        <p style={{ fontSize: 20 }}>
          Hello! My name is Jarrett Goh and I am a student taking a course in
          engineering of Nanotechnology & Materials Science in Nanyang
          Polytechnic.
        </p>
        <p style={{ fontSize: 20 }}>
          During my free time, I love playing sports such as Badminton,
          exercising and doing computer programming!
        </p>
        <p style={{ fontSize: 20 }}>
          I got my love for programming during the first year of my studies in
          polytechnic, when I took computer programming as one of my modules. My
          programming language of interest includes Javascript for web/mobile
          and Python for automations and data science. My plan for the future is
          to find a way to combine Nanotechnology, Artifical Intelligence and
          Automated programming together!
        </p>
      </div>
      <div style={{ padding: 20 }}>
        <h1 style={{ fontSize: 30 }}>Citations for images used</h1>
        <p style={{ fontSize: 18 }}>
          https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png
          (Javascript logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png
          (React.JS logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png
          (Node.JS logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://img.favpng.com/11/9/21/scalable-vector-graphics-javascript-python-logo-png-favpng-tKyB5ctiXpKLLQAf8tKx9kjyi.jpg
          (Python logo)
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
