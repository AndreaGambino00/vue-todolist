Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            newToDo: '',
            toDos: [
                'Fare i compiti',
                'Fare la spesa',
                'Pulire casa',
            ],
        },

        methods: {
            addToDo () {
                if(this.newToDo != "") {
                this.toDos.push(this.newToDo);
                this.newToDo="";
                }
            },
            removeToDo(index) {
                this.toDos.splice(index, 1);
            }
        }
    }
)

