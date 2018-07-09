import('wasmpack-example-factorial').then((module) => {

    const input = document.getElementById('input');
    const output = document.getElementById('output');

    const calculate = () => {

        const number = parseInt(input.value);
        const result = module.factorial(number);
        output.innerText = `${result}`;
    };

    calculate();

    input.addEventListener('input', calculate);
});