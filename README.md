<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Nestjs 동작 흐름

클라이언트에서 요청을 보내면 컨트롤러로 가며 컨트롤러에서 알맞은 요청 경로에 라우팅해서 해당 핸들러로 이동한다.
그 이후 요청을 처리해주기 위해 서비스로 들어가며, 그 요청에 맞는 로직을 서비스에서 처리해준 후 컨트롤러에 리턴값을 보낸다.
컨트롤러에서 클라이언트로 결과값을 보내준다.

- 컨트롤러에서는 요청을 처리하고 결과값을 리턴해주는 역할을 한다.

## NestJS @Body body

이렇게 하면 모든 request 에서 보내온 값을 가져올 수 있음
하나씩 가져오려면 @Body('title')title or @Body('description') description 이런식으로 가져오면 됨

## DTO

계층간 데이터 교환을 위한 객체(Data Transfer Object)
DB에서 데이터를 얻어 Service나 Controller등으로 보낼 때 사용하는 객체를 말함
데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
interface 나 class를 이용해서 정의 될 수 있지만 nestjs에서는 클래스를 이용하는걸 추천하고 있다!

왜 쓰나?
데이터 유효성을 체크하는데 효율적
더 안정적인 코드를 만들어줌. 타입스크립트의 타입으로도 사용됨

프로퍼티가 많아지고 여러군데에서 이용하면 한곳에서 프로퍼티 이름을 바꿔줘야 하면 어떻게 될까..?
그러면 다른곳에 똑같이 쓰인 모든 곳의 프로퍼티도 똑같이 바꿔줘야함
유지보수가 힘들어짐
그래서 DTO를 쓴다

클래스는 인터페이스와 다르게 런타임에서 작동해서 파이프 같은 기능을 이요할 때 더 유용하다 그래서 클래스 쓸거임

## Pipe

파이프는 @injectable () 데코레이터로 주석이 달린 클래스이다.
파이프는 data transformation, data validation을 위해서 사용 된다.
파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동한다.
Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동한다.

## Data Transformation

입력 데이터를 원하는 형식으로 변환(문자열 > 정수)
만약 숫자를 받기 원하는데 문자열 형식으로 오면 파이프에서 자동으로 숫자로 바꿔줌

## Data validation

입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달하면 되지만, 그렇지 않으면 데이터가 올바르지 않을 때 예외를 발생시킴

만약 이름의 길이가 10자 이하여야 하는데 10자 이상 되면 에러를 발생시킴

## 파이프는 두가지 모든 경우에서..

라우트 핸들러가 처리하는 인수에 대해서 작동함
파이프는 메소드를 바로 직전에 작동해서 메소드로 향하는 인수에 대해서 변환할 것이 있으면 변환하고 유효성 체크를 위해서도 호출됨

## PIPE 사용법

파이프를 사용하는 방법(Binding Pipes)은 세가지로 나눠진다
Handler-level Pipes
Parameter-level Pipes

## Handler-level Pipes

@UsePipes() 데코레이터를 이용해서 사용한다.
이 파이프는 모든 파라미터에 적용이 된다.

## Parameter-level Pipes

파라미터 레벨의 파이프이기에 특정한 파라미터에게만 적용이 되는 파이프이다.

## Global Pipes

글로벌 파이프로서 애플리케이션 레벨의 파이프다.
클라이언트에서 들어오는 모든 요청에 적용이 된다
가장 상단 영역인 main.ts에 넣어서 사용하면 된다~

## Built-in Pipes

NestJs에 기본적으로 사용할 수 있게 만들어 놓은 6가지의 파이프가 있다
Validation, ParseInt, ParseBool, ParseArray, ParseUUID, DefaultValue

예를 들어 ParseInt 파이프는 넘버로 받아야되는데 문자열로 받으면 에러가 발생한다.
