import React, {useState} from "react";
import Formulaire from "@partials/Formulaire";
import Header from "@layout/Header";
import Footer from "@layout/Footer";



const Home  = () => {
    const [count, setCount] = useState(0);

    return (
        <>
          <Header />
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <Formulaire />
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Footer />
        </>
      )
}

export default Home;
