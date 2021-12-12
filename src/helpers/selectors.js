
export function getAppointmentsForDay(state, day) {

  // return an array of appointment for a given day
  const appointmentArr = state.days.filter(each => each.name === day)[0];
  
  // loop through appointments array(id)
  const appointmentObj = (appointmentArr ? appointmentArr.appointments.map(id => state.appointments[id]) : [])

  return appointmentObj;
}
