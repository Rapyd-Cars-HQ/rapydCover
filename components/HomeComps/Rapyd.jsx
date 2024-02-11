import Image from "next/image";
import Googleplay2 from "./../../public/googleplay2.svg";
import Appstore2 from "./../../public/appstore2.svg";
import Spanner from "./../../public/spanner.png";
import "./../HomeComps/earn.css";

const Rapyd = () => {
  return (
    <main className="container container-earn re">
      <article className="homeW">
        <h1>RapydCover for Business</h1>
        <p>
          Transform the way your company maintains and fixes their cars. Our
          end-to-end car breakdown service takes care of everything so you can
          focus on your business.
        </p>
        <p>Download the mechanic app</p>
        <div className="earnImg">
          <Image src={Googleplay2} alt="Googleplay" />
          <Image src={Appstore2} alt="Appstore" />
        </div>
      </article>
      <article className="earns">
        <Image src={Spanner} alt="Man holding a spanner" />
      </article>
    </main>
  );
};

export default Rapyd;
