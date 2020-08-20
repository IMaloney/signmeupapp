import createContext from './createContext';

// this will be an api call to get the current coures
const courses = [
    {
        id: '0',
        name: 'TA Hours',
        tag: 'cs0160',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 80,
        course: "introduction to data structures and algorithms"
    },
    {
        id: '1',
        name: 'cs32',
        tag: 'cs0320',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 10,
        course: "test"
    },
    {
        id: '2',
        name: 'cs 33',
        tag: 'cs0330',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 1,
        course: "Intro to Computer Systems"
    }

];

const reducer = (state, action) => {
	switch(action.type) {
		case 'add_queue':
			return [...state, action.payload];
		case 'delete_queue':
			return state.filter((queue) => queue.id !== action.payload);
	}
	return state;
};

const addQueue = (dispatch) => {
	return async (queue, callback) => {
		// ultimately will be an async function, here you post to api (or redis/memcached)
		dispatch({type: 'add_queue', payload: queue});
		if (callback){
			callback();
		}
	} 
};

const deleteQueue = (dispatch) => {
	return async (queue) => {
		dispatch({type: 'delete_queue', payload: queue.id})
	}
}

export const { Context, Provider } = createContext(reducer, { addQueue, deleteQueue }, courses);