console.log('testing');

const num = (value) => {
    document.getElementById('exampleInputEmail1').value += value;
};

const reset = () => {
    document.getElementById('exampleInputEmail1').value = '';
};

const answer = () => {
    let display = document.getElementById('exampleInputEmail1');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
};

const operator = (op) => {
    document.getElementById('exampleInputEmail1').value += op;
};

const dot = () => {
    document.getElementById('exampleInputEmail1').value += '.';
};

const del = () => {
    let display = document.getElementById('exampleInputEmail1');
    display.value = display.value.slice(0, -1);
};
