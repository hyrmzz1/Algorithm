const fs = require('fs');

const readFileSyncAddress = 'dev/stdin';
// const readFileSyncAddress = 'test.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');
const [n, k] = input[0].split(' ');

function solution(n, k) {
	const queue = Array.from({ length: n }, (_, i) => i + 1);
	const answer = [];

	let cnt = 0;
	while (queue.length > 0) {
		if (cnt < k - 1) {
			queue.push(queue.shift());
			cnt++;
		}
		if (cnt === k - 1) {
			answer.push(queue.shift());
			cnt = 0;
		}
	}

	console.log(`<${answer.join(', ')}>`);
}

solution(n, k);