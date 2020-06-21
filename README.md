#Webpack

## IIFE
  * 즉시 실행 함수 표현
  * 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지.
  * 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법.
  
##CommonsJS
  * export, import 키워드를 지원함.
  
##Webpack이 필요한 이유
  * module 타입을 어느 브라우져에서든 사용하기 위함이다.
  * 여러개의 파일을 하나로 합치는 번들러이다.
  * webpack 명령어 필수 옵션
    * --mode : development, production, none
    * --entry : 모듈의 시작점
    * --output, -o : 결과 저장 path 설정
  * webpack.config.js 에 옵션을 추가 하여 npm 명령어로 빌드(번들링)한다.
  
##로더
  * webpack에서의 loader는 모든 파일(스타일시트, 이미지, 폰트 등)을 모듈로 바라본다.
  * import 구문을 사용하면 자바스크립트 코드 안으로 가져올 수 있다.
  * my-webpack-loader.js 파일 추가
  * webpack.config에 module.rules 배열 추가
    * test : //처리해야할 파일의 패턴(정규식)
    * use: : 처리할 파일 지정.
  * loader에서 console 변환 실습
    
##커스텀 로더
  * css-loader : css 파일을 모듈로 인식해서 자바스크립트 코드안에서 사용할 수 있다.
  * npm install css-loader
  * style-loader도 필요하다.?? -> 이유는 css가 자바스크립트 코드안에 문자열로 들어가 있어서.. cssom형태로 변경해야한다.
  * loader는 여러개로도 사용가능하다 순서는 배열의 뒤부터 앞으로..

  * file-loader : 이미지 파일 읽을 때 필요.
  * 경로설정 필요. (./dist/)
  
  * url-loader : 이미지를 base64 스트링으로 변환하여 네트워크를 덜 타게..
  * 적은용량의 이미지는 url-loader를 사용하도록 한다.
  
##플러그인
  * 번들된 결과물을 처리한다. -> 난독화, 특정 텍스트 추출하는 용도
  
##자주사용하는 플러그인
  * BannerPlugin : webpack에서 제공해주며, 결과물 상단에 메세지를 넣을 수 있다.
  * DefinePlugin : 개발과 운영환경을 나누어 관리 (process.env.NODE_ENV) webpack 의 mode를 따라감. -> code를 넣을 수 있음 문자열로 넣으려면 JSON.stringify
  * HTMLTemplatePlugin : html 파일 처리 
  * CleanWebapckPlugin : 빌드 할 때 output 폴더를 삭제해준다.
  * MiniCssExtractPlugin: CSS별로 파일을 뽑아낸다. -> style-loader 대신 제공하는 로더를 사용한다.