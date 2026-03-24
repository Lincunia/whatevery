import StaticServer from 'static-server';

let server = new StaticServer({
	rootPath: ".",
	port: 1985,
	name: "the-house-for-this",
	cors: "*",
	followSymlink: true,
	templates: {
		index: "index.html",
		notFound: "404.html",
	},
});

server.start(function () {
	console.log("Server listening to", server.port);
});

server.on("request", function (req, res) {});

server.on("symbolicLink", function (link, file) {
	console.log("File", link, "is a link to", file);
});

server.on("response", function (req, res, err, file, stat) {});
