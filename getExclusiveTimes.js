function getExclusiveTimes(n, logs) {
	const exclusiveTimes = new Array(n).fill(0);
	const stack = [];
	let prevTimestamp = 0;

	for (let i = 0; i < logs.length; i++) {
		const [funcId, eventType, timestamp] = logs[i].split(":");
		const currentTimestamp = parseInt(timestamp);

		if (eventType === "start") {
			if (stack.length > 0) {
				const prevFuncId = stack[stack.length - 1];
				exclusiveTimes[prevFuncId] += currentTimestamp - prevTimestamp;
			}
			stack.push(parseInt(funcId));
			prevTimestamp = currentTimestamp;
		} else {
			const poppedFuncId = stack.pop();
			exclusiveTimes[poppedFuncId] += currentTimestamp - prevTimestamp + 1;
			prevTimestamp = currentTimestamp + 1;
		}
	}

	return exclusiveTimes;
}

const n = 2;
const logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
const result = getExclusiveTimes(n, logs);
console.log(result); // Output: [3, 4]
