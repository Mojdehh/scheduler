# Interview Scheduler

Interview scheduler is a single page application that serves students to book and manage appointments with mentors.

The app is build using React for the front end. The data is persisted by the API servers using PostgreSQL database and client application communicate with an API server over HTTP, using the JSON format.

Appointments can be booked between Monday and Friday, from 12 to 5 pm. Students can easily navigate through the days to see free spots and book an appointment with their desired mentor or even edit/cancel a previously booked appointment.

## Final Product

!["Create a new Appointment"](https://github.com/Mojdehh/scheduler/blob/master/docs/Appointment-create.png)

!["Edit and Delete buttons are visible when appointment is hovered"](https://github.com/Mojdehh/scheduler/blob/master/docs/Edit%20and%20delete%20buttons%20when%20appointment%20hovered.png)

!["Confirm Delete to proceed"](https://github.com/Mojdehh/scheduler/blob/master/docs/Appointment-delete-confirm.png)

!["Showing Delete Status"](https://github.com/Mojdehh/scheduler/blob/master/docs/Deleting-status.png)

!["Day is grayed out if there is no free appointment spots"](https://github.com/Mojdehh/scheduler/blob/master/docs/Day-grayed-out-if-no-free-spots.png)

## Technologies

Back-End: Node, Express, PostgreSQL

Front-End: HTML, SCSS, React


## Testing 

Different technologies have been implemented for testing such as:
 - Storybookd
 - Jest
 - Cypress

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
