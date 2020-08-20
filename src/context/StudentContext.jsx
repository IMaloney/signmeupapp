import React, { useReducer } from 'react';

const reducer = (state, action) => {
    // maybe there is a faster way to claim tickets given that this list could get long
    // make less cases considering some do the exact same thing
    switch(action.type) {
        case 'update_student':
            return state.map((student) => {
                return (student.id === action.payload.id) ? action.payload : student;
            });
        case 'delete_student':
        // lower waiting in queue
            return state.filter((student) => student.id !== action.payload);
        // probably should handle cutoff in here too
        case 'add_student':
            return [...state, action.payload];
        default:
            return state;
    }
}; 

const StudentContext = React.createContext();

export const StudentProvider = ({children, students}) => {
	// console.log("students " + students);
	const [state, dispatch] = useReducer(reducer, students);

	const addStudent = async (name) => {
        // student could be created here
        // need to generate a random id --> time is another thing to figure out
        const student = {name, id: 'fkakjhdsfl', time: 'now', missing: 0, claimed: 0};
        dispatch({type: 'add_student', payload: student});
	}

	const claimStudent = async (student) => {
	    // time should turn into an updating clock
        student.missing = 0;
        student.claimed = 1;
        dispatch({type: 'update_student', payload: student});
	};

	const unclaimStudent = async (student) => {
        student.claimed = 0;
        student.missing = 0;
        dispatch({type: 'update_student', payload: student});
	};

	const endTicket = async (student) => {
	        // update persistent db here
	        dispatch({type: 'delete_student', payload: student.id});
	};

	const markMissing = async (student) => {
	    // make sure update student is doing what you think it is
	    student.missing ^= 1;
	    dispatch({type: 'update_student', payload: student});
	};

	const deleteTicket = async (student) => {
	    dispatch({type: 'delete_student', payload: student.id});
	};

	return (
		<StudentContext.Provider 
			value={{state, addStudent, claimStudent, unclaimStudent, endTicket, markMissing, deleteTicket}}
		>
			{children}
		</StudentContext.Provider>
	);
};

export default StudentContext;