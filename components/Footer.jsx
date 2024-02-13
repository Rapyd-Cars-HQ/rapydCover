import Image from "next/image";
import "./footer.css";
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook.svg";
import Linkedin from "../public/linkedin.svg";
import Twitter from "../public/twitter.svg";
import Logo from "../public/logo2.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <main className="container container-footer">
        <section>
          <Link href="/">
            <Image src={Logo} alt="Rapyd logo" />
          </Link>
        </section>
        <section>
          <section className="lin">
            <article>
              <div className="links">
                <Link href="/drive">Drive</Link>
                <Link href="/ride">Ride</Link>
                <Link href="/autocare">Autocare</Link>
                <Link href="/subscription">Subscription</Link>
                <Link href="/about">About</Link>
                <a href="mailto:info@jupita.co">Contact</a>
              </div>
            </article>
            <article>
              <div className="link">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms & Conditions</Link>
              </div>
            </article>
          </section>
        </section>
        <section>
          <div className="icons">
            <div className="icon">
              <a
                href="https://twitter.com/rapydcars?s=11&t=0PkUIR9ilA8D797MYAn55A"
                target="_blank"
              >
                <Image src={Twitter} alt="Twitter logo" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/company/rapydcars/about/"
                target="_blank"
              >
                <Image src={Linkedin} alt="Linkedin logo" />
              </a>
            </div>
            <div className="icon">
              <a href="https://web.facebook.com/rapydcarsng/" target="_blank">
                <Image src={Facebook} alt="Facebook logo" />
              </a>
            </div>

            <div className="icon">
              <a
                href="https://www.instagram.com/rapydcars/?igshid=NDRkN2NkYzU%3D"
                target="_blank"
              >
                <Image src={Instagram} alt="Instagram logo" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <p>&copy; 2024 Rapyd</p>
    </footer>
  );
};

export default Footer;
