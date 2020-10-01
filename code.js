let input = document.getElementById('inputText').value
let output = ''

function spongebobify(random) {
    input = document.getElementById('inputText').value
    output = ''
    if (random) {
        for (i = 0; i < input.length; i++) {
            let upperCase = (Math.random() < 0.5)
            if (upperCase) {
                output += input.charAt(i).toUpperCase()
            } else {
                output += input.charAt(i).toLowerCase()
            }
        }
    } else {
        for (i = 0; i < input.length; i++) {
            if (i % 2 === 0) {
                output += input.charAt(i).toUpperCase()
            } else if (i % 2 !== 0) {
                output += input.charAt(i).toLowerCase()
            }
        }
    }
    document.getElementById('output').textContent = output
}

document.addEventListener('click', click => {
    if (click.target == document.getElementById('random')) {
        spongebobify(true)
    } else if (click.target == document.getElementById('alternate')) {
        spongebobify(false)
    }
})