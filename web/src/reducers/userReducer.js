import { SET_USER } from "../action/actionType";

const INITIAL_STATE = {
	user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER:
			console.log("ENTROU")
			return {
				...state,
				user: action.user,
			};
		default:
			console.log(state)
			return state;
	}
};

export default userReducer;
