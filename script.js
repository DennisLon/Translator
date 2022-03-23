const output = document.getElementById('output')

let input = "CTTGCTACTACCTTGGCTGGACCTCCC"




function main(){
  console.log(`What do you want to solve for?
mRNA
mRNA short
protine short
`)
  let userInput = prompt("pick method mRNA, mRNA short, protine short>>")
  input = prompt("Type your DNA")

  if (userInput.toLowerCase() == 'mrna'){
    console.log(convertToMRNA(input))
    
  } else if (userInput.toLowerCase() == 'mrna short'){
    console.log(convertToCorrectMRNA(input))
    
  } else if (userInput.toLowerCase() == 'protine short'){
    console.log(concertToProtine(input))
    
  } else {
    console.log("Incorect input please chose between: mRNA, mRNA short, or protine short \n")
    main()
  }
}

main()

function convertToMRNA(uInput) {
  let mrna = '';
  
  uInput = uInput.split('')
  for (let i = 0; uInput.length > i; i++){
    if(uInput[i]=='A'){
      mrna += 'U'
    } else if (uInput[i]=='C'){
      mrna += 'G'
    } else if (uInput[i]=='G'){
      mrna += 'C'
    }else if (uInput[i]=='T'){
      mrna += 'A'
    } else {
      mrna += uInput[i]
    }
  }

  output.innerHTML = mrna
  return mrna
}

function convertToCorrectMRNA(uInput, array=false){
  let mrnaShort = convertToMRNA(uInput)

  mrnaShort = mrnaShort.split(/(?=AUG)/)

  if(mrnaShort.length == 3){
    mrnaShort = mrnaShort[1] + mrnaShort[2]
  } else if(mrnaShort.length == 2){
    mrnaShort = mrnaShort[0] + mrnaShort[1]
  } else {
    console.log('no start detected (AUG)')
    mrnaShort = mrnaShort[0]
  }

  if((mrnaShort.length+1)%3 != 0){
    for (let i = 0; i <= (mrnaShort.length)%3; i++) {
      mrnaShort = mrnaShort.slice(0, -1)
    }
  }

  let tempArr = []
  let counter = 1
  let counterArr = 0
  for (let i = 0; i < mrnaShort.length; i++){
    if (tempArr[counterArr]){
      tempArr[counterArr] += mrnaShort[i]
    } else {
      tempArr[counterArr] = mrnaShort[i]
    }
    
    if (counter == 3){
      counter = 0
      counterArr+=1
    }
    counter+=1
  }

  let mrnaShortArr = []
  for (let i = 0; i < tempArr.length ;i++){
    mrnaShortArr.push(tempArr[i])
    if(tempArr[i] == 'UGG' | tempArr[i] == 'UAG' | tempArr[i] == 'UAA'){
      break;
    }
  }
  
  mrnaShort = ''
  mrnaShortArr.forEach(e => {
    mrnaShort += e
  })

  if (array){
    return mrnaShortArr
  } else{
    output.innerHTML = mrna
    return mrnaShort
  }
  
  
}




/*
let gly = ['GGA', 'GGG', 'GGC', 'GGU']
let lys = ['AAA', 'AAG']
let glu = ['GAA', 'GAG']
let phe = ["UUU", "UUC"]
let leu = ["UUA", "UUG", 'CUU', "CUC", "CUA", "CUA", "CUG"]
let ser = ["UCU", "UCC", "UCA", "USG", "AGU", "AGC"]
let tyr = ['UAU', "UAC"]
let cys = ["UGU", 'UGC']
let trp = ["UGG"]
let pro = ["CCU", "CCC", "CCA", "CCG",]
let his = ["CAU","CAC"]
let gln = ["CAA", "CAG"]
let ile = ["AUU", "AUC", "AUA"]
let val = ["GUG","GUC","GUA","GUU"]
let asp = ["GAU",'GAC']
let arg = ["AGG","AGA", "CGU", "CGC", "CGA", "CGG"]
let asn = ["AAU", "AAC"]
let thr = ['ACA', "ACC", "ACG", "ACU"]
let ala = ["GCU", "GCC", "GCA", "GCG"]
let met = ["AUG"]
let stop = ["UAA", "UAG", "UGA"]*/


function concertToProtine(uInput){
  let mrna = convertToCorrectMRNA(uInput, true)
  
  for(let i = 0; i < mrna.length; i++){

      if ('GGA' == mrna[i]| 'GGG' == mrna[i]| 'GGC' == mrna[i]| 'GGU' == mrna[i]){
        mrna[i] = 'gly'}
      else if ('AAA' == mrna[i]| 'AAG' == mrna[i]){
        mrna[i] = 'lys'
      }
      else if ('GAA' == mrna[i]| 'GAG'  == mrna[i]){
        mrna[i] = 'glu'}
      else if ("UUU" == mrna[i]| "UUC" == mrna[i]){
        mrna[i] = 'phe'
 }
      else if ("UUA" == mrna[i]| "UUG" == mrna[i]| 'CUU' == mrna[i]| "CUC" == mrna[i]| "CUA" == mrna[i]| "CUA" == mrna[i]| "CUG" == mrna[i]){
        mrna[i] = 'leu'}

      else if ("UCU" == mrna[i]| "UCC" == mrna[i]| "UCA" == mrna[i]| "USG" == mrna[i]| "AGU" == mrna[i]| "AGC" == mrna[i]){
        mrna[i] = 'ser'}

      else if ('UAU' == mrna[i]| "UAC" == mrna[i]){
        mrna[i] = 'tyr'}

      else if ("UGU" == mrna[i]| 'UGC' == mrna[i]){
        mrna[i] = 'cys'}

      else if ("UGG" == mrna[i]){
        mrna[i] = 'trp'}

      else if ("CCU" == mrna[i]| "CCC" == mrna[i]| "CCA" == mrna[i]| "CCG" == mrna[i]){
        mrna[i] = 'pro'}

      else if ("CAU" == mrna[i]| "CAC" == mrna[i]){
        mrna[i] = 'his'}

      else if ("CAA" == mrna[i]| "CAG" == mrna[i]){
        mrna[i] = 'gln'}

      else if ("AUU" == mrna[i]| "AUC" == mrna[i]| "AUA" == mrna[i]){
        mrna[i] = 'ile'}

      else if ("GUG" == mrna[i]| "GUC" == mrna[i]| "GUA" == mrna[i]| "GUU" == mrna[i]){
        mrna[i] = 'val'}

      else if ("GAU" == mrna[i]| 'GAC' == mrna[i]){
        mrna[i] = 'asp'}

      else if ("AGG" == mrna[i]| "AGA" == mrna[i]| "CGU" == mrna[i]| "CGC" == mrna[i]| "CGA" == mrna[i]| "CGG" == mrna[i]){
        mrna[i] = 'arg'}

      else if ("AAU" == mrna[i]| "AAC" == mrna[i]){
        mrna[i] = 'asn'}

      else if ('ACA' == mrna[i]| "ACC" == mrna[i]| "ACG" == mrna[i]| "ACU" == mrna[i]){
        mrna[i] = 'thr'}

      else if ("GCU" == mrna[i]| "GCC" == mrna[i]| "GCA" == mrna[i]| "GCG" == mrna[i]){
        mrna[i] = 'ala'}

      else if ("AUG" == mrna[i]){
        mrna[i] = 'met'}

        else if ("UAA" == mrna[i]| "UAG" == mrna[i]| "UGA" == mrna[i]){
        mrna[i] = 'stop'}

    
  }

  mrna = mrna.join('-')

  output.innerHTML = mrna
  
  return mrna
}