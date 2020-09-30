let input = prompt('What do you wanna SpOnGeBoBiFy ?')
let output = ''

for (i = 0; i < input.length; i++) {
    let upperCase = (Math.random() < 0.5)
    if (upperCase) {
        output += input.charAt(i).toUpperCase()
    } else {
        output += input.charAt(i).toLowerCase()
    }
}

document.getElementById('Output').textContent = output