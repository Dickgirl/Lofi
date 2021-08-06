const { Plugin } = require('powercord/entities');
window.ily = new Audio('https://v3-fastupload.s3-accelerate.amazonaws.com/1628258154-gg.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASQBHBZCRVR4NVFHK%2F20210806%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210806T142637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=74f27a8166856dccea0386d6ff000f4361fb983ed0331b8defd0587ab58620e1');
const Settings = require('./Settings');

module.exports = class Lofi extends Plugin {
	updateVolume() {
		window.ily.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.ily.pause();
		window.ily.loop = true;
		window.ily.volume = this.settings.get('volume', 1);
		window.ily.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Lofi',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.ily.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
