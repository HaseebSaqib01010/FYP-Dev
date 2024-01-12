let express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

// Create global app object
let app = express();
var allowedOrigins = ["http://localhost:4200", "http://localhost:4300", "http://localhost:3000"];

require("./server/app-config")(app);

// const http = require('http').Server(app);
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
// 	next();
//   });

// const connectionUrl = "mongodb://127.0.0. :27017/investation";
const connectionUrl = "mongodb://localhost:27017/";
mongoose.connect(connectionUrl).then(() => console.log('connected')).catch(err => console.log({err}))

// finally, let's start our server...
let server = app.listen(process.env.PORT || 8000, function () {
	console.log("Listening on port " + server.address().port);
});

global.investSocket = require("socket.io")(server, {
	cors: {
		credentials: true,
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg = "The CORS policy for this site does not " + "allow access from the specified Origin.";
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	},
});

investSocket.on("connection", (socket) => {
	console.log("a user connected");

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});


// process.on("SIGTERM", () => {
// 	console.info("SIGTERM signal received.");
// 	console.log("Closing http server.");

// 	server.close(() => {
// 		console.log("Http server closed.");
// 		// boolean means [force], see in mongoose doc
// 		mongoose.connection.close(false, () => {
// 			console.log("MongoDb connection closed.");
// 			process.kill(process.pid, "SIGTERM");
// 			process.exit(0);
// 		});
// 	});
// });
// process.once("SIGUSR2", function () {
// 	server.close(() => {
// 		console.log("Http server closed.");
// 		// boolean means [force], see in mongoose doc
// 		mongoose.connection.close(false, () => {
// 			console.log("MongoDb connection closed.");
// 			process.kill(process.pid, "SIGUSR2");
// 			process.exit(0);
// 		});
// 	});
// });

// 	// this is only called on ctrl+c, not restart
// 	server.close(() => {
// 		console.log("Http server closed.");
// 		// boolean means [force], see in mongoose doc
// 		mongoose.connection.close(false, () => {
// 			console.log("MongoDb connection closed.");
// 			process.kill(process.pid, "SIGINT");

// 			process.exit(0);
// 		});
// 	});
// });
