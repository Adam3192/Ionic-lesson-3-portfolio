import {
  IonCard,
  IonCol,
  IonContent,
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
          <IonGrid>
            <IonRow>
              <IonCol size-xs="4" size-md="2">
                <IonThumbnail>
                  <img
                    alt="My Picture"
                    src="./Images/profilePic.png"
                  />
                </IonThumbnail>
              </IonCol>
                <IonCol size-xs="8" size-md="10">
                <div>
                <h1>Adam Dixon</h1>
                <p>Full Stack Developer</p>
                </div>
                </IonCol>
            </IonRow>
          </IonGrid>

          <h2 className="ion-text-center">Contact Me</h2>

          <IonList>
            <IonItem>
              <IonLabel>contact@styledbylindy.com</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>lindy-hoffman</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>styledbylindy</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>@styledbylindy</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>lindyhoffman23</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
