import MonthT from "./MonthT";
import YearT from "./YearT";

export const TabsDataT = {
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
    { id: "tab1", comp: <MonthT /> },
    { id: "tab2", comp: <YearT /> },
  ],
};
