exports.index = (request, response) => {
    numbers = [
        {roman: 'I',arabic: 1},
        {roman: 'V',arabic: 5},
        {roman: 'X',arabic: 10},
        {roman: 'L',arabic: 50},
        {roman: 'C',arabic: 100},
        {roman: 'D',arabic: 500},
        {roman: 'M',arabic: 1000},
    ]

    response.send(numbers)
}

exports.convertRoman = (request, response) => {
    if(!request.body){
        response.status(400).send({
            message: "O campo de numero nao pode ser nulo."
        })
    }
    const romanNumber = request.body.number
    if(isRoman(romanNumber)){
        let arabicNumber = 0;
        
        if (romanNumber.length == 1) {
            arabicNumber = convertRomansToArabic(romanNumber)
        }else{
            for (let i = 0; i < romanNumber.length; i++) {
                if( i < romanNumber.length-1 ){
                    if(convertRomansToArabic(romanNumber[i]) < convertRomansToArabic(romanNumber[i+1])){
                        arabicNumber = arabicNumber - convertRomansToArabic(romanNumber[i])
                    }else{
                        arabicNumber = arabicNumber + convertRomansToArabic(romanNumber[i])
                    }
                }else{
                    arabicNumber = arabicNumber + convertRomansToArabic(romanNumber[i])
                }
            }
        }

        response.send({
            arabic : arabicNumber,
            roman : romanNumber
        })
    }else{
        response.status(400).send({
            message: "Verifique se o numero introduzido e romano"
        })
    }
    
    

}

function convertRomansToArabic(romanNumber) {
    numbers = [
        {roman: 'I',arabic: 1},
        {roman: 'V',arabic: 5},
        {roman: 'X',arabic: 10},
        {roman: 'L',arabic: 50},
        {roman: 'C',arabic: 100},
        {roman: 'D',arabic: 500},
        {roman: 'M',arabic: 1000},
    ]

    for (let i = 0; i < numbers.length; i++) {
        if( numbers[i].roman === romanNumber){
            return numbers[i].arabic
        }
    }
}

function isRoman(romanNumber) {

    if(romanNumber !== null){
        let bool;
        for (let i = 0; i < romanNumber.length; i++) {
            bool = romanNumber[i] = 'I' || 'V'  || 'X' || 'L' || 'C' || 'D' || 'M' ? true : false;
        }
        return bool;
    }
    
}