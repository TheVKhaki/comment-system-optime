//images
import imgHenrik from "../images/characters/henrik.png";
import imgSina from "../images/characters/sina.png";
import imgMohammad from "../images/characters/mohammad.png";
import imgSam from "../images/characters/sam.png";
import imgMohammadreza from "../images/characters/mohammadreza.png";
import imgAmir from "../images/characters/amir.png";
import imgGirl2 from "../images/characters/girl1.png";
import imgGirl1 from "../images/characters/girl2.png";
import imgMan1 from "../images/characters/man1.png";
import imgMan2 from "../images/characters/man2.png";
import model3dSam from "../images/3dmodel-characters/sam.glb";
import model3dSina from "../images/3dmodel-characters/sina.glb";
import model3dHenrik from "../images/3dmodel-characters/Henrik.glb";
import model3dMohammad from "../images/3dmodel-characters/mohammad.glb";
import model3dMohammadreza from "../images/3dmodel-characters/mr.glb";
import model3dGirl1 from "../images/3dmodel-characters/G01.glb";
import model3dMan1 from "../images/3dmodel-characters/man1.glb";
import model3dAmir from "../images/3dmodel-characters/amir.glb";
import model3dMan2 from "../images/3dmodel-characters/man2.glb";
import model3dGirl2 from "../images/3dmodel-characters/G02.glb";

const Characters = () => {
  return [
    {
      id: 1,
      className: "character-1",
      image: imgSam,
      layer: 1,
      order: 5,
      model3d: model3dSam,
      position: [0, -3, 0],
      env: "venice_sunset_1k_sam.hdr",
      name: "Sam",
      job: "Head of Technology",
      abbrPosition: "",
      description:
        "Sam has 12 years of experience managing complex projects, a blockchain virtuoso using local and offshore development teams. Expert in developing products in diverse fields such as finance, health technology, gaming, and security platforms. Founder and co-founder of start-ups, leading the CTO, R&D, and operations activities.",
      email: "Sam@qpoker.io",
    },
    {
      id: 2,
      className: "character-2",
      image: imgSina,
      layer: 1,
      order: 3,
      model3d: model3dSina,
      position: [0, -3, 0],
      env: "venice_sunset_1k_sina.hdr",
      name: "Matthew",
      job: "Lead Designer & Art Director",
      abbrPosition: "",
      description:
        "Matthew is a gifted artist and a motion graphics designer. His expertise is best known for his team-leading skills with animation productions in commercials and short films. He has a unique expression style and can adapt fluently to the audience of choice. Matthew spent three years gaining expertise in one of the biggest advertising agencies in Osaka. Animations behind our provoking meme teaser are complete results of his handprints.",
      email: "Matthew@qpoker.io",
    },
    {
      id: 3,
      className: "character-3",
      image: imgHenrik,
      layer: 1,
      order: 1,
      model3d: model3dHenrik,
      position: [0, -3, 0],
      env: "venice_sunset_1k_henrik.hdr",
      name: "Fredrik",
      job: "Co-Founder ",
      abbrPosition: "CMO",
      description:
        "Fredrik is a social media and digital strategist with an agency and in-house background, including over nine years of digital and traditional PR and event marketing experience. His expertise includes digital strategy, branded channel development, community management, integrated campaigns, social media relations, training, SEO, website management, and online retail.",
      email: "Fredrik@qpoker.io",
    },
    {
      id: 4,
      className: "character-4",
      image: imgMohammad,
      layer: 1,
      order: 4,
      model3d: model3dMohammad,
      position: [0, -3, 0],
      env: "venice_sunset_1k_mohammad.hdr",
      name: "Michael",
      job: "Co-Founder",
      abbrPosition: "CPO",
      description:
        "Michael is an experienced IT entrepreneur. He has extensive experience in software development, team management, and business management. As an excellent strategist, Michael’s wide-ranging expertise and a strong drive toward excellence make him a key team player. He is the one who’s never afraid of bringing up critical points of view on the table.",
      email: "Michael@qpoker.io",
    },
    {
      id: 5,
      className: "character-5",
      image: imgMohammadreza,
      layer: 1,
      order: 2,
      model3d: model3dMohammadreza,
      position: [0, -3, 0],
      env: "venice_sunset_1k_mohammadreza.hdr",
      name: "Johnnie",
      job: "Blockchain Expert",
      abbrPosition: "",
      description:
        "Johnnie is a professional data analyst and blockchain enthusiast. He has a comprehensive understanding of systems security and significant database processing. Johnnie has managed dozens of challenging web projects in various fields such as finance, gaming, insurance, and more.",
      email: "Johnnie@qpoker.io",
    },
    {
      id: 6,
      className: "character-6",
      image: imgGirl1,
      layer: 2,
      order: 10,
      model3d: model3dGirl1,
      position: [0, -10, 0],
      env: "venice_sunset_1k_girl1.hdr",
      name: "Vanessa",
      job: "Community Manager",
      abbrPosition: "",
      description:
        "Vanessa is a social media and digital strategist with an agency and in-house background, including over nine years of digital and traditional PR and event marketing experience. Her expertise includes digital strategy, branded channel development, community management, integrated campaigns, social media relations, training, SEO, website management, and online retail.",
      email: "Vanessa@qpoker.io",
    },
    {
      id: 7,
      className: "character-7",
      image: imgMan1,
      layer: 2,
      order: 8,
      model3d: model3dMan2,
      position: [0, -3, 0],
      env: "venice_sunset_1k_man1.hdr",
      name: "Arnold",
      job: "Investor & iGaming Specialist",
      abbrPosition: "",
      description:
        "Arnold is a venture capitalist and iGaming veteran. He launched one of the first online poker rooms on iPoker Network in the early 2000s. He sold his share of the business in 2008 and has been financing several aspiring iGaming start-ups since then. ",
      email: "arnold@qpoker.io",
    },

    {
      id: 8,
      className: "character-8",
      image: imgAmir,
      layer: 2,
      order: 6,
      model3d: model3dAmir,
      position: [0, -3, 0],
      env: "venice_sunset_1k_amir.hdr",
      name: "Peter",
      job: "Chief Executive Officer",
      abbrPosition: "CEO",
      description:
        "Peter is an experienced IT entrepreneur and security expert. He has extensive experience in software development, team leadership, and business management. In the iGaming field, Peter made a long career in management positions in Betsson, the largest multi-national gambling company in Europe, employing over 1,800 people from 55 nationalities.",
      email: "Peter@qpoker.io",
    },
    {
      id: 9,
      className: "character-9",
      image: imgMan2,
      layer: 2,
      order: 7,
      model3d: model3dMan1,
      position: [0, -3, 0],
      env: "venice_sunset_1k_man2.hdr",
      name: "Hans",
      job: "UI/UX Designer",
      abbrPosition: "",
      description:
        "Hans has been a multifaceted designer from a young age. He’s been working with several crypto start-ups to create fresh and engaging DApps. He believes that a felicitous design engages you with a good spirit. With QPoker, he shares only one vision, to build a masterly user experience no other iGaming platform has ever reached out to. Hans is one of our earliest members as he has been participating in the QPoker’s design work from the very beginning.",
      email: "Hans@qpoker.io",
    },
    {
      id: 10,
      className: "character-10",
      image: imgGirl2,
      layer: 2,
      order: 9,
      model3d: model3dGirl2,
      position: [0, -10, 0],
      env: "venice_sunset_1k_girl2.hdr",
      name: "Ashley",
      job: "Creative Director",
      abbrPosition: "",
      description:
        "Eccentric creative genius. Ashley is an uninhibited anarchist whose flow of life comes from breaking taboos. To put it briefly, it is Ashley’s way or the highway. She doesn’t make compromises on her artistic visions. Most likely, if you find NSFW content from our marketing approach, she’s the one to be blamed. For instance, QPoker’s meme teaser script was entirely in her handwriting. ",
      email: "Ashley@qpoker.io",
    },
  ];
};
export default Characters;
