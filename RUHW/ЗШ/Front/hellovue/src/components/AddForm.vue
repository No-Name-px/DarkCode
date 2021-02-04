<template>
	<div>
		<form @submit.prevent="onSubmit">
			<input type="text" v-model="title">
			<button type="submit">Add</button>
		</form>
	</div>
</template>
<script>
let counter = 1;
export default {
	data(){
		return{
			title:''
		}
	},
	methods: {
		onSubmit(){
			if(this.title.length > 0){
				let newTask = {
					id: counter,
					title: this.title,
					completed: false
				}
				counter++;
				this.$emit('add-task', newTask)
				this.title = '';
			}
		}
	}
}
</script>
<style>
	
</style>