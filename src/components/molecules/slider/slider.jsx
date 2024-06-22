import { useEffect, useState } from "react";

import Icon from "../../atoms/icon/icon";

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
 * @param {number} [props.timer=5000]
 *  The timer for the slider
 *  Defaults to 5000
 *
 * @return {JSX}
 *  The JSX element representing the Slider component
 */
const Slider = ({ array, timer = 5000 }) => {

  const LENGTH        = array.length;
  const [i, setIndex] = useState(0);

  let [isAuto, setAuto]              = useState(true);
  if (timer === 0) [isAuto, setAuto] = useState(false);

  const goNext     = () => setIndex((i) => (i + 1) % LENGTH);
  const goPrevious = () => setIndex((i) => (i - 1 + LENGTH) % LENGTH);
  const toggleAuto = () => setAuto((state) => !state);

  useEffect(() => {
    let interval;
    if (isAuto) interval = setInterval(() => goNext(), timer);

    return () => clearInterval(interval);
  }, [isAuto, LENGTH])

  return (
    <figure className="slider">
      {array[i]}

      {LENGTH > 1 && (
        <nav>
          <Icon
            name="chevron-left"
            cat="solid"
            isHidden="false"
            event={goPrevious}
          />

          <Icon
            name="chevron-right"
            cat="solid"
            isHidden="false"
            event={goNext}
          />

          <Icon
            name={isAuto ? 'pause' : 'play'}
            cat="solid"
            isHidden="false"
            event={toggleAuto}
          />

          <b>{i + 1} / {LENGTH}</b>
        </nav>
      )}
    </figure>
  )
}

export default Slider
