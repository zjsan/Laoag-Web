const History = () => {
  return (
    <section id="history-section">
      <div className="history-contents">
        <h2 id="history">A Glimpse into History</h2>
        <div className="history-landmark-container">
          <img
            className="history-pictures history-img"
            id="cathedral"
            src="/images/church2.webp"
            alt="St. William Cathedral"
          />
          <img
            className="history-pictures history-img"
            id="belltower"
            src="/images/Laoag_Sinking_Bell_Tower_(A._Bonifacio,_Laoag,_Ilocos_Norte;_11-16-2022).jpg"
            alt="Laoag City Bell Tower"
          />
        </div>
        <div className="history-text">
          <p className="lead fs-6 mt-3 section-paragraphs">
            Laoag City has a long and storied past, with roots tracing back to
            pre-colonial times when it was a thriving trading post. It became a
            significant settlement during the Spanish colonization, serving as a
            center of religious and cultural activities. The city’s
            architecture, such as the <strong>Sinking Bell Tower</strong> and the <strong>St. William’s
            Cathedral</strong>, reflects its colonial history, offering visitors a
            journey back in time.
            
            One of Laoag’s most iconic structures is the
            <strong> Sinking Bell Tower</strong>, a centuries-old edifice known for its gradual
            descent into the ground due to its heavy stone foundation on soft
            soil. Standing at nearly 45 meters tall, the bell tower remains a
            testament to Spanish engineering and resilience, drawing visitors
            intrigued by its slow yet continuous sinking. Nearby, the <strong>St.
            William’s Cathedral</strong>, built in 1612, showcases impressive Baroque
            architecture with its grand façade and intricate details. The
            cathedral remains a significant place of worship and a historical
            emblem of the city’s colonial past. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
