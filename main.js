var app = new Vue({
    el: '#app',
    data: {
        ans: '',
        formula: '',
        now: new Date(),
        cal_historys: [],
        buttons: [
            [7, 8, 9, '-', '', '√'],
            [4, 5, 6, '/', '', 'x^2'],
            [1, 2, 3, '*', '', 'log'],
            [0, '00', '+', '=', '', 'sin']
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
                this.cal_historys.push(new Array(this.formula + "=" + this.ans, new Date()));
            } else if (cmd === 'C') {
                this.ans = 0;
                this.formula = 0;
            } else if (cmd === '√') {
                this.ans = Math.sqrt(eval(this.formula));
                this.push_history("√" + this.formula + "=" + this.ans, new Date());
            } else if (cmd === 'x^2') {
                this.ans = Math.pow(this.formula, 2);
                this.push_history(this.formula  + "^2 "+ "=" + this.ans, new Date());
            } else if (cmd === 'log') {
                this.ans = Math.log(eval(this.formula));
                this.push_history("log"+this.formula + "=" + this.ans, new Date());
            } else if (cmd === 'sin') {
                this.ans = Math.sin(eval(this.formula) / 180 * Math.PI);
                this.push_history("sin(" + this.formula +")"+ "=" + this.ans, new Date());
            } else {
                this.formula += cmd;
            }
        }
    }
});