function spongebobify(random, input) {
    if (input === undefined) {
        input = document.getElementById('inputText').value
    }

    if (input === '') {
        input = "Enter text"
        document.getElementById('outputText').style.color = "#757575"
    }

    let output = ''

    if (random) {
        for (i = 0; i < input.length; i++) {
            let upperCase = (Math.random() < 0.5)
            if (input.charAt(i) === ' ') {
                output += ' '
            } else {
                if (input.charAt(i).toLowerCase() === 'l') {
                    output += 'L'
                } else if (input.charAt(i).toLowerCase() === 'i') {
                    output += 'i'
                } else {
                    if (upperCase) {
                        output += input.charAt(i).toUpperCase()
                    } else {
                        output += input.charAt(i).toLowerCase()
                    }
                }
            }
        }
    } else {
        let upperCase = true;
        for (i = 0; i < input.length; i++) {
            if (input.charAt(i) === ' ') {
                output += ' '
            } else {
                if (input.charAt(i).toLowerCase() === 'l') {
                    output += 'L'
                    upperCase = false
                } else if (input.charAt(i).toLowerCase() === 'i') {
                    output += 'i'
                    upperCase = true
                } else {
                    if (upperCase) {
                        output += input.charAt(i).toUpperCase()
                        upperCase = false
                    } else {
                        output += input.charAt(i).toLowerCase()
                        upperCase = true
                    }
                }
            }
        }
    }
    return output
}

document.addEventListener('click', click => {
    if (click.target == document.getElementById('random')) {
        document.getElementById('outputText').style.color = "#000"
        document.getElementById('outputText').innerHTML = spongebobify(true)
    } else if (click.target == document.getElementById('alternate')) {
        document.getElementById('outputText').style.color = "#000"
        document.getElementById('outputText').innerHTML = spongebobify(false)
    }
})

document.getElementById('title').innerHTML = spongebobify(false, 'Spongebob text generator')
document.getElementById('outputText').style.color = "#757575"