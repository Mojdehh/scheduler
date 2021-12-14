import { useState, useEffect } from "react";
import axios from "axios";

// this custom hook is responsible for loading the inital data from API, 
// and when any of the actions are called the state updates, causing the
// component to render
export default function useApplicationData() {

  // state object
  const [state, setState]= useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // set the current day
  const setDay = day => setState({ ...state, day });
  //const setDays = (days) => setState((prev) => ({ ...prev, days }));


  // make an HTTP request and update the local state
  function bookInterview(id, interview) {
    // console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, { interview })
                .then(() => {
                  setState({ ...state, appointments });
                })
  }


  // make an HTTP request and update the local state
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return axios.delete(`api/appointments/${id}`, appointments[id])
                .then(() => {
                  setState({...state, appointments});
                })
  }
  


  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, []);


  return { state, setDay, bookInterview, cancelInterview };

}