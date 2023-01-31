function sleep (ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

const redirect = (async () => {
   await sleep(1250)
	window.location.href = "https://linktr.ee/yixsoviet"
})();
