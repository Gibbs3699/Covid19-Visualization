<template>
  <div id=container>
    <div class="textmargin">
    COVID-19
    </div>
    <div id=flip class="textmargin">  
      <div><div>GLOBAL</div></div>
      <div><div>COUNTRY</div></div>
      <div><div>Everything!</div></div>
    </div>
    <div class="textmargin">
      MONITORING!
    </div>
  </div>
</template>


<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');

body {
  font-family:'Roboto';
}

#container {
  color:rgba(12, 16, 43, 0.795);
  text-transform: uppercase;
  font-size:60px;
  font-weight:bold;
  padding-top:20px;  
  bottom:40%;
  display:block;
  margin-top: 2rem !important;
  background-color:#fff565ec;
  border-radius: 50px; 
  text-align: left;
  text-shadow: rgb(187, 164, 33) 20px 20px 20px;
  margin:0 auto;
}
.textmargin{
  margin-left: 5%;
}

#flip {
  height:80px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:8px 20px;
  height:80px;
  margin-bottom:10px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background:#0b22f0;
}
#flip div:first-child div {
  background:#d24ef3;
}
#flip div:last-child div {
  background:#DC143C;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}

p {
  position:fixed;
  width:100%;
  bottom:30px;
  font-size:12px;
  color:#999;
  margin-top:200px;
}
</style>