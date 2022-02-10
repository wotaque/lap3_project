const app = require('./server');
const cors = require('cors');

app.use(cors());

const port = process.env.PORT||3001;

app.listen(port, () => console.log(`Express is listening to ${port}`));