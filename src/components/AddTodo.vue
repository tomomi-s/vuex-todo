<template>
	<div>
		<form @submit.prevent="onSubmit">
			<input type="text" name="title" placeholder="Add todo" v-model="title" class="todo-input">
			<input type="submit" value="Submit" class="submit-btn">
		</form>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default{
		name: "AddTodo",
		data(){
			return {
				title: ""
			}
		},
		methods: {
			...mapActions(['addTodo']),
			onSubmit(){
				this.addTodo(this.title);
				this.title = '';
			}
		}
	}
</script>

<style scoped>
	form{
		display: flex;
		margin-bottom: 10px;
	}

	.todo-input{
		flex: 10;
		height: 40px;
		padding: 5px 10px;
		border: none;
		outline: none;
	}

	.submit-btn{
		flex: 2;
		background-color: #000000;
		border: none;
		color: #ffffff;
		outline: none;
	}
</style>