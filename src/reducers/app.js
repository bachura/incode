const initStateClients = require('../clients');
const initStateClient = require('../client');

export const clients = function (state = initStateClients, action)
{
	return state;
}


export const client = function (state = initStateClient, action)
{

	switch (action.type)
	{
		case 'SET_CLIENT':
		return {
			...state,
			...action.data
		};
		default: return state;
	}

}