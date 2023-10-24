import styles from "./style";
import { Billing, Business,CardDeal, Clients, CTA, Footer, Navbar, Testimonials, Hero, Analytics,Security,Support,Intergration,Action } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary w-full overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Analytics />
        <Business />
        <Billing />
        <CardDeal />
        <Security backgroundClass={styles.bgSecondary}/>
        <Support />
        <Intergration />
        
        <Action />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;