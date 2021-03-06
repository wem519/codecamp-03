//1. 문자열을 정수로 바꾸기(멘토님 풀이 방식)

function solution(s) {
  console.log(typeof Number(s));
  return Number(s);
}

//jsp는 명시적인 타입 정의가 없기 때문에 문자열에 숫자, 숫자열에 문자를 넣음으로써 자동으로 형변환이 출력된다.

//Number(), Sting()
//parseInt(): 문자 -->숫자
//parseFloat(): 숫자 --> 문자

//나머지 답변에 대해서는 한번 더 고민해볼 것

//2. 같은 숫자는 싫어

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//3. 핸드폰 번호 가리기

function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer = answer + "*";
    } else {
      answer = answer + phone_number[i];
    }
  }
  return answer;
}

//다른 사람들 답변 중 효율적인 것 참고할 것

//4. 짝수와 홀수
function solution(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//삼항 연산자로 다음과 같이 표현도 가능하다.
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

//다른 사람들의 간단한 함수를 보면 이해 안가는 부분이 너무 많다.
//검색할 수 있는 것은 최대한 검색해보자.

//5.평균 구하기

//평균 구하기=모든 정수의 합 /정수의 갯수

function solution(arr) {
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i]; //a+=b => a=a+b
  }
  return answer / arr.length;
}

//6. 가운데 글자 가져오기

function solution(s) {
  const half = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[half - 1] + s[half];
  } else {
    return s[half];
  }
}

//삼항연산자

function solution(s) {
  const half = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[half - 1] + s[half] : s[half];
}
// length의 길이는 1,2,3,4로 세지만 인덱스 값은 [0],[1],[2],[3] 이렇게 구별하기 때문에
// 만약 4자리 글자라면 half=2이고 짝수일때는 2번째, 3번째 데이터를 가져와야 하므로 이런 조건식이 맞는 것
//

// 7. 서울에서 김서방 찾기

// function solution(seoul){
//     var answer = "";
//     for (let i=0; i<seoul.length; i++){
//         if(seoul[i] == "Kim") answer += "김서방은 " + i + "에 있다";
//     }
//     return answer;

function solution(seoul) {
  let x = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      x = i;

      break; //반복문을 종료
    }
  }
  return "김서방은 " + x + "에 있다";
}

//8. 문자열 다루기 기본
function solution(s) {
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    const tmp = s.split("");
    for (let i = 0; i < tmp.length; i++) {
      if (isNaN(tmp[i])) {
        return false;
      }
    }
  }
  return true;
}

//isNan()함수는 어떤 같이 NaN(Not-A-Number)인지 판별함
//참고 답안

//9. 약수의 합

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i;
    }
  }
  return answer;
}

//10. 자릿수 더하기

function solution(n) {
  var answer = 0;
  var m = String(n);

  for (var i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }
  return answer;
}

//다른풀이
function solution(n) {
  let result = 0;

  const array = String(n)
    .split("")
    .forEach((num) => {
      result = result + Number(num);
    });

  return result;
}
//split() 문자열을 배열로 저장

//11. x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

//다른풀이
function solution(x, n) {
  const array = new Array(n).fill(x).map((number, index) => {
    return number * (index + 1);
  });

  return array;
}

//12. 문자열 내림차순으로 배치하기
function solution(s) {
  return s.split("").sort().reverse().join("");
}

//문자열을 split메소드를 사용하여 배열로 쪼갠다.
// 예: ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
// sort메소드로 순차적으로 나열해준다.
// 예: ["Z", "b", "c", "d", "e", "f", "g"]
// reverse메소드로 반전시켜준다.
// 예: ["g", "f", "e", "d", "c", "b", "Z"]
// join메소드로 문자열로 바꿔줘서 반환한다.
// 예: "gfedcbZ"

//13. k번째 수
function solution(array, commands) {
  var answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    const sliceResult = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(sliceResult[k - 1]);
  }
  return answer;
}
