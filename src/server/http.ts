import express from 'express';

const app = express();
const loaded = () => console.log('app is loaded, server had already start port 3000');

app.listen(3000, loaded);
export default app;
