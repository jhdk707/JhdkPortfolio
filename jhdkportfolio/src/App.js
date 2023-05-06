// import React, { Component } from "react";
// import Header from "./components/Header";
// import About from "./pages/About";
// import Resume from "./components/Resume";
// import Portfolio from "./components/PortfolioContainer";
// import ContactUs from "./pages/ContactUs";
// import Footer from "./pages/Footer";
// import resumeData from "./components/resumeData";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header resumeData={resumeData} />
//         <About resumeData={resumeData} />
//         <Resume resumeData={resumeData} />
//         <Portfolio resumeData={resumeData} />
//         <ContactUs resumeData={resumeData} />
//         <Footer resumeData={resumeData} />
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

export default App;
