import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Jumbotron as Jtron, Button, Row } from "reactstrap";
export function Jumbotron(props) {
  return (
    <Jtron>
      <Row className="justify-content-between">
        <img src={props.image} width="200" height="250" alt="House Crest" />{" "}
        <h1>{props.house}</h1>
        <img src={props.image} width="200" height="250" alt="House Crest" />{" "}
      </Row>
      <Row className="d-flex justify-content-between pb-3 text-center Button">
        <Link to="/lessons">
          <Button outline color="warning">
            Lessons
          </Button>{" "}
        </Link>
        <Link to="/quiz">
          <Button outline color="warning">
            Quiz Page
          </Button>{" "}
        </Link>
        <Link to="/scores">
          <Button outline color="warning">
            Scores
          </Button>{" "}
        </Link>
        <Link to="/">
          <Button outline color="warning">
            User Profile
          </Button>{" "}
        </Link>
      </Row>
    </Jtron>
  );
}
export function Jumbotron2({ children }) {
  return (
    <div
      style={{
        clear: "both",
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

// export function Jumbotron2({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }
