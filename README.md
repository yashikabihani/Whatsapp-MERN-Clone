### A MERN Whatsapp Clone Application

Learnt a very cool thing : Making MongoDB realtime. WOrked like Firebase.

##Frontend:\
React\
FireBase for Authentication. Hosting\
Material UI\
Pusher-js\
Axios

##Backend :\
ExpressJS \
NodeJS\
MongoDB

For real time functionality, MongoDB's change stream and Pusher. The whole process is *Once there is change in MongoDB's selected collection, that will fire off change-stream --> which will fire Pusher --> which will fire off the Axios/ fetch function in the frontend, which will refresh the frontend to see in real time*


The App has two parts : The SideBar and the chat-side


Pusher - To make the MongoDB real Time(in the backend)
Pusher-js : In the Frontend

P.S : Do take the 'whatsapp-backend' folder outside this folder