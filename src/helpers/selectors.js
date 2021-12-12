
export function getAppointmentsForDay(state, day) {

  // return an array of appointment for a given day
  const appointmentArr = state.days.filter(each => each.name === day)[0];
  
  // loop through appointments array(id)
  const appointmentObj = (appointmentArr ? appointmentArr.appointments.map(id => state.appointments[id]) : [])

  return appointmentObj;
}


export function getInterview(state, interview) {
  //if passed an object that contains interviewer then returns a new obj containing interview data
  const interviewObj = (interview ? {
    student: interview.student, interviewer: state.interviewers[interview.interviewer]
  }: null)
  return interviewObj
}