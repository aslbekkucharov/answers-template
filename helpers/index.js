export function move_words_to_newline(string, separator) {
    const strings_array = string.split(`${separator}`)

    const strings_on_newline = strings_array.map((string, index) => {
        if (strings_array.length - 1 === index) {
            return `${string}`
        }

        return `${string}\n`

    }).join('')

    return strings_on_newline
}