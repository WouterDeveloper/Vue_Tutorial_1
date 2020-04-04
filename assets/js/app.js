Vue.config.devtools = true,
new Vue({          
    el: '.content',
    data: {
        newTask: '',
        tasks: [
            {description: 'Groenten snijden', completed: true  },
            {description: 'Koken', completed: false },
            {description: 'Fijne avond met emma', completed: false },
            {description: 'Fijne avond met emma', completed: false },
            {description: 'Fijne avond met emma', completed: false },
            {description: 'Fijne avond met emma', completed: false },
            {description: 'Fijne avond met emma', completed: false },
        ],
        buttonEnabled: true,
        fullTask: true,
        return (){
            tasks: []
        },
    },
    computed: {
        incompleteTasks(){
            return this.tasks.filter(task => ! task.completed);
        },
        completeTasks(){
            return this.tasks.filter(task => task.completed);
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        completeTask(index) { 
            Vue.set(this.task, 'completed', true)            
        },
        deleteTask(index) { 
            Vue.delete(this.notes, index);
        },
        showFullTask(){
            this.fullTask = !this.fullTask;
        },
    }
})