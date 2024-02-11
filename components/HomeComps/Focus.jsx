import React from "react";
import "./focus.css";
import Image from "next/image";
import Car from "./../../public/car.svg";
import Location from "./../../public/location.svg";

const Focus = () => {
  return (
    <main className="fo ">
      <h1>Focus on driving, we take care of your car</h1>
      <section className="focus ">
        <article className="foC">
          <div className="foCV">
            <Image src={Car} alt="Car" />
          </div>
          <h3>Services Provided</h3>
          <p>
            Whether you’re wondering why your car is not starting or keeps
            jerking; or whether your car fault can be dealt with, here is a list
            of common car faults our partner mechanics can fix. This list is not
            exhaustive, however these are the common ones.
          </p>
        </article>
        <article className="foL">
          <div className="foLV">
            <Image src={Location} alt="Location" />
          </div>
          <h3>Areas Covered</h3>
          <p>
            Get your car fixed at any of our 1000+ service points across -
            Abuja, Lagos, Port Harcourt, Enugu. Don’t live in any of these
            cities? Not to worry , we are constantly expanding our reach and
            will be in you city soon.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Focus;
