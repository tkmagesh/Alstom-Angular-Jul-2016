var ops = (function(){
	function addSync(x,y){
		console.log(`   [Service Provider] - processing ${x} and ${y}`);
		var result = x + y;
		console.log(`   [Service Privider] - returning the result`);
		return result;
	}
	function addSyncClient(x,y){
		console.log(`[Service Consumer] - triggering addSync for ${x} and ${y}`);
		var result = addSync(x,y);
		console.log(`[Service Consumer] - result = ${result}`);
	}

	function addAsync(x,y, onResult){
		console.log(`   [Service Provider] - processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`   [Service Privider] - returning the result`);
			if (typeof onResult === 'function')
				onResult(result);
		},3000)
		
	}
	function addAsyncClient(x,y){
		console.log(`[Service Consumer] - triggering addSync for ${x} and ${y}`);
		addAsync(x,y, function(result){
			console.log(`[Service Consumer] - result = ${result}`);
		});
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient
	}
})();