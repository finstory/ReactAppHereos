import { types } from "../types/types";


export const authReducer = (auth = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...auth,
                logged: true,
                user : action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return auth;
    }

}