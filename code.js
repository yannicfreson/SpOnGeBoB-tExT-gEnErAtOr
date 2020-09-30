let input = document.getElementById('inputText').value
let output = ''
let random = false

function spongebobify() {
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
        random = true
        spongebobify()
    } else if (click.target == document.getElementById('alternate')) {
        random = false
        spongebobify()
    } else if (click.target == document.getElementById('spongebobify')) {
        spongebobify()
    }
})