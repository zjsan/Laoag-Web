

const History = () => {
  return (
    <section id="history-section">
      <div className="history-contents">
      <h2>A Glimpse into History</h2>
        <div className="history-landmark-container">
            <img className="history-pictures img-fluid rounded history-img" id="cathedral" src="/images/church2.webp" alt="St. William Cathedral"/>
            <img className="history-pictures img-fluid rounded history-img" id="belltower" src="/images/Laoag_Sinking_Bell_Tower_(A._Bonifacio,_Laoag,_Ilocos_Norte;_11-16-2022).jpg" alt="Laoag City Bell Tower"/>
        </div>
        <div className="history-text">
            <p className="lead fs-6 mt-3 section-paragraphs">Laoag City has a long and storied past, with roots tracing back to pre-colonial times when it was a thriving trading post. It became a significant settlement during the Spanish colonization, serving as a center of religious and cultural activities. The city’s architecture, such as the Sinking Bell Tower and the St. William’s Cathedral, reflects its colonial history, offering visitors a journey back in time.</p>
        </div>
      </div>
    </section>
  )
}

export default History
