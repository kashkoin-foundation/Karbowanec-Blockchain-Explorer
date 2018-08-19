var api = 'http://45.32.139.201:30965';
var apiList = ["http://45.32.139.201:30965", "http://45.32.139.201:30965"];
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KHK';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "khk": [
		        ["youpool.io/KHK", "http://khk.youpool.io:8117/stats"],
				["Crypto9coin.cf/khk", "https://crypto9coin.cf:30968/stats"],
				["walpool.com/khk", "https://api.walpool.com/rpc/khk/stats"],
	            ["getpool.org/khk", "https://api.getpool.org/rpc/khk/stats"],
                ["easyhash.pro/khk", "https://easyhash.pro/khk/api/stats"]		
           ]
};
