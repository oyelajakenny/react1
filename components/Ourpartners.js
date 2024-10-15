import styles from "@/app/about_us/page.module.css";
import Image from "next/image";

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
        <Image
          src="/business_partners/amazon_logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        <Image
          src="/business_partners/CBC_Logo_white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        <Image
          src="/business_partners/Microsoft-Logo-white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        <Image
          src="/business_partners/nyu-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        <Image
          src="/business_partners/QueensLogo_white.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
        <Image
          src="/business_partners/samsung-logo.png"
          width={200}
          height={100}
          alt="Business Partner"
        />
      </div>
      <div className={styles.partner}>
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

export default OurPartners;
