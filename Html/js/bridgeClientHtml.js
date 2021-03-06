//client
(function(bridge){
	//common
	function assert(condition, message) {
    	if (!condition) {
        	throw message || "Assertion failed";
    	}
	}

	bridge.init=function(register){
		//assert register is a function
		assert(register instanceof Function,"init() should has a function as parameter");
		bridge.subscribe("MESSAGE2C",function(message,responseCallback){
			register(message,responseCallback);
		})
	}  
	bridge.send=function(message,responseCallback){
		bridge.publish("MESSAGE2S",[message,responseCallback]);
	}
	//dispatch event
	var event=new CustomEvent('WebViewJavascriptBridgeReady')
	event.bridge=bridge;
	document.dispatchEvent(event);
})(bridge) 