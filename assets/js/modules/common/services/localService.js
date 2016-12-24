angular.module('common')

.service('LocalService', [
	function () {
		return {
			get: (key, default_val) => {
				if (default_val === undefined)
					default_val = null;
				return JSON.parse(localStorage.getItem(key)) || default_val;
			},
			set: (key, val) => {
				return localStorage.setItem(key, JSON.stringify(val));
			},
			unset: (key) => {
				return localStorage.removeItem(key);
			}
		}
}])