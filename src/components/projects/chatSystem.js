import AWSVideo from "../../videos/chat-system-AWS.mp4";

function note() {
  return "Due to some issues with the AWS Server after I changed the access keys, the service is not working as expected (To be fixed soon!). However, do check out the video example ;) ! Due to some flaws for the Heroku version, it would not be shown yet.";
}

function videos() {
  return [{ name: "Chat System With AWS", url: AWSVideo }];
}

function about() {
  return (
    <>
      <p className="text-style">
        There are two versions of the chat system, one is hosted with Heroku and
        another with AWS. I started experimenting with real time communication
        with web sockets using the Socket.io library in Node Js locally first,
        before hosting it on the cloud with Heroku afterwards. This was in
        October of 2020.
      </p>
      <p className="text-style">
        I started trying to host it with AWS in November of 2020 after learning
        the basics of web hosting for both front and backend on AWS Amplify
        using the lambda functions. Chat systems have always amazed me, and I
        have always wondered how it works with the real time communication,
        updates and all. Thus, this project gave me an insightful experience
        into the workings/technologies behind web sockets and how it is used to
        provide real time functionalities.
      </p>
    </>
  );
}

// function examples() {
//   return [
//     {
//       name: "Chat System AWS",
//       url: "https://master.d2aw5uc742d1w4.amplifyapp.com/",
//     },
//   ];
// }

function problems() {
  return (
    <>
      <p className="text-style">
        One problem I faced when hosting my backend with Heroku, is that due to
        the lack of server in the asian regions, an individual based in the
        asian regions; with users mostly from there too, has to host their
        content at servers located in the european side.
      </p>
      <p className="text-style">
        In my experience, this can cause server response time; which is a
        crucial factor for websocket/real time technologies, to be slower. This
        can cause the user experience to be worsen, which would negatively
        impact the image of the application.
      </p>
      <p className="text-style">
        As for hosting with AWS, it is comparably faster compared to Heroku, due
        to the availability of servers in the Asian, or to be more specific, the
        ASEAN region. However, a problem I faced is that the setup process when
        hosting with AWS is tough, and the documentations are confusing for a
        beginner/first time user like myself. This is not a problem for Heroku,
        as the process is relatively easier in my opinion.
      </p>
    </>
  );
}

function learnt() {
  return (
    <>
      <p className="text-style">
        From this project, I have learnt about Socket.io and the AWS Websocket
        API Gateway function such as the logic behind it and how it can be used
        to provide two-way real time connections, rather than the traditional
        HTTP methods which only supports one-way communications.
      </p>
      <p className="text-style">
        I have learnt that the websocket api can be used for many applications;
        not only for chat systems, but also for social media updates,
        multiplayer games or even for collaborative coding or document editing.
      </p>
    </>
  );
}

function tech() {
  return [
    "React Js",
    "Node Js",
    "Socket.io",
    "Heroku",
    "AWS Amplify",
    "AWS lambda function",
    "AWS Websocket API Gateway",
    "MongoDB",
  ];
}

function resources() {
  return [
    {
      name: "About AWS Websocket API Gateway",
      url:
        "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html",
    },
    {
      name: "AWS ApiGateWayManagementAPI",
      url:
        "https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayManagementApi.html",
    },
    {
      name: "Socket.io",
      url: "https://socket.io/docs/v3",
    },
  ];
}

// function github() {
//   return [
//     {
//       name: "Hosted with AWS",
//       url: "https://github.com/Jarrettgohh/Chat-System-AWS-Amplify",
//     },
//     {
//       name: "Frontend hosted with Heroku",
//       url: "https://github.com/Jarrettgohh/Chat-System-Heroku",
//     },
//     {
//       name: "Backend hosted with Heroku",
//       url: "https://github.com/Jarrettgohh/Chat-System-Backend-Heroku",
//     },
//   ];
// }

//eslint-disable-next-line
export default {
  note,
  videos,
  about,
  // examples,
  problems,
  learnt,
  tech,
  resources,
  // github,
};
