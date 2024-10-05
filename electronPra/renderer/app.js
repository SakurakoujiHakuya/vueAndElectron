console.log(window.process)
console.log(2333)
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const input = document.getElementById('input')
btn1.onclick = () => {
    // alert(input.value)
    // alert('btn1')
    process.saveFile(input.value)
}
btn2.onclick = async () => {
    let x = await process.readFile()
    alert(x)
}