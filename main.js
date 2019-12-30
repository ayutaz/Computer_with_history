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
    created() {
        
    },
    mounted() {
        
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
                this.cal_historys.reverse();
            } else if (cmd === 'C') {
                this.ans = '';
                this.formula = '';
            } else if (cmd === 'Del') {
                this.formula = this.formula.slice(0, -1);
            } else if (cmd === '√') {
                this.ans = Math.sqrt(eval(this.formula));
                this.cal_historys.push(
                  new Array("√" + this.formula + "=" + this.ans, new Date())
                );
                this.cal_historys.reverse();
            } else if (cmd === 'x^2') {
                this.ans = Math.pow(this.formula, 2);
                this.cal_historys.push(
                  new Array(this.formula + "^2" + "=" + this.ans, new Date())
                );
                this.cal_historys.reverse();
            } else if (cmd === 'log') {
                this.ans = Math.log(eval(this.formula));
                this.cal_historys.push(
                  new Array("log" + this.formula + "=" + this.ans, new Date())
                );
                this.cal_historys.reverse();
            } else if (cmd === 'sin') {
                this.ans = Math.sin(eval(this.formula) / 180 * Math.PI);
                this.cal_historys.push(
                  new Array("sin(" + this.formula +")" + "=" + this.ans, new Date())
                );
                this.cal_historys.reverse();
            } else {
                this.formula += cmd;
            }
        },
        reuse: function (string) {
            number = string.indexOf('=');
            this.formula = string.slice(0, number);
            this.ans = '';
        },
    }
});