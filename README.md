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



If using AWS DocumentDB which has inbuilt MongoDB Support. 

1) Follow tutorial https://www.aws.training/Details/eLearning?id=36852 to learn how to create a documentDB cluster which makes use of VPC, 1 public and 2 private subnets. Public subnet is used to connect to the db located in private subnet as we cannot directly access private subnet from outside vpc. 

2) mongoose.connect('mongodb://sarthak:sarthakjain@docdb-2019-09-24-02-39-10.cluster-cy3p0tyba1ct.us-east-1.docdb.amazonaws.com:27017/test',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    ssl: true,
    sslValidate: false,
    sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')})
.then(() => console.log('Connection to DB successful'))
.catch((err) => console.error(err,'Error'));

Use this command to connect to your above created documentDB using node js application running on EC2 instance on public subnet of your vpc. Make sure to place your rds-combined-ca-bundle.pem which is given if TLS is enabled for db in the same folder with other node js files. 

3. copy the database.url from the connection string in documentDB till the query parameters and provide a db name after the port. In above url, the name is test. 

