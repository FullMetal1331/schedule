# Schedule Web App
The **Schedule Web App** is mainly targeted towards school/college students and provides a plethora of tools to magnify their time utilization. With the help of scheduled timetable reminders, project manager and attendance tracker/updater the users are always aware of their upcoming and pending tasks.

## Sign In / Register
New users can register through the registration page while existing user can sign in through the sign in page. Passwords of the users are stored in an encrypted manner using bcrypt and authenticated using the same.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/signin.PNG" height=200 title="SignIn Portal" />
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/register.PNG" height=200 title="Registration Portal" />
</p>

## TimeTable
It contains all seven days of the week with entries for each day divided on an hourly basis from 9AM - 6PM.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/timetable.PNG" height=400 title="TimeTable" />
</p>

## ToDo List
The ToDo page can be used to keep track of all the pending tasks. It has a simple interface with a textfield to add new tasks and completed tasks can be deleted by clicking on them.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/todo.PNG" height=400 title="ToDo List" />
</p>

## Project Manager
The project manager helps students keep a list of all the pending projects/assignments and keep track of all the sub-tasks in each project/assignment. It contains a **project progression bar** which shows the amount of work completed in a project/assignment.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/project_viewer.PNG" height=400 title="Project Manager" />
</p>

## Profile
The profile page displays the user's display name and phone number which can be updated using the provided textfields. It also contains a list of all the subjects i.e. unique TimeTable entries along with their respective attendance percentage. Furthermore, it contains 2 checkboxes for subscribing to email/sms notifications.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/profile.PNG" height=400 title="Profile" />
</p>

## ToDo List Notifications
Every morning 8AM the user receives an email or a sms or both ( depending on the subscription of the user ) containing all the user's pending tasks.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/todo_email.PNG" height=400 title="ToDo List Email Notification" />
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/todo_msg.png" height=400 title="ToDo List SMS Notification" />
</p>

## TimeTable Notifications
10 mins prior to end of every hour from 9AM - 5AM the server checks if any user has a scheduled event( TimeTable entry ) and accordingly sends users an email or a sms or both ( depending on the subscription of the user ) containg the scheduled event and its corresponding attendance.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/attendance_email.PNG" height=400 title="TimeTable Email Notification" />
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/attendance_msg.png" height=400 title="TimeTable SMS Notification" />
</p>

## Attendance Updation
Everyday on 7PM users receive a mail regarding attendance updation. All the scheduled events of the day are listed down and the user has to reply with a string of 'Y'( attended ), 'N'( didn't attend ) or 'C'( cancelled ). According to the user's response the attendance is updated.

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/attendance_updation_email.PNG" height=400 title="Profile" />
</p>

## Video Demo
In the Video below all the basic functions of the **Schedule Web App** are displayed that are:
* TimeTable Updation
* ToDo List Updation
* Profile Page View
* TimeTable event notification( For demonstration the notification frequency was changed to 'every 10 seconds' )
* ToDo List notification( For demonstration the notification frequency was changed to 'every 10 seconds' )
* Attendance Updation( For demonstration the notification frequency was changed to 'every 30 seconds' )

Along with the frontend I have also displayed the database state using SQL commands.( P.S. the bottom right corner has been blurred out as this was actually for my college project presentation :sweat_smile: )

<p align='center'>
  <img src="https://raw.githubusercontent.com/FullMetal1331/schedule/master/src/components/Demo_Pics/schedule_tour.gif" height=400 title="Profile" />
</p>
