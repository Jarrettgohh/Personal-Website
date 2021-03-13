function about() {
  return (
    <>
      <p className="text-style">
        I started on this project in June of 2019. As a Badminton player myself,
        inevitably I have to book courts to play. However, the process of
        finding courts is very painstaking and tedious, as I have to check the
        different locations one by one. The inspiration behind this project is
        to ease the process of finding courts & to also practice on my Python
        skills.
      </p>
      <p className="text-style">
        The Requests module was used to send HTTP requests to the onePA website;
        GET requests in this case. The response would be content, encoding,
        status and more. However, what is the important is the content, which
        would be HTML formatted.
      </p>
      <p className="text-style">
        The content would then be passed into the Beautiful Soup library with a
        html parser. This library would then allow the code to extract
        informations such as html tags and contents. These data is then used to
        provide informations of court availabilities.
      </p>
    </>
  );
}

function examples() {
  return [
    { name: "Let's find some Badminton Courts!", url: "https://youtube.com" },
  ];
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
        From this project, I have learnt two libraries namely the Python
        Requests & Beautiful Soup modules. Using these libraries allowed me to
        gain a deeper understanding of how HTTP requests works such as the GET
        requests. I have also learnt more about the HTML syntax and how it is
        used to display informations.
      </p>
      <p className="text-style">
        Another key takeaway would be being able to practice my Python scripting
        skills & to understand more about the syntax of Python. This project
        have gave me knowledgable insides on how useful & fun automations can be
        ;)
      </p>
    </>
  );
}

function resources() {
  return [
    { name: "Requests", url: "https://requests.readthedocs.io/en/master/" },
    {
      name: "Beautiful Soup",
      url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
    },
  ];
}

function github() {
  return [
    {
      url:
        "https://github.com/Jarrettgohh/Onepa-Badminton-Courts-Finder-Python",
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
