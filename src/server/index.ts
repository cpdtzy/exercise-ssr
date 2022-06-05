import server from './http';
import home from "../pages";


server.get('/', function (req, res) {
    res.send(home);
});
