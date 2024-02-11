"use client";
import React, { useState } from "react";
import { TabsDataT } from "./TabsDataT";
import TabContents from "./Tabs/TabContents";
import TabTitle from "./Tabs/TabTitle";

const SubscriptionT = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    // <div className="">
    <div className="bG bgS">
      <h3>Sedan & Hatchback Subscription</h3>
      <h2>For private car owners</h2>
      <main className="">
        <article className="">
          <section className="dd">
            {TabsDataT.TabTitle.map(({ id, title }) => (
              <div key={id}>
                <TabTitle
                  id={id}
                  title={title}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            ))}
          </section>
        </article>

        <article className="tabContents">
          {TabsDataT.TabContents.map(({ id, comp }) => (
            <div key={id}>
              <TabContents id={id} activeTab={activeTab} comps={comp} />
            </div>
          ))}
        </article>
      </main>
    </div>
    // </div>
  );
};

export default SubscriptionT;
