document.write("<table border='1' align='center'>")

for (let x = 2; x <= 20; x++) {
    document.write("<tr>")
    if (x % 2 == 0) {
        for (let y = 1; y <= 10; y++) {
        document.write("<td>")
        document.write(y + ' * ' + x + ' = ' + (x * y))
        document.write("</td>")
        }
    }
}

document.write("</tr>")
document.write("</table>")
