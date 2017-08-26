/*
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
    A를 3만큼 밀면 D가 되고 z를 1만큼 밀면 a가 됩니다. 공백은 수정하지 않습니다.
    보낼 문자열 s와 얼마나 밀지 알려주는 n을 입력받아 암호문을 만드는 ceasar 함수를 완성해 보세요.
    * “a B z”,4를 입력받았다면 “e F d”를 리턴합니다.

    function caesar(s, n) {
        var result = “”;
        // 함수를 완성하세요.

        return result;
    }

    // 실행을 위한 테스트코드입니다.
    console.log(‘s는 “a B z”, n은 4인 경우: ’ + caesar(“a B z”, 4));
 */

const caesar = (s, n) => {

    let result = '';
    let valStr = '';
    let abs = Math.abs(n);

    for (; abs / 25 >= 1;) abs %= 25;

    let m = (n < 0) ? -abs : abs;

    for (let val of s.split(" ")) {

        let aCode = (val.charCodeAt() > 'Z'.charCodeAt()) ? 'a'.charCodeAt() : 'A'.charCodeAt();
        let zCode = (val.charCodeAt() > 'Z'.charCodeAt()) ? 'z'.charCodeAt() : 'Z'.charCodeAt();
        let nValCode = val.charCodeAt() + m;

        if (nValCode > zCode || nValCode < aCode) {
            let num = (n >= 0) ? nValCode - zCode : aCode - (nValCode);
            valStr = (n >= 0) ? valStr = String.fromCharCode(aCode + num - 1) : String.fromCharCode(zCode - num + 1);

        } else
            valStr = String.fromCharCode(nValCode);

        result += valStr + ' ';
    }

    return result;
}

//Test
console.log('결과: ' + caesar("x B C", -201));