// import React, { Component } from "react";
// export default class Porfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="portfolio">
//         <div className="row">
//           <div className="twelve columns collapsed">
//             <h1>Check Out Some of My Works.</h1>
//             <div
//               id="portfolio-wrapper"
//               className="bgrid-quarters s-bgrid-thirds cf"
//               alt=""
//             >
//               {resumeData.portfolio &&
//                 resumeData.portfolio.map((item) => {
//                   return (
//                     <div className="columns portfolio-item">
//                       <div className="item-wrap">
//                         <a href="#modal-01">
//                           <img
//                             src={`${item.imgurl}`}
//                             className="item-img"
//                             alt=""
//                           />
//                           <div className="overlay">
//                             <div className="portfolio-item-meta">
//                               <h5>{item.name}</h5>
//                               <p>{item.description}</p>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
