import React from "react";

function Footer() {
  return (
    <footer className="mb-4 text-xs text-muted-foreground">
      Built by{" "}
      <a
        target="_blank"
        href="https://nextjs.org"
        className="font-medium underline underline-offset-2"
      >
        Next.js
      </a>
      . The source code is available on{" "}
      <a
        target="_blank"
        href="https://github.com/sunls24/sunls24"
        className="font-medium underline underline-offset-2"
      >
        Github
      </a>
      .
    </footer>
  );
}

export default Footer;
