import { AppServer } from './server';

// create the application server and initialize it
const application = new AppServer();
application.init();

// make server listen to port present on enviroment variable PORT
application._application.listen(process.env.PORT);
export { application };