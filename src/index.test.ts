import { test, describe } from "bun:test";

import { startBot } from "./bot";

describe("1.20.1", () => {
	test("start 1.20.1", (done) => {
		startBot("1.20.1")
			.then(() => {
				done();
			})
			.catch((err) => {
				done(err);
			});
	}, 30000);
});

describe("1.20.2", () => {
	test("start 1.20.2", (done) => {
		startBot("1.20.2")
			.then(() => {
				done();
			})
			.catch((err) => {
				done(err);
			});
	}, 30000);
});

describe("1.21", () => {
	test("start 1.21", (done) => {
		startBot("1.21")
			.then(() => {
				done();
			})
			.catch((err) => {
				done(err);
			});
	}, 30000);
});
