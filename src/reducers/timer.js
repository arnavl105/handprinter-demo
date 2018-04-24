const initialState = {
	startTime: Date.now(),
	expTime: Date.now()
}

export const timer = (state = initialState, action) => {

	switch(action.type) {
		case "ADD_TIME":
			return {
				...state,
				expTime: state.expTime + parseTime(action.time)
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
			return state;

	}


}

const parseTime = (timeString) => {
	timeString = timeString.split(' ');
	var num = timeString[0];
	var unit = timeString[1];

	try{
		num = parseFloat(num);
	} catch(error) {
		throw 'INVALID STRING FORMAT';
	}

	switch(unit){
		case "minutes":
			return num * 60 * 1000;
		case "hours":
			return num * 60 * 60 * 1000;
		case "days":
			return num * 24 * 60 * 60 * 1000;
		case "years":
			return num * 24
	}


}
