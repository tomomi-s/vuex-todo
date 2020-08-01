import axios from 'axios';

const state = {
	todos: []
};

const getters = {
	allTodos: (state) => state.todos
};

const actions = {
	async fetchTodos({ commit }){
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
		commit('setTodos', res.data);
	},
	async addTodo({commit}, title){
		const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, complete: false })
		commit('newTodo', res.data);
	},
	async deleteTodo({commit}, id){
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		commit('deleteTodo', id)
	},
	async filterTodos({commit}, limit){
		const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
		commit('setTodos', res.data)
	},
	async updateTodo({commit}, updatedTodo){
		console.log(updatedTodo)
		const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
		console.log(res)
		commit('updateTodo', res.data)
	}

};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
	updateTodo: (state, updatedTodo) => state.todos = (state.todos.map(todo=> todo.id === updatedTodo.id ? todo = updatedTodo : todo)),
	deleteTodo: (state, id) => state.todos.filter(todo=> todo.id !== id)
};

export default {
	state,
	getters,
	actions,
	mutations
}