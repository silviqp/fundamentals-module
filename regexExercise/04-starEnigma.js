function starEnigma(arr) {
    let mesegesCount = Number(arr.shift())
    let decripted = []

    let starPattern = /[star]/gi

    for (let i = 0; i < mesegesCount; i++) {
        let msg = arr[i]
        let decriptedMsg = ''

        let matches = msg.match(starPattern)

        if (matches) {
            let count = matches.length
            for (let char of msg) {
                let code = char.charCodeAt()

                code -= count
                let newChar = String.fromCharCode(code)
                decriptedMsg += newChar

            }

        } else {
            decriptedMsg = msg
        }
        decripted.push(decriptedMsg)
    }

let planetPattern = /@(?<name>[A-Z][a-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/

let attacked =[]
let destroied = []

for (let msg of decripted){
    let match = msg.match(planetPattern)
    if (match){
        let {name, type}= match.groups
        
        if (type === 'A'){
            attacked.push(name)
        }else {
            destroied.push(name)
        }
    }
}
attacked.sort((a,b)=>a.localeCompare(b))
destroied.sort((a,b)=>a.localeCompare(b))

console.log(`Attacked planets: ${attacked.length}`);
attacked.forEach(planet=>console.log(`-> ${planet}`))

console.log(`Destroyed planets: ${destroied.length}`);
destroied.forEach(planet=>console.log(`-> ${planet}`))
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C95555SR'])