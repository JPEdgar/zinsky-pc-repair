import React from "react";

import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
// import SocialMedia from "./components/SocialMedia";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources/>}/>
      </Routes>

      {/* <SocialMedia /> */}
      <Footer />
    </Container>
  );
};

export default App;

/*email: zconfig@sbcglobal.net
ZinskyPCRepair.com


color scheme
how long you've been in business
company been open since 2008

services:
 - computer hardware upgrade/repair
 - software maintenance
 - pc only - some laptops - no cell phones/mobile
 - virus/malware removal
 - data recovery
 - security assessments/maintenance
 - free consoltation
 - on-site/on-call services
 - building computers
 - hardware cleaning
 - home networking
 - installations/setup
 - backup
personal/home office/home business

based out of rancho cordova
business/state license (with links)
 - service area (sacramento, rancho cordova, etc.)

contact info
reviews (maybe a couple, tops)

current :
 - #436C99 - blue (main)
 - #D2E4FA - accent

https://web.archive.org/web/20140109222248/http://www.zinskyspcrepair.com/Pages/default.aspx

"don't replace it, repair it"

https://www.wilmingtonbiz.com/insights/jeremy_tomlinson/repair_or_replace_7_signs_that_you_need_a_new_computer/3014
https://blog.seedspark.com/blog/computer-repair-vs-replacement

https://techatlantacomputerrepair.com/
https://www.ifixomaha.com/computer-repair
https://www.tech2u.com/
https://computerrepairdoctor.com/

*/
