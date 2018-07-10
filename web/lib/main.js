(async function () {

    const module = await import('factorial');

    const input = document.getElementById('input');
    const output = document.getElementById('output');

    const calculate = () => {

        const number = parseInt(input.value);
        const result = module.factorial(number);
        output.innerText = `${result}`;
    };

    // Calculate on load

    calculate();

    // Calculate on input

    input.addEventListener('input', calculate);

})();
