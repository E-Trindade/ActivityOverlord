angular.module('common')

.service('SessionService', ['Restangular', 'LocalService',

	function (Restangular, LocalService) {

		this.load = (session_data) => {
			if (!session_data)
				session_data = LocalService.get('session_data', {});
			this.user_id = session_data.user_id;
			this.auth_token = session_data.auth_token;
		}

		this.create = (userId, auth_token) => {

			let session_data = {
				user_id: userId,
				auth_token: auth_token
			};

			LocalService.set('session_data', session_data);
			this.load(session_data);
		}

		this.destroy = () => {
			LocalService.unset('session_data');
			this.load({});
		}

	}
])