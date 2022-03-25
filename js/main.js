
const root = new Vue({
    el: "#root",
    data: {
        todoList : [
            {
                text : "Vedere se l'esercizio funziona",
                done: false,
            },
        ],
        nuovoElement: "",
    },
    methods: {
        addElement(contentNewTodo, isTodoDone){
            if(contentNewTodo.trim() != ""){

                const newElementTodo = {
                    text: contentNewTodo.trim(),
                    done: isTodoDone,
                }
                this.todoList.push(newElementTodo);
                this.nuovoElement = "";
            } else {
                console.warn("ERRORE")
            }
        },
        removeElement(indexElement){
            this.todoList.splice(indexElement, 1)
        },
        toggleDone(indexElement){
            this.todoList[indexElement].done = !this.todoList[indexElement].done
        }
    }
})