
## IIFE
  * 즉시 실행 함수 표현
  * 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지.
  * 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법.
  
##CommonsJS
  * export, import 키워드를 지원함.
  
##Webpack이 필요한 이유
  * module 타입을 어느 브라우져에서 사용하기 위함이다.
  * 여러개의 파일을 하나로 합치는 번들러이다.
  * webpack 명령어 필수 옵션
    * --mode : development, production, none
    * --entry : 모듈의 시작점
    * --output, -o : 결과 저장 path 설정
  * webpack.config.js 에 옵션을 추가 하여 npm 명령어로 빌드(번들링)한다.
    
