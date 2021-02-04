<template>
  <div>
		<AddForm @add-task="addTask"/>
    <ul>
			<li v-for="(task, key) in tasks" :key="key" :class="{done: task.completed}">
				<span>
					<input type="checkbox" v-on:change="task.completed = !task.completed">
					<strong>{{task.id}}</strong>
					{{task.title}}
				</span>
				<div class="buttons">
					<button @click="editHandler(task)">Edit</button>
					<button @click="removeHandler(task.id)">Delete</button>
				</div>
			</li>
		</ul>
		<EditForm @edit-task="editTask"/>
  </div>
</template>

<script>

import AddForm from '@/components/AddForm'
import EditForm from '@/components/EditForm'

export default {
	components: {
		AddForm,
		EditForm
	},
	methods: {
		addTask(task){
			this.tasks.push(task);
		},
		editHandler(task){
			this.$emit('edit-handler', task);
		},
		editTask(id, value){
			this.tasks[this.tasks.findIndex(x => x.id === id)].title=value;
		},
		removeHandler(id){
			this.tasks = this.tasks.filter(t => t.id != id);
		}
	},
	data(){
		return{
			tasks:[]
		}
	}
};
</script>

<style>
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li{
		display: flex;
		justify-content: space-between;
		margin: 1rem 2rem;
	}
	li.done{
		text-decoration: line-through;
		opacity: 0.5;
	}
	input{
		margin-right: 1rem;
	}
	strong{
		margin-right: 1rem;
	}
</style>
