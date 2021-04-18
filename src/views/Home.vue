<template>

    <AddTask v-show="showAddTaskForm" @add-task="addTask" />

    <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
    />

</template>

<script>

    import Tasks from "../components/Tasks.vue";
    import AddTask from "../components/AddTask";

    export default {
        name: "App",
        components: {
            Tasks,
            AddTask,
        },
        props: {
            showAddTaskForm: Boolean
        },

        data() {
            return {
            tasks: [],
            };
        },
        methods: {
           
            async addTask(task) {
            const res = await fetch("api/tasks", {
                method: "POST",
                headers: {
                "Content-type": "application/json",
                },
                body: JSON.stringify(task),
            });

            const data = await res.json();
            this.tasks = [...this.tasks, data];
            },
            async deleteTask(id) {
            // console.log('task', id);
            if (confirm("Are you sure ?")) {
                //using backtics in order to nclude id in the fetch url and delete it from the backend
                const res = await fetch(`api/tasks/${id}`, {
                method: "DELETE",
                });

                // removing the task from the frontend
                res.status === 200
                ? (this.tasks = this.tasks.filter((task) => task.id !== id))
                : alert("Error deleting task");
            }
            // filter is a higher order array method
            },
            async toggleReminder(id) {
            // Toggle the value of reminder
            const taskToToggle = await this.fetchTask(id);
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

            const res = await fetch(`api/tasks/${id}`, {
                method: "PUT",
                headers: {
                "Content-type": "application/json",
                },
                body: JSON.stringify(updTask),
            });

            const data = await res.json()

            this.tasks = this.tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            );
            },

            async fetchTasks() {
            const res = await fetch("api/tasks")
            const data = await res.json();
            console.log(data);
            return data;
            },

            async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`);
            const data = await res.json();
            return data;
            },
        },

        async created() {
            this.tasks = await this.fetchTasks();
        }
    }
    
</script>
