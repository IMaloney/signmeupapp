import React, { useState } from 'react';

const QueueContext = React.createContext();


// need to do reducer trick here
export const QueueProvider = () => {
	const [queue, setQueue] = useState([]);
	// queue should be an object with the correct info
	const addQueue = (newQueue) => {
		// pushes new queue to api and updates state simultaneously
		// async await
		// instead of adding current queues in app make request to api
		setQueue([...queue, newQueue]);
	};

	const updateQueue = () => {
		// calls upon api to update queues in app
	};

	return 
}; 

export default QueueContext;