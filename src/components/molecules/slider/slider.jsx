import { useEffect, useState } from "react";

import "./slider.scss";

/**
 * ? SLIDER
 * * Slider component that displays a set of elements.
 *
 * @param {Object} props
 *  The properties for the Slider component.
 *
 * @param {array} props.array
 *  Array of items to be displayed in the slider
 *
 * @return {JSX}
 *  The JSX element representing the Slider component
 */
const Slider = ({ array, timer }) => {

  const LENGTH            = array.length;
  const [i, setIndex]     = useState(0);
  const [isAuto, setAuto] = useState(true);

  const goNext      = () => setIndex((i) => (i + 1) % LENGTH);
  const goPrevious  = () => setIndex((i) => (i - 1 + LENGTH) % LENGTH);
  const toggleAuto  = () => setAuto((state) => !state);

  useEffect(() => {
    let interval;
    if (isAuto) interval = setInterval(() => goNext(), timer);

    return () => clearInterval(interval);
  }, [isAuto, LENGTH])

  return (
    <figure className="slider">

      {array[i]}
      {LENGTH > 1 && (

        <div>
          <i
            className="fa-regular fa-circle-left"
            onClick={goPrevious}
          ></i>

          <i
            className="fa-regular fa-circle-right"
            onClick={goNext}
          ></i>

          <i
            className={`fa-regular ${isAuto ? 'fa-circle-pause' : 'fa-circle-play'}`}
            onClick={toggleAuto}
          ></i>

          <b>{i + 1} / {LENGTH}</b>
        </div>

      )}
    </figure>
  )
}

export default Slider
