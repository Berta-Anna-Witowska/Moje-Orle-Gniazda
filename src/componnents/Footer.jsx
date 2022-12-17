import "../styles/elements/_footer.scss";
import React from "react";

import {Tooltip, Position} from "evergreen-ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="page-name">Moje Orle Gniazda</span>

        <span className="copyright">
          <Tooltip content="My GitHub" position={Position.LEFT}>
            <a className="github" href="https://github.com/Berta-Anna-Witowska">
              <i className="fa-brands fa-github" />
            </a>
          </Tooltip>
          Copyright &#169; Berta Anna Witowska
        </span>
      </div>
    </footer>
  );
}
