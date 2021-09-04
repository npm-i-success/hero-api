const app = require("./api/server");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server up and running.`);
});
