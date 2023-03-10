import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants 
          </p>
        </div>
      </section>

        <div className='container'>
          <section className='section'>
            <div class="columns">
              <div class="column is-2">
                <ProfileCard 
                title="Alexa" 
                handle="@alexa99" 
                image={AlexaImage} />
              </div>
              <div class="column is-2">
                <ProfileCard 
                title="Cortana" 
                handle="@cortana32" 
                image={CortanaImage} />
              </div>
              <div class="column is-2">
                <ProfileCard 
                title="Siri" 
                handle="@siri01" 
                image={SiriImage} />
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default App;
