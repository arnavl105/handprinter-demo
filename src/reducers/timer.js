const initialState = {
	currentTime: Date.now(),
	expTime: Date.now()
}

export const timer = (state = initialState, action) => {

	switch(action.type) {
		case "ADD_TIME":
			return {
				...state,
				expTime: state.expTime + action.time
			}

	}


}