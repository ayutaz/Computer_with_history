var app = new Vue({
    el: '#app',
    data: {
        ans: '',
        formula:'',
        now: new Date(),
        cal_history: [
            '1+2=3',
            '5+8=13',
        ],
        cal_times:[],
        items: [
            [7, 8, 9,'-'],
            [4, 5, 6,'/'],
            [1, 2, 3, '*'],
            [0,'00','+','=']
        ],
    },
    computed: {
        response: function () {
            return this.ans ? eval(this.formula) : "";
        }
    },
    methods: {
        calc: function (cmd) {
            console.log(cmd);
            if (cmd === '=') {
                // history.pushState(cmd);
                this.ans = eval(this.formula);
            } else if (cmd === '0') {
                this.ans = cmd;
            } else if (cmd === 'C'){
                this.ans = 0;
                this.formula = 0;
            }else {
                this.formula += cmd;
            }
        }
    },
});