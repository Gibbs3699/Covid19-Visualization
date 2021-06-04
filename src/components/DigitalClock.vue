<template>
  <div id="Covid_Dash">
    <div id="content" @click="clicked">
      <div>
          <p v-bind:style="instructionsStyle">{{ instruction }}</p>
          <h1 v-if="one" v-bind:class="faded">{{ timeOne }}</h1>
          <h1 v-if="two" v-bind:class="faded">{{ timeTwo }}</h1>
          <h1 v-if="three" v-bind:class="faded">{{ timeThree }}</h1>
          <h1 v-if="four" v-bind:class="faded">{{ timeFour }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      contentStyle: {
        backgroundColor: "#5D6D7E".replace(/5/g, function() {
          return (~~(Math.random() * 16)).toString(16);
        }),
      },
      timeOne: moment().format("LTS"),
      timeTwo: moment().format("l"),
      timeThree: moment().format("MMMM Do YY"),
      timeFour: moment().format("LT"),
      one: true,
      two: false,
      three: false,
      four: false,
      faded: "",
      instruction: "",
      instructionsStyle: {
        opacity: 1,
        transition: ".2s",
      },
    };
  },
  methods: {
    clicked: function() {
      this.contentStyle.backgroundColor = "#5D6D7E".replace(/5/g, function() {
        return (~~(Math.random() * 16)).toString(16);
      });
      this.instructionsStyle.opacity = 0;
      if (this.one == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.one = false;
          this.two = true;
        }, 200);
      } else if (this.two == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.two = false;
          this.three = true;
        }, 200);
      } else if (this.three == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.three = false;
          this.four = true;
        }, 200);
      } else if (this.four == true) {
        this.faded = "faded";
        setTimeout(() => {
          this.faded = "";
          this.four = false;
          this.one = true;
        }, 200);
      }
    },
  },
  mounted: function() {
    setInterval(() => {
      this.timeOne = moment().format("LTS");
    }, 1000);
  },
};
</script>

<style lang="css" scoped>
.backgroundcolor {
  background-color: white !important;
  height: 300px;
  border-radius: 10px;
  margin-top: -1rem;
}
#content {
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: right;
}
.wrapper {
  /* margin-left: 25rem;
  margin-top: -2rem */
}
h1 {
  transition: 0.2s;
  font-size: 3em;
}
p {
  transition: 0.2s;
}
.faded {
  opacity: 0;
  transition: 0.2s;
}
.top-margin {
  margin-top: 3rem;
}
</style>
