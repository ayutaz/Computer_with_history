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
            if (cmd === '=') {
                this.ans = eval(this.formula);
            } else if (cmd === 'C') {
                this.ans = 0;
                this.formula = 0;
            } else if (cmd === '√') {
                this.ans = Math.sqrt(eval(this.formula));
            } else if (cmd === 'x^2'){
                this.ans = Math.pow(this.formula, 2);
            } else if (cmd === 'log') {
                this.ans = Math.log(eval(this.formula));
            } else if (cmd === 'sin') {
                this.ans = Math.sin(eval(this.formula));
            }else {
                this.formula += cmd;
            }
        }
    },
});