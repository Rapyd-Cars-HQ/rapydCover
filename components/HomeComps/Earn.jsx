import "./earn.css";
import Image from "next/image";
import Googleplay2 from "./../../public/googleplay2.svg";
import Appstore2 from "./../../public/appstore2.svg";
import Man2 from "./../../public/man2.png";

const Earn = () => {
  return (
    <div className="earning">
      <main className="container container-earn">
        <article className="earns">
          <Image src={Man2} alt="Man in a car" />
        </article>
        <article className="homeW">
          <h1>Earn Money while driving</h1>
          <p>
            Turn your everyday commute into a money making venture. Drive on
            your own schedule and decide when and where you drive to.{" "}
          </p>
          <p>Download the driver app</p>
          <div className="earnImg">
            <Image src={Googleplay2} alt="Googleplay" />
            <Image src={Appstore2} alt="Appstore" />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Earn;
