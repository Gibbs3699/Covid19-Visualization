<template>
<div class="wrapper">
  <div class="bottle">
    <div class="bottle-top"></div>
    <div class="bottle-neck"></div>
    <div class="bottle-circle"></div>
  </div>
  <div class="bottle-liquid">
    <div class="bottle-top"></div>
    <div class="bottle-neck-top"></div>
    <div class="bottle-neck"></div>
    <div class="bottle-circle"></div>
  </div>
  <div class="bottle-shadows">
    <div class="neck-shadow"></div>
    <div class="left-shadow"></div>
    <div class="bottom-shadow"></div>
  </div>
  <div class="bottle-virus" id="virus-1">
    <div class="virus-body virus-purple">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
  <div class="bottle-virus" id="virus-2">
    <div class="virus-body virus-green">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
  <div class="bottle-virus" id="virus-3">
    <div class="virus-body virus-green">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
  <div class="bottle-virus" id="virus-4">
    <div class="virus-body virus-orange">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
  <div class="bottle-virus" id="virus-5">
    <div class="virus-body virus-orange">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
  <div class="bottle-virus" id="virus-6">
    <div class="virus-body virus-pink">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="eyebrow eyebrow-left"></div>
      <div class="eyebrow eyebrow-right"></div>
      <div class="mouth"></div>
    </div>
    <div class="virus-tentacle"></div>
    <div class="virus-tentacle tentacle-2"></div>
    <div class="virus-tentacle tentacle-3"></div>
    <div class="virus-tentacle tentacle-4"></div>
    <div class="virus-tentacle tentacle-5"></div>
    <div class="virus-tentacle tentacle-6"></div>
    <div class="virus-tentacle tentacle-7"></div>
    <div class="virus-tentacle tentacle-8"></div>
    <div class="virus-tentacle tentacle-9"></div>
  </div>
</div>
</template>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.wrapper{
    width: 400px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 40px) rotate(10deg);
}
.wrapper:after{
    content: '';
    display: block;
    width: 90%;
    height: 20px;
    background-color: #b9b9b9;
    transform: translate(10px, 26px) rotate(-10deg);
    border-radius: 50%;
}
.bottle,
.bottle-liquid,
.bottle-shadows{
    width: 400px;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
}
.bottle-top{
    width: 150px;
    height: 20px;
    border: 1px solid rgba(0,0,0,0.18);
    background-color: #e5e5e5;
    border-radius: 40%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}
.bottle-neck{
    width: 130px;
    height: 50%;
    background-color: #e5e5e5;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    
}
.bottle-circle{
    width: 400px;
    height: 345px;
    background-color: #e5e5e5;
    position: absolute;
    bottom: 0;
    border-radius: 50% 50% 10% 10% / 60% 60% 40% 40%;
}
.bottle-liquid{
    position: absolute;
    z-index: 2;
}
.bottle-liquid .bottle-top{
    width: 134px;
    height: 30px;
    background-color: #ffd664;
    top: 136px;
    border: none;
    transform: translateX(-50%) scale(0.97, 0.97) rotate(-32deg);
}
.bottle-liquid .bottle-neck-top{
    width: 0;
    height: 0;
    border-bottom: 80px solid #ffb52b;
    border-left: 130px solid transparent;
    position: absolute;
    top: 118px;
    left: 50%;
    transform: translateX(-50%) scale(0.87, 0.87);
}
.bottle-liquid .bottle-neck{
    background-color: #ffb52b;
    height: 30%;
    top: 170px;
    transform: translateX(-50%) scale(0.87, 0.87);
}
.bottle-liquid .bottle-circle{
    background-color: #ffb52b;
    transform: scale(0.95, 0.95);
    box-shadow: inset -10px -4px 0 rgba(228, 156, 19, 0.73);
}
.bottle-shadows{
    position: absolute;
    z-index: 3;
}
.neck-shadow{
    width: 10px;
    height: 200px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    left: calc(50% - 50px);
}
.left-shadow{
    width: 227px;
    height: 264px;
    background-color: transparent;
    box-shadow: -15px 0 0 0 #fff;
    border-radius: 50% 50% 10% 10% / 60% 60% 40% 40%;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-68%);
}
.bottom-shadow{
    width: 310px;
    height: 30px;
    background-color: #e49c13;
    border-radius: 50%;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.bottle-virus{
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: 5;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    opacity: 0.95;
}
#virus-1{
    top: 50%;
    left: 45%;
    transform: scale(-0.55, 0.55) rotate(15deg);
    animation-name: virusMove1;
    animation-duration: 2.5s;
}
@keyframes virusMove1 {
    0%{
        transform: scale(-0.55, 0.55) rotate(15deg);
    }
    50%{
        transform: scale(-0.6, 0.6) rotate(15deg);
    }
    100%{
        transform: scale(-0.55, 0.55) rotate(15deg);
    }
}
#virus-2{
    top: 68%;
    left: 35%;
    transform: scale(0.22, 0.22) rotate(-15deg);
    animation-name: virusMove2;
    animation-duration: 3.4s;
}
@keyframes virusMove2 {
    0%{
        transform: translate(0,0) scale(0.22, 0.22) rotate(-15deg);
    }
    50%{
        transform: translate(7px, 7px) scale(0.22, 0.22) rotate(-13deg);
    }
    100%{
        transform: translate(0,0) scale(0.22, 0.22) rotate(-15deg);
    }
}
#virus-3{
    top: 45%;
    left: 10%;
    transform: scale(0.42, 0.42) rotate(-10deg);
    animation-name: virusMove3;
    animation-duration: 4s;
}
@keyframes virusMove3 {
    0%{
        transform: translate(0,0) scale(0.42, 0.42) rotate(-10deg);
    }
    50%{
        transform: translate(-2px, -7px) scale(0.42, 0.42) rotate(-10deg);
    }
    100%{
        transform: translate(0,0) scale(0.42, 0.42) rotate(-10deg);
    }
}
#virus-4{
    top: 70%;
    left: 60%;
    transform: scale(-0.3, 0.3) rotate(15deg);
    animation-name: virusMove4;
    animation-duration: 2s;
}
@keyframes virusMove4 {
    0%{
        transform: translate(0,0) scale(-0.3, 0.3) rotate(15deg);
    }
    50%{
        transform: translate(-5px, -5px) scale(-0.3, 0.3) rotate(15deg);
    }
    100%{
        transform: translate(0,0) scale(-0.3, 0.3) rotate(15deg);
    }
}
#virus-5{
    top: 25%;
    left: 26%;
    transform: scale(0.4, 0.4) rotate(35deg);
    animation-name: virusMove5;
    animation-duration: 5s;
}
@keyframes virusMove5 {
    0%{
        transform: translate(0,0) scale(0.4, 0.4) rotate(35deg);
    }
    50%{
        transform: translate(-7px, 7px) scale(0.41, 0.41) rotate(20deg);
    }
    100%{
        transform: translate(0,0) scale(0.4, 0.4) rotate(35deg);
    }
}
#virus-6{
    top: 65%;
    left: 6%;
    transform: scale(0.6, 0.6);
    animation-name: virusMove6;
    animation-duration: 3s;
}
@keyframes virusMove6 {
    0%{
        transform: translate(0,0) scale(0.6, 0.6);
    }
    50%{
        transform: translate(7px, -7px) scale(0.6, 0.6);
    }
    100%{
        transform: translate(0,0) scale(0.6, 0.6);
    }
}
/*  Virus Codes    */

.virus-wrapper{
    width: 200px;
    height: 200px;
    position: absolute;
}
.virus-body{
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset -10px -15px 7px 1px rgba(0,0,0, 0.27);
    z-index: 2;
}
.eye{
    width: 20px;
    height: 25px;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    overflow: hidden;
}
.eye:before{
    content: '';
    display: block;
    width: 10px;
    height: 17px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
}
.eye-left{
    transform: translate(-100%, -100%);
}
.eye-left:before{
    right: 0;
}
.eye-right{
    transform: translate(100%, -100%);
}
.eye-right:before{
    left: 0;
}
.eyebrow{
    width: 25px;
    height: 5px;
    background-color: #333;
    position: absolute;
    top: 33%;
    z-index: 4;
}
.eyebrow-left{
    left: 38%;
    transform: rotate(45deg);
}
.eyebrow-right{
    left: 58%;
    transform: rotate(-45deg);
}
.mouth{
    width: 45px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translateX(-50%) rotate(7deg);
    border-radius: 5px;
}
.mouth:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #a9a9a9;
    position: absolute;
    top: 60%;
}
.virus-tentacle{
    width: 7px;
    height: 92%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.virus-tentacle:before,
.virus-tentacle:after{
    content: '';
    display: block;
    width: 20px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-52%, -50%);
}
.virus-tentacle:after{
    top: 100%;
}
.tentacle-2{
    transform: translate(-50%, -50%) rotate(20deg);
}
.tentacle-3{
    transform: translate(-50%, -50%) rotate(35deg);
}
.tentacle-4{
    transform: translate(-50%, -50%) rotate(60deg);
}
.tentacle-5{
    transform: translate(-50%, -50%) rotate(83deg);
}
.tentacle-6{
    transform: translate(-50%, -50%) rotate(96deg);
}
.tentacle-7{
    transform: translate(-50%, -50%) rotate(115deg);
}
.tentacle-8{
    transform: translate(-50%, -50%) rotate(135deg);
}
.tentacle-9{
    transform: translate(-50%, -50%) rotate(160deg);
}

.virus-green,
.virus-green ~ .virus-tentacle,
.virus-green ~ .virus-tentacle:before,
.virus-green ~ .virus-tentacle:after{
    background-color: #55c468;
}
.virus-purple,
.virus-purple ~ .virus-tentacle,
.virus-purple ~ .virus-tentacle:before,
.virus-purple ~ .virus-tentacle:after{
    background-color: #55378d;
}
.virus-orange,
.virus-orange ~ .virus-tentacle,
.virus-orange ~ .virus-tentacle:before,
.virus-orange ~ .virus-tentacle:after{
    background-color: #f77813;
}
.virus-pink,
.virus-pink ~ .virus-tentacle,
.virus-pink ~ .virus-tentacle:before,
.virus-pink ~ .virus-tentacle:after{
    background-color: #b33889;
}
</style>