const initialState = {
	ideas: [],
	ideasTaken: 0
}

export const actionIdeas = (state = initialState, action) => {
	switch(action.type) {
		case "TAKE_ACTION":
			return {
				...state,
				ideasTaken: state.ideasTaken += 1
			}
		case "ADD_IDEA":
			return {
				...state,
				ideas: state.idea += action.idea
			}
		default:
			return initialState
	
	}

}