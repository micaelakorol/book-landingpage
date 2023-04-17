import chrome from "../../../images/logo-chrome.svg";
import firefox from "../../../images/logo-firefox.svg";
import opera from "../../../images/logo-opera.svg";
import dots from "../../../images/bg-dots.svg";
const dataCard = {
  items: [
    {
      id: 1,
      title: "Add to Chrome",
      body: "Minimun version 62",
      image: (chrome),
      btn: "Add & Install extension",
      illustration: (dots)
    },
    {
      id: 2,
      title: "Add to Firefox",
      body: "Minimun version 55",
      image: (firefox),
      btn: "Add & Install extension",
      illustration: (dots),
      class: 'card-two'
    },
    {
      id: 3,
      title: "Add to Opera",
      body: "Minimun version 46",
      image: (opera),
      btn: "Add & Install extension",
      illustration: (dots),
      class: 'card-three'
    },
  ],
};
export default dataCard
