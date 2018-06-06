const sasm = require("@sasm/system");
sasm.
	start().
	registerRoot(__dirname).
	registerExtension("@sasm/router").
	registerExtension("@sasm/router-dist").
	listen();

