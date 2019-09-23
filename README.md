# toDoApplication
A dummy node js application to be used to deploy on aws.
This is my first experience with node js, mongoDB and AWS. So I am trying to deploy this node application on an EC2 instance and trying to connect to cloud hosted mongoDB on ATLAS and create and access a database in my mongoDB cluster.



Following the below steps to install node in my ec2
https://medium.com/@nishankjaintdk/setting-up-a-node-js-app-on-a-linux-ami-on-an-aws-ec2-instance-with-nginx-59cbc1bcc68c



Steps to download and run the application:

1. Do a git clone of this repo in your machine.
2. do a npm install - it will install all the dependencies mentioned in the packagage.json file
3. inside the toDoController.js file, provide the new connection string for the mongoDB cluster that has been created on atlas along with the username and password. 
4. then do node app.js
5. the application will listen to port 3000 and the uri is /todo.
6. i hosted my web app on ec2 so i used the public_dns:3000/todo to access my application.
