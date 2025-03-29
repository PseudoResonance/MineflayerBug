import Mineflayer from "mineflayer";

export function startBot(version: string) {
	return new Promise<boolean>((resolve, reject) => {
		console.log("Creating bot");
		const bot = Mineflayer.createBot({
			auth: "microsoft",
			hideErrors: false,
			host: "mc.hypixel.net",
			logErrors: true,
			port: 25565,
			username: "username",
			version: version,
			viewDistance: "normal",
		});

		bot.on("kicked", (reason, loggedIn) => {
			if (!loggedIn) {
				console.error("Kicked with reason", reason);
			} else {
				console.error("Kicked during login with reason", reason);
			}
		});

		bot.on("end", (reason) => {
			console.error("Disconnected with reason", reason);
			if (reason === "socketClosed") reject(false);
			else if (reason === "disconnect.quitting") resolve(true);
		});

		bot.on("error", (err) => {
			console.error("Eror occurred during execution", err);
		});

		bot.on("spawn", () => {
			console.log("Player spawned, quitting game after 5 seconds");
			setTimeout(() => {
				console.log("Disconnecting");
				bot.quit();
			}, 5000);
		});

		bot.on("message", (jsonMsg) => {
			console.log(jsonMsg.toString());
		});
	});
}
