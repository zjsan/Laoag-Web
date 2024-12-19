import Image from 'react-bootstrap/Image';

const Hero = () => {
  return (
    
    <section id="hero">
        <div>
        <h2>Welcome to Laoag City: The Sunshine City of the North</h2>
          <div className="hero-contents">
              <div className="hero-text">
                  <p id="hero-first-p">Laoag City, known as the <span>Sunshine City</span> is the vibrant capital of Ilocos Norte, located in the northern part of the Philippines. The name <span>Laoag</span> translates to <span>bright</span> or <span>light </span>
                  in the native Ilocano language, symbolizing the warmth and hospitality of its people. The city’s rich history, stunning landscapes, and cultural heritage make it a must-visit destination for travelers seeking to experience the best of the Ilocos region.</p>
                  <p>Discover the exciting activities and sumptuous dishes of Laoag City in Ilocos Norte. Read this guide to learn about the best time to go, how to go, where to stay, what to see and do, and other travel tips to help you plan your trip to the The Sunshine City of the north.</p>
              </div>
              <Image src="/laoag-web/public/images/laoag-welcome-arc 1.png" alt="An image of the Laoag City Gilbert Bridge"/>
          </div>  
      </div>  
    </section>
  )
}

export default Hero
