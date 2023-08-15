module.exports = function check( str, bracketsConfig ) {
    let newStr = str;
    let stateStr = newStr;
    let bracketsJoinedArr = [];

    if ( str.length % 2 !== 0 ) {
        return false
    }

    bracketsConfig.map( arr => {
        bracketsJoinedArr.push( arr.join( '' ) )
    } )

    if ( bracketsJoinedArr.join( '' ) === str ) {
        return true
    } else if ( newStr === ')(' || newStr === '}{' || newStr === '][' ) {
        return false
    }

    const replaceChars = ( str, symbol ) => {
        let newStr = str;
        if ( newStr.includes( symbol ) ) {
            newStr = str.replace( symbol, '' );
        } else {
            return newStr
        }
        if ( newStr !== '' ||  newStr !== undefined) {
            return replaceChars( newStr, symbol )
        }
    }

    const getRes = ( str, bracketsJoinedArr ) => {

        let newStr = str;
        for ( let i = 0; i <= bracketsJoinedArr.length - 1; i++ ) {
            newStr = replaceChars( newStr, bracketsJoinedArr[i] )
        }

        if ( newStr.length !== 0 && stateStr !== newStr) {

            stateStr = newStr;
            return getRes(newStr, bracketsJoinedArr);
        }
        return newStr;

    }

    return getRes( str, bracketsJoinedArr ).length === 0;
}



// console.log( 'funky', funky('((()))()', [['(', ')']]) )
// console.log( 'funky', funky( '5555512575557777777555566667888888667661133833448441111222233333444442266666', [ [ '1', '2' ], [ '3', '4' ], [ '5', '6' ], [ '7', '7' ], [ '8', '8' ] ] ) )

