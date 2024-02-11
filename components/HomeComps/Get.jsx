import "./get.css";
import Image from "next/image";
import Googleplay from "./../../public/googleplay.svg";
import Appstore from "./../../public/appstore.svg";
import Man3 from "./../../public/man3.png";

const Get = () => {
  return (
    <main className="gets">
      <section className="container container-get">
        <section className="getW">
          <article>
            <h1>Get your car covered from breakdown</h1>
          </article>
          <article>
            <p>
              Rapyd Breakdown Cover, covers you for day to day repairs if your
              car breaks down while you’re out and about.
            </p>
            <div className="getImg">
              <Image src={Googleplay} alt="Googleplay" />
              <Image src={Appstore} alt="Appstore" />
            </div>
          </article>
        </section>
        <section className="getI">
          <Image src={Man3} alt="Man laughing" />
        </section>
      </section>
    </main>
  );
};

export default Get;
