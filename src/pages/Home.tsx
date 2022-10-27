import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Home.css'

const picture = require('../Images/pic.png')

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar color="primary">
          <IonTitle>Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="container">
          <div className="flex padding2">
            <IonThumbnail>
              <img alt="My Picture" src={picture} />
            </IonThumbnail>
            <div className='padding'>
              <h1>Adam Dixon</h1>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div className="ion-padding">
            <h2 className="ion-text-start">About</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              magnam et eum. Minus, consequatur illo. Provident iste repudiandae
              explicabo amet ipsam, ducimus in facilis? Ipsum nemo quod neque,
              eum eaque illum iure, corporis corrupti saepe blanditiis veritatis
              minus autem numquam.
            </p>
          </div>

          <IonGrid>
            <IonRow>
              <IonCol size-xs="12" size-md="6">
                <h2 className="ion-padding-start">Work Experience</h2>
                <IonAccordionGroup>
                  <IonAccordion value="first">
                    <IonItem slot="header">
                      <IonLabel>Front End Developer, Google</IonLabel>
                    </IonItem>
                    <div className="ion-padding color" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="second">
                    <IonItem slot="header">
                      <IonLabel>Back End Developer, Amazon</IonLabel>
                    </IonItem>
                    <div className="ion-padding color" slot="content">
                      Second Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="third">
                    <IonItem slot="header">
                      <IonLabel>Cloud Engineer, Microsoft</IonLabel>
                    </IonItem>
                    <div className="ion-padding color" slot="content">
                      Third Content
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCol>

              <IonCol size-xs="12" size-md="6">
                <h2 className="ion-padding-start">Technology Experience</h2>
                <IonList>
                  <IonItem>
                    <IonLabel>Javascript</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Typescript</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>React</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>MongoDB</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Ionic</IonLabel>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle className=" ion-text-center size">
            jeremyadixon@hotmail.com
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
}

export default Home
