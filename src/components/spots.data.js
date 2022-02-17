import coverImage from "../assets/images/illustration-hero.svg";
import tabImage1 from "../assets/images/illustration-features-tab-1.svg";
import tabImage2 from "../assets/images/illustration-features-tab-2.svg";
import tabImage3 from "../assets/images/illustration-features-tab-3.svg";

const moreInfoButton = { title: "More Info", variant: "soft-blue-button" };

export const cover = {
  title: "A simple Bookmark manager",
  content:
    " A clean and Simple interface to organize your favorite websites. Open a new browser tab  and see your sites load instantly. try for free",
  image: coverImage,
  buttons: [
    {
      title: "Get in Chrome",
      variant: "soft-blue-button",
    },
    {
      title: "Get in Chrome",
    },
  ],
  align: "right",
  titleSize: "big-title",
};

export const tab1 = {
  title: "Bookmark in one click",
  content:
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites",
  image: tabImage1,
  buttons: [moreInfoButton],
};

export const tab2 = {
  title: "Intelligent search",
  content:
    "Our powerfull search feature will help yu find saved sites in no time at all. No need to trawl through all fo you bookmarks",
  image: tabImage2,
  buttons: [moreInfoButton],
};

export const tab3 = {
  title: "Share you bookmarks",
  content:
    "Easily share your bookmarks and collections width others. Create a shareable link that you can send at the click of a button",
  buttons: [moreInfoButton],
  image: tabImage3,
};
