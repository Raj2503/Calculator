function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(document.form.textview.value);
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp;
    exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}