import PropTypes from "prop-types";

const classNames = (...classes) => {
  return classes?.filter((className) => className).join(" ");
};
const componentModes = {
  basic: "checkbox-basic",
  fade: "checkbox-fade",
  scale: "checkbox-scale",
  check: "checkbox-check",
};

import { useEffect } from "react";
import { useRef } from "react";
function Checkbox({
  mode,
  className,
  fillColor = "#FFF",
  borderColor = "black",
  icon,
  iconColor = "black",
  ...otherAttributes
}) {
  const inputDivRef = useRef(null);
  useEffect(() => {
    inputDivRef.current?.style.setProperty(
      "--checkbox-border-color",
      borderColor
    );
    inputDivRef.current?.style.setProperty("--checkbox-color-fill", fillColor);
  }, []);

  return (
    <>
      <div ref={inputDivRef} className="checkbox-div">
        <div className="checkbox-content">
          <input
            className={classNames(
              className,
              "checkbox-core",
              componentModes[mode]
            )}
            type="checkbox"
            {...otherAttributes}
          />
          {icon || (
            <svg className="checkbox-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill={iconColor} d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328 380.7 118l23.2-22 44 46.5z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}

Checkbox.propTypes = {
  mode: PropTypes.oneOf(Object.keys(componentModes)).isRequired,
  className: PropTypes.string,
  icon: PropTypes.element,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  iconColor: PropTypes.string,
};

export default Checkbox;
