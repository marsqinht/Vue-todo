const TODO_KEY = 'todo_store';
export default {
	fetch(){
       return JSON.parse(localStorage.getItem(TODO_KEY||'[]'))
	},
	save(items){
     localStorage.setItem(TODO_KEY,JSON.stringify(items))
	}
}