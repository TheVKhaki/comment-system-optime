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
import model3dHendrik from "../images/3dmodel-characters/Henrik.glb";
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
    },
    {
      id: 2,
      className: "character-2",
      image: imgSina,
      layer: 1,
      order: 3,
      model3d: model3dSina,
      position: [0, -3, 0],
    },
    {
      id: 3,
      className: "character-3",
      image: imgHenrik,
      layer: 1,
      order: 1,
      model3d: model3dHendrik,
      position: [0, -3, 0],
    },
    {
      id: 4,
      className: "character-4",
      image: imgMohammad,
      layer: 1,
      order: 4,
      model3d: model3dMohammad,
      position: [0, -3, 0],
    },
    {
      id: 5,
      className: "character-5",
      image: imgMohammadreza,
      layer: 1,
      order: 2,
      model3d: model3dMohammadreza,
      position: [0, -3, 0],
    },
    {
      id: 6,
      className: "character-6",
      image: imgGirl1,
      layer: 2,
      order: 10,
      model3d: model3dGirl1,
      position: [0, -10, 0],
    },
    {
      id: 7,
      className: "character-7",
      image: imgMan1,
      layer: 2,
      order: 8,
      model3d: model3dMan2,
      position: [0, -3, 0],
    },

    {
      id: 8,
      className: "character-8",
      image: imgAmir,
      layer: 2,
      order: 6,
      model3d: model3dAmir,
      position: [0, -3, 0],
    },
    {
      id: 9,
      className: "character-9",
      image: imgMan2,
      layer: 2,
      order: 7,
      model3d: model3dMan1,
      position: [0, -3, 0],
    },
    {
      id: 10,
      className: "character-10",
      image: imgGirl2,
      layer: 2,
      order: 9,
      model3d: model3dGirl2,
      position: [0, -10, 0],
    },
  ];
};
export default Characters;
