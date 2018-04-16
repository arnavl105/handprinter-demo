const initialState = {
	ideas: [],
	ideasTaken: []
}

export const actionIdeas = (state = initialState, action) => {
	switch(action.type) {
		case "TAKE_ACTION":
			return {
				...state,
				ideasTaken: state.ideasTaken += action.idea
			}
		case "ADD_IDEA":
			return {
				...state,
				ideas: idea += action.idea
			}
	
	}

}