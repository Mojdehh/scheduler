import React from "react";
import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING"
const CONFIRM = "CONFIRM"
const DELETING = "DELETING"
const EDIT = "EDIT"


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  function deleteAppointment() {

    transition(DELETING)

    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch((err) => console.log(err))

  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form 
        interviewers={props.interviewers} 
        onSave={save} 
        onCancel={() => back(EMPTY)} 
        />
      )}
      {mode === SAVING && <Status message="SAVING"/>}
      {mode === CONFIRM && (
        <Confirm 
        onCancel={back} 
        onConfirm={deleteAppointment}
        message="Are you sure you want to delete?"
        />
      )}
      {mode === DELETING && <Status message="DELETING" />}
      {mode === EDIT && (
        <Form 
        student={props.interview.student}
        interviewers={props.interviewers} 
        onSave={save} 
        onCancel={() => back(SHOW)} 
        />
      )}
    </article>
  );
}