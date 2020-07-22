import createContext from './createContext';

// claimed and missing can NEVER be 1 at the same time
// this could happen when two people are doing something at the same time so keep this in mind
const studentList = [
{
    name: "Robert Ian Maloney",
    id: 'daklde23290',
    // will need to convert time to make it relative to now
    time: "10 min. ago",
    missing: 0,
    claimed: 1
},
    {
    name: "John Cena",
    id: '328r9dhflksa',
    // will need to convert time to make it relative to now
    time: "15 min. ago",
    missing: 1,
    claimed: 0
},
    {
    name: "dat boi",
    id: 'adklhe2kjrej',
    // will need to convert time to make it relative to now
    time: "20 min. ago",
    missing: 0,
    claimed: 0
}

];

// students have their own id, unrelated to the order in the queue
const reducer = (state, action) => {
    // maybe there is a faster way to claim tickets given that this list could get long
    // make less cases considering some do the exact same thing
    switch(action.type) {
        case 'update_student':
            return state.map((student) => {
                return (student.id === action.payload.id) ? action.payload : student;
            });
        case 'delete_student':
            return state.filter((student) => {
                student.id !== action.payload;
            });
        // probably should handle cutoff in here too
        case 'add_student':
            return [...state, action.payload];
        default:
            return state;
    }
}; 

const addStudent = (dispatch) => {
    return async (name) => {
        // student could be created here
        // need to generate a random id --> time is another thing to figure out
        const student = {name, id: 'fkakjhdsfl', time: 'now', missing: 0, claimed: 0};
        dispatch({type: 'add_student', payload: student});
    };
}

const claimStudent = (dispatch) => {
    // time should turn into an updating clock
    return async (student) => {
        student.missing = 0;
        student.claimed = 1;
        dispatch({type: 'update_student', payload: student});
    };
};

const unclaimStudent = (dispatch) => {
    return async (student) => {
        student.claimed = 0;
        student.missing = 0;
        dispatch({type: 'update_student', payload: student});
    };
};

const endTicket = (dispatch) => {
    return async (student) => {
        // update persistent db here
        dispatch({type: 'delete_student', payload: student});
    };
};

const markMissing = (dispatch) => {
    // make sure update student is doing what you think it is
    return async (student) => {
        student.missing ^= 1;
        dispatch({type: 'update_student', payload: student});
    };
};

const deleteTicket = (dispatch) => {
    // this might just be the student's id
    return async (student) => {
        dispatch({type: 'delete_student', payload: student.id});
    };
};

// need to figure out how to get students for specific course in here (thats the inital state)
export const { Context, Provider } = createContext(reducer, { addStudent,
                                                              claimStudent, 
                                                              unclaimStudent, 
                                                              endTicket, 
                                                              markMissing, 
                                                              deleteTicket}, 
                                    studentList);