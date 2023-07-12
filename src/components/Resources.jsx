import React from "react";

const Resources = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="mb-3">Protect Yourself While On-Line</div>
      <div className="mb-3">
        Make sure you have an up to date Antivirus. Scan Regularly. There are
        many free versions:
        <ul>
          <li>AVAST</li>
          <li>
            AVG (Avg is starting to become a resource hog. Requires a lot of
            RAM.)
          </li>
          <li>Antivir</li>
        </ul>
      </div>
      <div className="mb-3">
        Make sure you have a software firewall and if you are on broadband, get
        behind a NAT router. There are also free versions of software firewalls:
        <ul>
          <li>Kerio</li>
          <li>Sygate</li>
          <li>Zone Alarm</li>
        </ul>
      </div>
      <div className="mb-3">
        Keep Windows up to date. Visit Windows Update and Office Update
        regularly.
      </div>
      <div className="mb-3">
        Keep all of your software up to date. You can check on your software
        with the Secunia Software Inspector. Sign up for e-mail notification and
        they will tell you when to check your system again.
      </div>
      <div className="mb-3">Use Firefox with the NoScript extension as your web browser.</div>
      <div className="mb-3">
        Download, install and keep an updated version of SpywareBlaster.
      </div>
      <div className="mb-3">Do NOT click on links in any Instant Messaging program.</div>
      <div className="mb-3">Use Thunderbird in place of Outlook or Outlook Express.</div>
      <div className="mb-3">
        Use Foxit Reader with the PDF Download extension instead of Adobe
        Acrobat Reader.
      </div>
      <div className="mb-3">
        DO NOT open attachments from ANYONE. Download them, and scan them with
        your Antivirus software before opening and only if you expect to receive
        them.
      </div>
      <div className="mb-3">If you use IE download a copy of IE-Spyad.</div>
    </div>
  );
};

export default Resources;
