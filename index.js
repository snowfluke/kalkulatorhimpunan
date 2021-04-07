const $ = (el) => document.querySelector(el)
const _ = (el) => document.querySelectorAll(el)

function toggleShow(main, result){
    _('.main').forEach( el => el.style.display = main)
    _('.result').forEach( el => el.style.display = result)
    return
}

function validate(){
    let U = $('.u').value.split(',').filter( el => el != "")
    let A = $('.a').value.split(',').filter( el => el != "")
    let B = $('.b').value.split(',').filter( el => el != "")
    
    if(!U && !A && !B) return alert("Mohon masukkan himpunan dengan benar!")
    
    toggleShow("none", "flex")

    calc(U,A,B)

    return
}

function back(){
    $('.u').value = ''
    $('.a').value = ''
    $('.b').value = ''

    toggleShow("flex", "none")

    reset()

    return
}

function calc(U,A,B){

    $('.himpunan-semesta').innerHTML = `{ ${U} }`
    $('.himpunan-a').innerHTML = `{ ${A} }`
    $('.himpunan-b').innerHTML = `{ ${B} }`

    const intersect = A.filter( anggota => B.includes(anggota))
    $('.intersect').innerHTML = `{ ${intersect} }`

    const union = [...new Set([...A, ...B])]
    $('.union').innerHTML = `{ ${union} }`

    const inversA = [...U, ...B].filter( anggota => !A.includes(anggota))
    $('.inversA').innerHTML = `{ ${inversA} }`

    const inversB = [...U, ...A].filter( anggota => !B.includes(anggota))
    $('.inversB').innerHTML = `{ ${inversB} }`

    const diffAB = A.filter( anggota => !B.includes(anggota))
    $('.diffAB').innerHTML = `{ ${diffAB} }`

    const diffBA = B.filter( anggota => !A.includes(anggota))
    $('.diffBA').innerHTML = `{ ${diffBA} }`

    const symDiff = [...new Set([...A, ...B])].filter( anggota => !intersect.includes(anggota))
    $('.symDiff').innerHTML = `{ ${symDiff} }`

    const cartProdAB = [].concat(...A.map( (el,id) => B.map( ef => el*ef === NaN? el+ef: el*ef)))
    $('.cartProdAB').innerHTML = `{ ${cartProdAB} }`

    const cartProdBA = [].concat(...B.map( (el,id) => A.map( ef => el*ef === NaN? el+ef: el*ef)))
    $('.cartProdBA').innerHTML = `{ ${cartProdBA} }`

    return
}

function reset(){
    _('.himpunan').forEach( el => el.innerHTML = '')
    return
}
