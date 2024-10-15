import styles from "@/app/about_us/page.module.css";
import Image from "next/image";

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

export default OurCrew;
