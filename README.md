# show-chart
12.19 api 화면 출력 시도중<br>
객체 안으로 키값으로 접근을 못하고있음...
계속 시도중 - 출력완료!<br>
12.21 파일 합치기 성공!그래프에 넣기 성공!!!좀 더 가다듬자<br>
들어올 데이터에 대해서 제대로 살펴보지 않았다. 일단 구분 카테고리는 늘어나지 않으니 수동으로 입력하고 마우스를 위에 올렸을 때 나타나도록 해야겠다. 연도별 수익률이랑 수익금 역산해서 투자원금 계산해보자 일단 2017년 데이터만 상세하게 그래프에 뿌려보자.
12.22 일단 동작하게 만들고 이후 리팩토링을 하자 for 문 돌릴 곳이 보인다.
숫자로 변환완료했지만 계속 써줘야하는 거 같아서 함수를 손보자
변환완료했다. 금액이 퍼센트로 치환해줘야겠다. 일단 총 금액을 출력 후 각자 금액에 대해서 퍼센트로 치환하는 함수 만들어야겠다.<br>
12.23 구분키로 접근하는 데이터에 대해서 순서대로 출력해주는 함수 만들고 있음 즉 배열 반환 함수 구분은 완료했는데 Data에 넣을 수 있는 타입이 아님 안에서 배열 함수를 순서대로 반환해야 할 것 같음<br>
12.24 일단 도는 거랑 심플하게 만드는 거랑 같이 만드는중 함수만드는중..parameter값의 개수에 맞지않게 argument를 넘겨버버리면 형변환이 제대로 되지않는 걸 알게되었다<br>
12.25 함수 안에서 배열이 리턴이 안되는 건가? 형변환을 해줬지만 문자열로 더하는 문제 발생 숫자로 해결 완료!!<br>
12.26 함수 만드는 것에 대해서 아이디어가 안떠오른다.. 일단 도는 거에 대해서 데이터 다 넣었는데 복지 부문의 수익금이 -2로 표시되기 때문에 다른 데이터들에 비해 너무 작아서 차트에서 보이지 않는다. 다시 확인 결과 복지부문인 [2]데이터를 포함해,[6],[8],[9] 가 안나오는 문제 발생<br>
12.27 map의 존재를 알게 되었다. 좀 더 쉽게 데이터에 접근 가능하게 되었다.<br>
12.29 함수 기능에 대해서 고민중<br>
12.30 -(마이너스 데이터)에 대해서 막대 그래프에 뿌려줬다.css 관련 작업중<br>
12.31 reduce사용중 전체값 데이터 받아오기 이후 함수로 관리하기<br>
01.01 css계속만지는중<br>
01.02 css작업 중<br>
01.03 css 숫자 바꿨다가 넣었다가 하는중<br>
