document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: "#app",
        data: {
            btnText: 'ajouter',
            title: 'todo List',
            subtitle: 'made with ❤️ in Vue.js',
            list: [
                {
                    'todo': 'do stuff'
                },
                {
                    'todo': 'learn VueCLI'
                }
            ]
        },
        methods: {
            // NE PAS UTILISER DES ARROWS FUNCTIONS COMME UN DEBILE,
            // LE CONTEXTE DE this N'EST PLUS LE MEME
            addToDo: function () {
                this.list.push(
                    {
                        'todo': this.todo
                    }
                );
                this.todo = ''
            }
        }
    })
})