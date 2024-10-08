import styles from "./page.module.css";
import Image from "next/image";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.values}>
      <div className={styles.coreValues}>
        <h1 className={styles.ourValuesh1}>01.</h1>
        <h3>Exploration</h3>
        <p className={styles.ourValuesp}>
          We are driven by a deep-seated desire to explore the unknown. We
          believe that the pursuit of discovery is at the heart of human nature,
          and we are committed to pushing the boundaries of what is possible.
        </p>
        <hr className={styles.coreValueshr} />
      </div>
      <div className={styles.coreValues}>
        <h1 className={styles.ourValuesh1}>02.</h1>
        <h3>Innovation</h3>
        <p className={styles.ourValuesp}>
          At Galactica, we prioritize cutting-edge technology and innovation. We
          are constantly evolving our spacecraft, safety protocols, and services
          to ensure that our travelers experience the most advanced and secure
          space journeys available.
        </p>
        <hr className={styles.coreValueshr} />
      </div>
      <div className={styles.coreValues}>
        <h1 className={styles.ourValuesh1}>03.</h1>
        <h3>Sustainability</h3>
        <p className={styles.ourValuesp}>
          We are committed to making space exploration sustainable for future
          generations. Our space missions are designed to minimize environmental
          impact, both on Earth and in space, and to foster a spirit of
          responsibility towards our universe.
        </p>
        <hr className={styles.coreValueshr} />
      </div>
      <div className={styles.coreValues}>
        <h1 className={styles.ourValuesh1}>04.</h1>
        <h3>Community</h3>
        <p className={styles.ourValuesp}>
          We believe in the power of collective exploration. Our journeys are
          not just about reaching new destinations; they are about building a
          community of space enthusiasts who share a passion for the stars.
        </p>
        <hr className={styles.coreValueshr} />
      </div>
    </div>
  );
};

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.crew}>
      <p className={styles.ourValuesp}>
        Our crew is the heart and soul of Galactica. <br />
        We are a diverse team of seasoned space explorers, engineers, and
        visionaries who
        <br /> are united by a common goal: to make space travel accessible and
        exciting for all.
      </p>
      <div className={styles.crewMembers}>
        <div className={styles.crewMember}>
          <Image
            src="/crew/1.png"
            width={250}
            height={300}
            alt="Picture of the author"
          />
          <h3 className={styles.crewMembersh3}>Captain Sarah Vega</h3>
          <p className={styles.ourValuesp}>
            A former NASA astronaut with over 15 years of experience,Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>
        <div className={styles.crewMember}>
          <Image
            src="/crew/2.png"
            width={250}
            height={300}
            alt="Picture of the author"
          />
          <h3 className={styles.crewMembersh3}> Chief Engineer Hana Lee</h3>
          <p className={styles.ourValuesp}>
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </div>
        <div className={styles.crewMember}>
          <Image
            src="/crew/4.png"
            width={250}
            height={300}
            alt="Picture of the author"
          />
          <h3 className={styles.crewMembersh3}>
            Mission Specialist Alex Santos
          </h3>
          <p className={styles.ourValuesp}>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>
        <div className={styles.crewMember}>
          <Image
            src="/crew/3.png"
            width={250}
            height={300}
            alt="Picture of the author"
          />
          <h3 className={styles.crewMembersh3}>Maya Patel</h3>
          <p className={styles.ourValuesp}>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>
      </div>
    </div>
  );
};

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.partners}>
      <div className={styles.partner}>
        <Image
          src="/business_partners/alphabet-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/amazon_logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />{" "}
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/CBC_Logo_white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />{" "}
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/Microsoft-Logo-white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/nyu-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/QueensLogo_white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/samsung-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        {" "}
        <Image
          src="/business_partners/sodexo-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
    </div>
  );
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our partners</h2>
          <p className={styles.ourValuesp}>
            We collaborate with some of the most respected names in the
            <br />
            space and technology industries to make every journey extraordinary.
          </p>
          {/* TASK - React 1 week 1 */}
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
