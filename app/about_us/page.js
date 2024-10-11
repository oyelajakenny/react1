import styles from "../page.module.css";
import Image from "next/image";
import OurPartners from "@/components/Ourpartners";
import OurCrew from "@/components/Ourcrew";
import OurValues from "@/components/Ourvalues";

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
