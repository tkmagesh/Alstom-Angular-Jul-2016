var utils = angular.module("utils", []);
		utils.filter("trimText", function(appDefaults){
			return function(data, trimLength){
				trimLength = trimLength || appDefaults.trimLength;
				return data.length > trimLength ? data.substr(0,trimLength) + '...' : data;
			}
		});