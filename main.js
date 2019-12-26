var app = new Vue({
    el: '#app',
    data: {
        ans: '',
        formula:'',
        now: new Date(),
        items: [
            [7, 8, 9,'-','','√'],
            [4, 5, 6, '/','','x^2'],
            [1, 2, 3, '*','','log'],
            [0,'00','+','=','','sin']
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