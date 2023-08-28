console.log('testing');

const num_1 = ()=>{
    document.getElementById('exampleInputEmail1').value += 1
}
const num_2 = ()=>{
    document.getElementById('exampleInputEmail1').value += 2
}
const num_3 = ()=>{
    document.getElementById('exampleInputEmail1').value += 3
}
const num_4 = ()=>{
    document.getElementById('exampleInputEmail1').value += 4
}
const num_5 = ()=>{
    document.getElementById('exampleInputEmail1').value += 5
}
const num_6 = ()=>{
    document.getElementById('exampleInputEmail1').value += 6
}

const num_7 = ()=>{
    document.getElementById('exampleInputEmail1').value += 7
}
const num_8 = ()=>{
    document.getElementById('exampleInputEmail1').value += 8
}
const num_9 = ()=>{
    document.getElementById('exampleInputEmail1').value += 9
}

const num_0 = ()=>{
    document.getElementById('exampleInputEmail1').value += 0
}


const reset = ()=>{
    document.getElementById('exampleInputEmail1').value =''
}

const answer =()=>{
    let ans = eval(document.getElementById('exampleInputEmail1').value)
    document.getElementById('exampleInputEmail1').value = ans
}

const plus = ()=>{
    document.getElementById('exampleInputEmail1').value += '+'
}

const divide = ()=>{
    document.getElementById('exampleInputEmail1').value += '/'
}

const multiply = ()=>{
    document.getElementById('exampleInputEmail1').value += '*'
}

const dot = ()=>{
    document.getElementById('exampleInputEmail1').value += '.'
}

const subtract = ()=>{
    document.getElementById('exampleInputEmail1').value += '-'
}

const del = ()=>{
    var num= document.getElementById("exampleInputEmail1").value;
    var stripped = num / 10 | 0;
    document.getElementById('exampleInputEmail1').value = stripped
}
