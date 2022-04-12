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
import model3dHendrik from "../images/3dmodel-characters/Henrik-lgt33.glb";
const Characters = () => {
  return [
    {
      id: 1,
      className: "character-1",
      image: imgSam,
      layer: 1,
      order: 5,
      model3d: model3dHendrik,
    },
    {
      id: 2,
      className: "character-2",
      image: imgSina,
      layer: 1,
      order: 3,
      model3d: model3dHendrik,
    },
    {
      id: 3,
      className: "character-3",
      image: imgHenrik,
      layer: 1,
      order: 1,
      model3d: model3dHendrik,
    },
    {
      id: 4,
      className: "character-4",
      image: imgMohammad,
      layer: 1,
      order: 4,
      model3d: model3dHendrik,
    },
    {
      id: 5,
      className: "character-5",
      image: imgMohammadreza,
      layer: 1,
      order: 2,
      model3d: model3dHendrik,
    },
    {
      id: 6,
      className: "character-6",
      image: imgGirl1,
      layer: 2,
      order: 10,
      model3d: model3dHendrik,
    },
    {
      id: 7,
      className: "character-7",
      image: imgMan1,
      layer: 2,
      order: 8,
      model3d: model3dHendrik,
    },

    {
      id: 8,
      className: "character-8",
      image: imgAmir,
      layer: 2,
      order: 6,
      model3d: model3dHendrik,
    },
    {
      id: 9,
      className: "character-9",
      image: imgMan2,
      layer: 2,
      order: 7,
      model3d: model3dHendrik,
    },
    {
      id: 10,
      className: "character-10",
      image: imgGirl2,
      layer: 2,
      order: 9,
      model3d: model3dHendrik,
    },
  ];
};
export default Characters;
