import "./book.css";
import Image from "next/image";
import Googleplay from "./../../public/googleplay.svg";
import Appstore from "./../../public/appstore.svg";
import Man from "./../../public/man1.png";

const Book = () => {
  return (
    <main className="books">
      <section className="container container-book">
        <article className="bookW">
          <h1>Book a ride to get around town</h1>
          <p>
            Get ready to embark on a seamless journey with our ride feature that
            takes you anywhere anytime!
          </p>
          <div className="bookImg">
            <Image src={Googleplay} alt="Googleplay" />
            <Image src={Appstore} alt="Appstore" />
          </div>
        </article>
        <article className="bookMan">
          <Image src={Man} alt="Man in a suit" />
        </article>
      </section>
    </main>
  );
};

export default Book;
