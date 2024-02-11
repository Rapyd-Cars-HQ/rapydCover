import "./about.css";
import Phones from "../../public/phones1.png";
import Image from "next/image";

const About = () => {
  return (
    <main className="abouts">
      <div className="container">
        <h1>About Us</h1>
        <section className="aboutD">
          <article>
            <Image src={Phones} alt="Two iPhones" />
          </article>
          <article>
            <p>
              It doesn’t matter where, when or why… if you’ve broken down,
              you’re stranded.
            </p>
            <br />
            <p>
              Fortunately, Rapyd Breakdown Cover operates a smart network of
              garages and rescue specialists to help get you moving again - no
              matter what.{" "}
            </p>
            <br />
            <p>
              We are all about providing drivers complete peace of mind and have
              consistently been at the forefront of developing motoring
              services; and day to day breakdown cover has always been our
              number one priority.
            </p>
            <br />
            <p>
              We are the only day to day break down cover service in Africa!.
              Our purpose? To take customers from confusion to clarity. Let’s
              face it, finding the right garage to fix your car can be a bit of
              a chore. And with all the choice and options, you don’t want to
              use up your time only to find out you may have done it wrong
              later.{" "}
            </p>
            <p>
              Let’s be the backup your car needs, because everything you car
              care about is riding on our repair.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
