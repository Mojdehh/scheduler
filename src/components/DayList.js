import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const listItem = props.days.map(day => 
  <DayListItem 
    key=      {day.id}
    name=     {day.name}
    spots=    {day.spots}
    selected= {props.day === day.name}
    setDay=   {props.setDay}
  />
  );

  return (
    <ul>
      { listItem }
    </ul>
  );
}