import { useRef, useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaInfoCircle } from "react-icons/fa";
export default function QuestionMark({ name, description }) {
  // const [show, setShow] = useState(false);
  const [showPuls, setShowPuls] = useState(true);
  const target = useRef(null);
  const handleToggle = () => {
    if (showPuls === true) {
      setShowPuls("object");
    }
    // setShow(true);
    // setShowPuls(false);
  };
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      rootClose={true}
      onToggle={handleToggle}
      overlay={
        <Popover id={`popover-positioned`}>
          <Popover.Header as="h3">{name}</Popover.Header>
          <Popover.Body>
            <p>{description}</p>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary">
        {" "}
        <IconContext.Provider
          value={{
            color: "#e28001",
            size: "2.4rem",
          }}
        >
          <div className="pulse pulse-white">
            {showPuls === true && <span className="pulse-ring"></span>}
            <FaInfoCircle />
          </div>
        </IconContext.Provider>
      </Button>
    </OverlayTrigger>
  );
}
