import React from "react";

import CogIcon from "./elements/CogIcon";
import ScanIcon from "./elements/ScanIcon";
import UpdateIcon from "./elements/UpdateIcon";

const Resources = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column gap-3">
      {/* 
      
      
      If you're on a tight budget, use Windwos Defender.
      
      
      My personal opinon Windows Defender /only/:
      It's decent, but no where near good enough to protect a computer.  
      This comment could potentially compromise a small business's data integrity.  However, paired with malwarebytes, it /might/ be enough.
      
      Questions to ask Alan:
      What about avast?
      starting to use a lot of resources
      
      What about personal PCs vs. small businesses?
      Do you do...
      * data backups?
      * cloud storage setups?
      * 
      * can set it up
      *
      You're certified w/ BEAR.  What benefit, if any, does that provide?
      a state registration
      
      Do you have any other certifications?  A+, Security+, Network+, etc?
      
      add phone number to contact page
      
      add "Call now" or something else above carousel on homepage w/ phone number
      
    */}

      <div>Use Microsoft Windows Security for your anti-virus software.</div>

      <div>
        It comes with the latest Microsoft Windows operating systems with
        off-the-shelf and custom computers with Microsoft Windows installed. I
        recommend using Microsoft Windows Security instead of mainstream "Big
        Box" Anti-virus software, such as McAfee and Norton.
      </div>
      <div>Instead, use Malwarebytes Anti-Malware.</div>
      <div>
        <a
          href="https://www.malwarebytes.com/mwb-download/thankyou"
          rel="noreferrer"
          target="_blank"
        >
          Click here to download Malwarebytes
        </a>
      </div>
      <div>
        Installing Malwarebytes gives you a 14-day trial with full auto-scan
        protection. And after the trial period, you can continue to use the
        software for manual scanning and stay up-to-date on the latest security
        updates for free.
      </div>
      <div>
        <div>
          <CogIcon />
          How to install Malwarebytes Free:
        </div>
        <ul>
          <li>Download Malwarebytes for Windows</li>
          <li>Double-click on the Malwarebytes setup file</li>
          <li>Follow the on-screen prompts to install Malwarebytes</li>
        </ul>

        <div>
          <ScanIcon />
          How to scan your system using Malwarebytes:
        </div>
        <ul>
          <li>Open Malwarebytes</li>
          <li>Click "Scan"</li>
          <li>Wait for the Malwarebytes scan to complete</li>
          <li>
            A report will be generated. If any threats are detected, click
            "Quarantine." Otherwise, you can view the report or click "Done"
          </li>
          <li>Restart the computer</li>
        </ul>

        <div>
          <UpdateIcon />
          How to manually update your Malwarebytes database:
        </div>
        <ul>
          <li>Open the software</li>
          <li>Click on the cog in the top-right corner</li>
          <li>
            In the "General" tab, under "Application updates," click "Check for
            updates."
          </li>
          <li>
            When the updates have finished downloading, restart Malwarebytes for
            installation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
