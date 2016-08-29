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

	function addAsyncPromise(x,y){
		console.log(`   [Service Provider] - processing ${x} and ${y}`);
		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`   [Service Privider] - returning the result`);
				resolveFn(result);
			},3000);
		});
		return p;
		
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncPromise : addAsyncPromise
	}
})();