const data = {
    myLists: ['安裝', '執行', '佈署'],
    doSomething: '',
    errorMessage: ''
}

new Vue({
    el: '#my-todo',
    data,
    methods: {
        insert: function () {
            this.errorMessage = '';
            if (this.doSomething === '') {
                this.errorMessage = '請輸入待辦事項!';
                return;
            }
            this.myLists.push(this.doSomething);
            this.doSomething = '';
        },
        remove: function (index) {
            this.myLists.splice(index, 1);
        }
    },
    watch: {
        doSomething(value) {
            this.errorMessage = '';
        }
    }
})