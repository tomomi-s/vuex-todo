<template>
	<div>
		<div class="header">
			<h3>Todos</h3>
			<div class="legend">
				<div>
					<span class="square incomplete"></span>
					<span class="completed">Incomplete</span>
				</div>
				<div>
					<span class="square complete"></span>
					<span class="completed">Complete</span>
				</div>
			</div>
		</div>
		<div class="todos">
			<div 
				@dblclick="doubleClickTodo(todo)" 
				v-for="todo in allTodos" 
				:key="todo.id" 
				class="todo" 
				:class="{'complete': todo.completed, 'incomplete': !todo.completed}"
				>
				<div>
					{{ todo.title }}
				</div>
				<button class="delete" @click="deleteTodo(todo.id)">
					<i class="fas fa-trash"></i>
				</button>
			</div>
			
		</div>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default{
		name: "Todos",
		methods: {
			...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
			doubleClickTodo(todo){
				console.log(todo.completed)
				const update = {
					id: todo.id,
					title: todo.title,
					completed: !todo.completed
				}
				console.log(update)
				this.updateTodo(update)
			}
		},
		computed: mapGetters(['allTodos']),
		created(){
			this.fetchTodos()
		}
	}
</script>

<style scoped>
	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.todos{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}

	.todo{
		padding: 1rem;
		border-radius: 5px;
		background-color: #ffffff;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.delete{
		width: 25px;
		height: 25px;
		color: #ffffff;
		background-color: #ff0000;
		border: none;
		border-radius: 25px;
		float: right;
	}

	.legend{
		display: flex;
	}

	.square{
		padding: 0px 11px;
		margin: 0 5px 0 15px;
	}

	.incomplete{
		background-color: #ffffff;
	}

	.complete{
		background-color: #35495e;
		color: #ffffff;
	}

	@media(max-width: 600px){
		.todos{
			grid-template-columns: 1fr
		}
	}
	
</style>