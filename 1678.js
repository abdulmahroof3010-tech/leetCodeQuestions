function interpret(command){
    let left=0;
    let result=""

    while(left< command.length){
        if(command[left]==="G"){
             result+="G"
             left++
        }else if(command[left]==="("){
            if(command[left+1]===")"){
                result+="o";
                left+=2
            }else {
                result+="al";
                left+=4
            }
            
        }


    }
    return result

}

console.log(interpret( "G()(al)"))
console.log(interpret( "G()()()()(al)"))
console.log(interpret( "(al)G(al)()()G"))
