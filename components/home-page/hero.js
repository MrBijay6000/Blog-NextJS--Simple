import Image from "next/image";

import classes from "./hero.module.css";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/shadow.jpg"
          alt="An image showing Bijay"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Bijay</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
