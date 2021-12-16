import React from "react";
import "components/DayListItem.scss";

import classNames from "classnames";

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const formatSpots = function(spots) {
    return (
      spots === 0 ? "no spots remaining" : `${spots} spot${spots === 1 ? "" : "s"} remaining`
    )
  };

  return (
    <li 
    className={dayClass}
    onClick={() => setDay(name)}
    date-testid="day"
    > 
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}