const initialState = {
	startTime: Date.now(),
	expTime: Date.now()
}

export const timer = (state = initialState, action) => {

	switch(action.type) {
		case "ADD_TIME":
			return {
				...state,
				expTime: state.expTime + action.time
			}
		case "REFRESH_TIME":

			var times = (state.expTime > state.startTime) ? 
				{ startTime: Date.now() } : 
				{ startTime: Date.now(), expTime: Date.now() };

			return {
				...state,
				...times
			}

		default:
			return initialState

	}


}