let input = prompt('What do you wanna SpOnGeBoBiFy ?')
let output = ''

function spongebobify(random) {
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
}

spongebobify

document.getElementById('Output').textContent = output

document.addEventListener('click', function (click) {
    if (click.target.classList.contains('Random'))
})