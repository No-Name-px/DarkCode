<template>
	<div class="form-bg" :class="{show: this.view}">
		<form @submit.prevent="onSubmit">
			<input type="text" v-model="formTitle">
			<button type="submit">Edit</button>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			view: false,
			formTitle: '',
			editTaskId: ''
		}
	},
	methods: {
		onSubmit(){
			this.view = false;
			this.$emit('edit-task', this.editTaskId, this.formTitle);
			this.formTitle = '';
		},
		editTask(task){
			this.view = true;
			this.formTitle = task.title;
			this.editTaskId = task.id;
		}
	},
	created() {
		this.$parent.$on('edit-handler', this.editTask);
	},
}
</script>
<style>
	.form-bg{
		position: fixed;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 139, 0.5);
		display: none;
	}
	.show{
		display: flex;
	}
</style>