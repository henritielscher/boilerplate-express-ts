import startApp from "./api/app";
import startDb from "./database";
import configEnv from "./env";

const app = startApp();

startDb();
app.listen(configEnv.PORT, () =>
	console.log(`Server started on Port ${configEnv.PORT}.`)
);
