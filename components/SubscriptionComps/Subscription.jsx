"use client";
import React, { useState } from "react";
import { TabsData } from "./TabsData";
import TabContents from "./Tabs/TabContents";
import TabTitle from "./Tabs/TabTitle";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    // <div className="">
    <div className="bG">
      <h3>Sedan & Hatchback Subscription</h3>
      <h2>For private car owners</h2>
      <main className="">
        <article className="">
          <section className="dd">
            {TabsData.TabTitle.map(({ id, title }) => (
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
          {TabsData.TabContents.map(({ id, comp }) => (
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

export default Subscription;
