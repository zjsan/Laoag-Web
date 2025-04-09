const Visit = () => {
  return (
    <section id="visit-section">
      <div className="visit-contents">
        <h2 id="visit">Why Visit Laoag?</h2>
        <p className="lead fs-6 mt-3 section-paragraphs">
          Whether you’re drawn by the allure of its historical landmarks, the
          beauty of its natural surroundings, or the warmth of its people, Laoag
          City offers something for every traveler. From exploring ancient
          churches and colonial structures to enjoying outdoor adventures in the
          nearby sand dunes and beaches, Laoag is a destination that{" "}
          <span id="text-visit-1ending">
            promises unforgettable experiences.
          </span>
        </p>
        <p>
          Imagine starting your day with an exhilarating 4x4 adventure at{" "}
          <strong>La Paz Sand Dunes</strong>, where the golden slopes stretch
          endlessly under the vast sky. Feel the rush as you speed through the
          rugged terrain, with the cool wind brushing against your skin and the
          view of the West Philippine Sea in the distance. After the adrenaline
          fades, head to
          <strong> Fort Ilocandia Resort</strong>, where the soothing waves and
          soft sands offer the perfect retreat. The sun sets in fiery hues over
          the horizon, casting a golden reflection on the tranquil waters—a
          scene that feels like a postcard come to life. As the evening sets in,
          the streets of Laoag come alive with the enticing aroma of Ilocano
          street food in the <strong>Laoag City Commercial Complex</strong>.
          Skewers of sizzling barbecue, freshly grilled seafood, and bowls of
          hearty miki soup are served by local vendors, giving you an authentic
          taste of Ilocano flavors. And just when you think you've seen it all,
          the <strong>Pamulinawen Festival </strong>immerses you in the heart of Ilocano culture.
          The streets burst into life with a vibrant street dance competition,
          as dancers in elaborate costumes move gracefully to the beat of
          thundering festival drums. The rhythm echoes through the city,
          blending with cheers from the crowd, creating an electric atmosphere
          that celebrates the enduring spirit and rich traditions of Laoag.
        </p>
      </div>
      <div className="visit-pictures-container">
        <div className="visit-pictures-top">
          <img
            className="img-fluid rounded visit-pictures"
            src="/images/7443 (1).jpg"
            alt="Streetfood vendors in Laoag City"
          />
          <img
            className="img-fluid rounded visit-pictures"
            src="/images/8.jpg"
            alt="Adeventorous 4x4 experience in Laoag Sand Dunes"
          />
        </div>

        <div className="visit-pictures-bottom">
          <img
            className="img-fluid rounded visit-pictures"
            src="/images/4672313876_cf3cb4b403_b.jpg"
            alt="Fort Ilocandia Beach"
          />
          <img
            className="img-fluid rounded visit-pictures"
            src="/images/442000598_1673363960156598_4705785343291275072_n.jpg"
            alt="Daklisan Drummers performing during the opening parade of Pamulinawen Festival"
          />
        </div>
      </div>
    </section>
  );
};

export default Visit;
