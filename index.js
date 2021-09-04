const app = require("./api/server");
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server up and running.`);
});
