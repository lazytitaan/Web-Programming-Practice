// 단순 팝업
alert('Hello, Javascript!!');

// 확인을 누르면 true, 취소를 누르면 false
let sel = confirm('Really?');

// 입력한 이름을 변수에 저장
let input = prompt('이름을 입력하세요.');

/* document 객체의 write 메소드로
   태그와 문자열을 문서에 출력한다. */
document.write('<h2>JS의 입력과 출력</h2>');
document.write('확인 선택 : ' + sel + '<br>');
document.write('당신의 이름은 ' + input + '입니다.<br>');
