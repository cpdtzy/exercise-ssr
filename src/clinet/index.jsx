import {hydrateRoot} from 'react-dom/client';
import Home from "../pages/Home";

const app = document.getElementById('app');
const root = hydrateRoot(app);
export default root.render(<Home />);
