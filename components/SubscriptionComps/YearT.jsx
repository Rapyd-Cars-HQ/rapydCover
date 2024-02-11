import Image from "next/image";
import Check from "../../public/check.svg";
import "./../SubscriptionComps/months.css";

const YearT = () => {
  return (
    <div className="mm ms">
      <main className="container container-month">
        <section className="one">
          <div className="aged">
            <section className="ageS">
              <article>
                <h6>AGE</h6>
              </article>
              <article className="ageR">
                <h6>2024-2018</h6>
                <h6>2017-2011</h6>
                <h6>2010 AND PRE-2010</h6>
              </article>
            </section>
          </div>
          <section className="chevrons">
            <div className="chevs">
              <div className="chevron">
                <article>
                  <h5>
                    Road side assistance:{" "}
                    <span>
                      Swift solutions for unexpected bumps in your journey
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    Home assistance:{" "}
                    <span>
                      Get immediate support right at your doorstep, ensuring
                      you're never stranded
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>Unlimited Callouts</h5>
                  <h5>
                    On the spot minor repairs:{" "}
                    <span>Swift skillful repairs done right</span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    24/7 Assistance:{" "}
                    <span>
                      Reliable support at your service round-the-clock
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    Special discounts on multiple car coverage:{" "}
                    <span>
                      Rev up your savings with Exclusive Discounts on Multi-Car
                      Coverage
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    Priority Service:{" "}
                    <span>
                      Provide priority assistance for members during peak times
                      or busy seasons.
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    Alternate transport and onward travel assistance:{" "}
                    <span>
                      Seamless onward travel assistance tailored to your needs
                    </span>
                  </h5>
                </article>
                <article className="chevR">
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <Image src={Check} alt="Check icon" />
                  </div>
                </article>
              </div>
              <div className="chevron">
                <article>
                  <h5>
                    Towing assistance:{" "}
                    <span>Swift and reliable towing assistance</span>
                  </h5>
                </article>
                <article className="amountR am">
                  <h5>₦25,000.00</h5>
                  <h5>₦20,000.00</h5>
                  <h5>₦20,000.00</h5>
                </article>
              </div>
            </div>
          </section>
        </section>
        <section className="two">
          <div className="amounts">
            <article className="amountL">
              <h5>
                Engine fault coverage: Engine misfires, timing belt failure,
                alternator failure, engine rebuild etc
              </h5>
            </article>
            <article className="amountR">
              <h5>₦45,000.00</h5>
              <h5>₦35,000.00</h5>
              <h5>₦35,000.00</h5>
            </article>
          </div>

          <div className="amounts">
            <article className="amountL">
              <h5>
                Suspension fault coverage: Control arms, linkages, bushings,
                Shock absorbers, etc
              </h5>
            </article>
            <article className="amountR">
              <h5>₦65,000.00</h5>
              <h5>₦50,000.00</h5>
              <h5>₦40,000.00</h5>
            </article>
          </div>
          <div className="amounts">
            <article className="amountL">
              <h5>
                Braking system fault coverage: Brake fluid leaks, faulty brake
                caliphers, brake pad replacement. etc
              </h5>
            </article>
            <article className="amountR">
              <h5>₦35,000.00</h5>
              <h5>₦35,000.00</h5>
              <h5>₦35,000.00</h5>
            </article>
          </div>
          <div className="amounts">
            <article className="amountL">
              <h5>
                Cooling system fault coverage: Radiator leaks, water pump
                failure, overheating, etc.
              </h5>
            </article>
            <article className="amountR">
              <h5></h5>
              <h5>₦15,000.00</h5>
              <h5>₦15,000.00</h5>
            </article>
          </div>
          <div className="amounts">
            <article className="amountL">
              <h5>
                Electrical and fuel system fault coverage: Faulty wiring, issues
                with starter motor or alternator, etc
              </h5>
            </article>
            <article className="amountR">
              <h5>₦30,000.00</h5>
              <h5>₦25,000.00</h5>
              <h5>₦20,000.00</h5>
            </article>
          </div>
          <div className="amounts">
            <article className="amountL">
              <h5>Collision cover: Body panel damage and bumper damage only</h5>
            </article>
            <article className="amountR">
              <h5>₦50,000.00</h5>
              <h5>₦30,000.00</h5>
              <h5>₦25,000.00</h5>
            </article>
          </div>
        </section>
        <section className="three">
          <div className="prices">
            <article className="priceL">
              <h4>PRICE</h4>
            </article>
            <article className="priceR">
              <h4>₦216,000.00</h4>
              <h4>₦180,000.00</h4>
              <h4>₦164,000.00</h4>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YearT;
