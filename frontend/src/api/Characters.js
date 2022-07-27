//images
import imgHans from "../images/characters/4.webp";
import imgMarvin from "../images/characters/10.webp";
import imgMichael from "../images/characters/7.webp";
import imgSam from "../images/characters/9.webp";
import imgJohnnie from "../images/characters/8.webp";
import imgPeter from "../images/characters/1.webp";
import imgGirl2 from "../images/characters/2.webp";
import imgGirl1 from "../images/characters/3.webp";
import imgMan1 from "../images/characters/5.webp";
import imgMan2 from "../images/characters/6.webp";
import model3dSam from "../images/3dmodel-characters/9.glb";
import model3dMarvin from "../images/3dmodel-characters/10.gltf";
import model3dHans from "../images/3dmodel-characters/4.glb";
import model3dMichael from "../images/3dmodel-characters/7.gltf";
import model3dJohnnie from "../images/3dmodel-characters/8.glb";
import model3dGirl1 from "../images/3dmodel-characters/2.glb";
import model3dMan1 from "../images/3dmodel-characters/5.glb";
import model3dPeter from "../images/3dmodel-characters/1.glb";
import model3dMan2 from "../images/3dmodel-characters/6.glb";
import model3dGirl2 from "../images/3dmodel-characters/3.glb";

const Characters = () => {
  return [
    {
      id: 1,
      idMobile: 2,
      className: "character-1",
      image: imgSam,
      layer: 1,
      order: 5,
      model3d: model3dSam,
      position: [0, -4, 0],
      env: "venice_sunset_1k_1.hdr",
      name: "Sam",
      job: "Head of Technology",
      abbrPosition: "",
      description:
        "A blockchain virtuoso, Sam, has 12 years of experience managing complex projects, using both local and offshore development teams. He is an expert in developing products in diverse fields such as finance, health technology, gaming and security platforms. Sam has been leading CTO and R&D operations on several tech start-ups over the years.",
      email: "mailto:Sam@qpoker.io",
      telegram: "",
      discord: "",
    },
    {
      id: 2,
      idMobile: 3,
      className: "character-2",
      image: imgMarvin,
      layer: 1,
      order: 3,
      model3d: model3dMarvin,
      position: [0, -4, 0],
      env: "venice_sunset_1k_2.hdr",
      name: "Marvin",
      job: "Lead Designer & Art Director",
      abbrPosition: "",
      description:
        "Marvin is a gifted artist and motion graphics designer. Well-deserved reputation is built on team leading skills with diverse animation productions, both in commercials and short films. He is known for unique expression style and can adapt fluently to any target audience. Marvin has more than ten years of experience cooperating with various advertising companies and medias. Visual effects and CGI animations behind our provoking meme teaser video are completely his handprint.",
      email: "mailto:Marvin@qpoker.io",
      telegram: "https://T.me/marvin_qpokerltd",
      discord: "",
    },
    {
      id: 3,
      idMobile: 1,
      className: "character-3",
      image: imgHans,
      layer: 1,
      order: 1,
      model3d: model3dHans,
      position: [0, -4, 0],
      env: "venice_sunset_1k_3.hdr",
      name: "Hans",
      job: " & Co-Founder ",
      abbrPosition: "CMO",
      description:
        "Hans is a visionaire with persistent entrepreneurial spirit. In 2011 he started his career with sports betting related affiliate marketing. Due to the burdensome gambling regulation, he ended up setting his company in Malta, which used to have Europe’s friendliest iGaming legislation at the time. Throughout the decade, Hans gained comperehensive expertise on iGaming industry, and eventually performed as a marketing strategist and director of product development in one of Malta’s leading iGaming companies.",
      email: "mailto:Hans@qpoker.io",
      telegram: "",
      discord: "",
    },
    {
      id: 4,
      idMobile: 4,
      className: "character-4",
      image: imgMichael,
      layer: 1,
      order: 4,
      model3d: model3dMichael,
      position: [0, -4, 0],
      env: "venice_sunset_1k_4.hdr",
      name: "Michael",
      job: " & Co-Founder",
      abbrPosition: "CPO",
      description:
        "Michael is an experienced IT entrepreneur and blockchain geek. He has extensive experience in software development, team management and business management. As an excellent strategist, Michael’s wide-ranging expertise and a strong drive towards excellence makes him a crucial player of our team. He is the one who’s never afraid of bringing up critical views on the table.",
      email: "mailto:Michael@qpoker.io",
      telegram: "https://T.me/Michael_QPLtd",
      discord: "",
    },
    {
      id: 5,
      idMobile: 5,
      className: "character-5",
      image: imgJohnnie,
      layer: 1,
      order: 2,
      model3d: model3dJohnnie,
      position: [0, -4, 0],
      env: "venice_sunset_1k_5.hdr",
      name: "Johnnie",
      job: " & Blockchain Expert",
      abbrPosition: "CTO",
      description:
        "Johnnie is a professional data analyst and blockchain enthusiast. He has all-around understanding over systems security and multi-model databases. In recent years, Johnnie has been working as a senior analyst of data management in major finance and e-commerce businesses.",
      email: "mailto:Johnnie@qpoker.io",
      telegram: "https://T.me/J_M_Martin",
      discord: "",
    },
    {
      id: 6,
      idMobile: 6,
      className: "character-6",
      image: imgGirl1,
      layer: 2,
      order: 10,
      model3d: model3dGirl1,
      position: [0, -13, 0],
      env: "venice_sunset_1k_6.hdr",
      name: "Vanessa",
      job: "Community Manager",
      abbrPosition: "",
      description:
        "Vanessa is a social media and digital strategist with agency and in-house background including over 9 years of digital and traditional PR and event marketing experience. Her expertise includes digital strategy, branded channel development, community management, integrated campaigns, social media relations, SEO, website management and online retail.",
      email: "mailto:Vanessa@qpoker.io",
      telegram: "",
      discord: "",
    },
    {
      id: 7,
      idMobile: 7,
      className: "character-7",
      image: imgMan1,
      layer: 2,
      order: 8,
      model3d: model3dMan2,
      position: [0, -4, 0],
      env: "venice_sunset_1k_7.hdr",
      name: "Arne",
      job: "Investor & iGaming Specialist",
      abbrPosition: "",
      description:
        "Arne is a venture capitalist and iGaming veteran. He launched one of the first online poker rooms on iPoker Network back in the early 2000s. He sold his share of the business in 2008 and subsequently has been financing several ambitious iGaming start-ups.",
      email: "mailto:arne@qpoker.io",
      telegram: "",
      discord: "",
    },

    {
      id: 8,
      idMobile: 8,
      className: "character-8",
      image: imgPeter,
      layer: 2,
      order: 6,
      model3d: model3dPeter,
      position: [0, -5, 0],
      env: "venice_sunset_1k_8.hdr",
      name: "Peter",
      job: "Chief Executive Officer",
      abbrPosition: "CEO",
      description:
        "Peter is an experienced IT entrepreneur and security expert. He has extensive experience in the field of software development, team leading and business management. In the iGaming field, Peter made a long career in management positions in Betsson, which is the largest multi-national gambling company in Europe, employing over 1,800 people from 55 nationalities.",
      email: "mailto:Peter@qpoker.io",
      telegram: "",
      discord: "",
    },
    {
      id: 9,
      idMobile: 9,
      className: "character-9",
      image: imgMan2,
      layer: 2,
      order: 7,
      model3d: model3dMan1,
      position: [0, -4, 0],
      env: "venice_sunset_1k_9.hdr",
      name: "Eyvind",
      job: "UI/UX Designer",
      abbrPosition: "",
      description:
        "Eyvind has been a multifaceted designer from the high school years. He’s been working together with several crypto start-ups, creating fresh and engaging DApps. He believes that a felicitous design engages you with a good spirit. He fiercely emphasizes QPoker’s vision, to build a first-class user experience no other iGaming platform has ever reached out. Eyvind is one of the early members of our team and has been participating in QPoker’s brand designing from the very beginning.",
      email: "mailto:Eyvind@qpoker.io",
      telegram: "",
      discord: "",
    },
    {
      id: 10,
      idMobile: 10,
      className: "character-10",
      image: imgGirl2,
      layer: 2,
      order: 9,
      model3d: model3dGirl2,
      position: [0, -13, 0],
      env: "venice_sunset_1k_10.hdr",
      name: "Ashley",
      job: "Creative Director",
      abbrPosition: "",
      description:
        "Ashley is an eccentric creative genius. Her anarchist soul’s flow of life comes from breaking status quo. She doesn’t make compromises on her artistic visions. To put it briefly, it is her way or the highway. Most likely if you gonna find NSFW content from our marketing approaches, she’s the one to be blamed. As a sample, QPoker’s brutal meme teaser script is entirely written by Her Highness.",
      email: "mailto:Ashley@qpoker.io",
      telegram: "",
      discord: "",
    },
  ];
};
export default Characters;
