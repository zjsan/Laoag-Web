const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h2>Welcome to Laoag City: The Sunshine City of the North</h2>
        <div className="hero-contents">
          <img
            src="/images/laoag-welcome-arc 1.png"
            alt="An image of the Laoag City Gilbert Bridge"
          />
          <div className="hero-text">
            <p
              id="hero-first-p"
              className="lead fs-6 mt-5 m-auto section-paragraphs"
            >
              Laoag City, known as the <span>Sunshine City</span> is the vibrant
              capital of Ilocos Norte, located in the northern part of the
              Philippines. The name <span>Laoag</span> translates to{" "}
              <span>bright</span> or <span>light </span>
              in the native Ilocano language, symbolizing the warmth and
              hospitality of its people. The city’s rich history, stunning
              landscapes, and cultural heritage make it a must-visit destination
              for travelers seeking to experience the best of the <strong>Ilocos region</strong>.
            </p>
            <p className="lead fs-6 mt-3 section-paragraphs">
              But Laoag is more than just a city—it’s an experience waiting to
              unfold. From the golden dunes of <strong>La Paz</strong>, where adventure seekers
              can race across the sand on 4x4s, to the iconic landmarks that
              whisper tales of the past, every corner of the city has something
              special to offer. Stroll through the charming streets lined with
              <strong> Spanish-era architecture</strong>, savor authentic <strong>Ilocano cuisine</strong>, or
              embark on a journey to the nearby coastal gems and hidden natural
              wonders. Whether you're here for history, adventure, or
              relaxation, there's so much more to discover. Let us take you on a virtual tour of Laoag
              City—where every click brings you closer to the heart of <strong>Ilocos
              Norte.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
