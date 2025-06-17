
var env = process.env.NODE_ENV ? 'beamup':'local';

var config = {
    addon: 'started',
}

switch (env) {
    //Public server build.
    case 'beamup':
		config.port = process.env.PORT
        config.local = "https://bitter-ninnetta-playtvthai-4a9cfca7.koyeb.app/"
        break;

    //Local sever build.
    case 'local':
		config.port = 3649
        config.local = "http://127.0.0.1:" + config.port;
        break;
}

module.exports = config;
