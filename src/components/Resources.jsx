import React from "react";

const Resources = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column gap-3">
      <div>Use Microsoft Windows Security for your anti-virus software.</div>
      {/* If you're on a tight budget, use Windwos Defender.
      

      My personal opinon Windows Defender /only/:
      It's decent, but no where near good enough to protect a computer.  
      This comment could potentially compromise a small business's data integrity.  However, paired with malwarebytes, it /might/ be enough.

      Questions to ask Alan:
      What about avast?
      What about personal PCs vs. small businesses?
      Do you do...
        * data backups?
        * cloud storage setups?
      You're certified w/ BEAR.  What benefit, if any, does that provide?
      Do you have any other certifications?  A+, Security+, Network+, etc?


      */}
      <div>
        It is provided by Microsoft and comes with the latest Microsoft Windows
        operating systems, which, of course, comes with the latest off the shelf
        computers and custom computers with Microsoft Windows installed.
      </div>
      <div>
        I recommend using Microsoft Windows Security, as opposed to mainstream,
        “Big Box” Anti-virus software.
      </div>
      <div>Use Malwarebytes Anti-Malware.</div>
      <div>
        <div>The link below is a direct software download.</div>
        <div>
          <a
            href="https://www.malwarebytes.com/mwb-download/thankyou"
            rel="noreferrer"
            target="_blank"
          >
            Click here to go to Malwarebytes
          </a>
        </div>
      </div>
      <div>
        Installing Malwarebytes gives you a 14 day trial with full protection
        However you can use the scanner software manually, after the 14 day
        trial period, for free.
      </div>
      <div>
        <div>How to install and run a scan with Malwarebytes Free</div>
        <ul>
          <li>Download Malwarebytes for Windows.</li>
          <li>Double-click on the Malwarebytes setup file.</li>
          <li>Follow the on-screen prompts to install Malwarebytes.</li>
          <li>Click on “Scan”.</li>
          <li>Wait for the Malwarebytes scan to complete</li>
          <li>Click on “Quarantine”.</li>
          <li>Restart computer.</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
