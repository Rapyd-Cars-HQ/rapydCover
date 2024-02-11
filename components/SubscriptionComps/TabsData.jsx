import Months from "./Months";
import Year from "./Year";

export const TabsData = {
  TabTitle: [
    {
      id: "tab1",
      title: "6 Months",
    },

    {
      id: "tab2",
      title: "12 Months",
    },
  ],

  TabContents: [
    { id: "tab1", comp: <Months /> },
    { id: "tab2", comp: <Year /> },
  ],
};
