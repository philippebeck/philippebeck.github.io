import { useEffect, useState } from "react";

import Icon from "../../atoms/icon/icon";

import "./slider.scss";

/**
 * ? SLIDER MOLECULE
 * * Renders the Slider Molecule
 * * that displays an Array of items,
 * * & allows the user to navigate through
 * * or to watch them in auto sequence
 *
 * @param {Object} props
 *  The Properties for the Slider Molecule.
 *
 * @param {Array} props.array
 *  The Array of items to be displayed in the Slider
 *
 * @param {number} [props.timer=5000]
 *  The Timer of the Slider
 *  Defaults to 5000
 *
 * @return {JSX.Element}
 *  The rendered Slider Molecule.
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
