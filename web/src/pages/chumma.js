const fna = (props) => {
    console.log(`Here I am getting prpo\\${props}`)


}



function fnb  (revdcomp,ar) {
    console.log(`In B ${ar}`)
    return function wrappedRender(ar) {
        console.log(`These are the args from fnb${ar}`)
        return revdcomp(fnc(ar));
    }
}

const fnc = (got) => {
    
    console.log(`i got these${got}`)


}

let d = fnb(fna,6)
console.log(`D isss ${d()}`)
