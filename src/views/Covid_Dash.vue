<template>
  <div>
    <Preloader :isShow="showFlag" />
    <div class="jumbotron">
      <Snowf
        :amount="50"
        :size="5"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="true"
        color="#fff"
      />
      <div>
        <div class="row">
          <div class="col-md-5 col-sm-12 backgroundcolor">
            <Lights/>
            <Header/>
            <!----------Card-------------->
            <div>
              <b-card
                border-variant="primary"
                header="Global Total Comfirmed Cases!"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
                class="fontsizetext margintop"
              >
                <b-card-text class="fontsizenumber">{{
                  getTotalCase}}
                </b-card-text>
              </b-card>
            </div>
            <br />
            <div>
              <b-card
                border-variant="danger"
                header="Global total Death Cases!"
                header-bg-variant="danger"
                header-text-variant="white"
                align="center"
                class="fontsizetext"
              >
                <b-card-text class="fontsizenumber">{{ getDeath }}</b-card-text>
              </b-card>
            </div><br>
            <b-link a href="/" class="TopMsg"
              ><p>Click here to Refresh...</p></b-link
            ><br>
          </div>
          <div class="col-md-7 col-sm-12">
            <!----------Select-------------->
            <DigitalClock align="Center"></DigitalClock><br />
            <div class="chartbg row-margin h-70">
              <div>
                <b-form-select
                  v-model="selected"
                  :options="contries_options"
                  @change="onContriesSeleted"
                >
                  <b-form-select-option :value="null" disabled
                    >-- Please Select Country --</b-form-select-option
                  >
                </b-form-select>
              </div>
              <b-card>
                <b-alert show class="fontsizenumber BgColor"
                  ><h1 class="alert-link">
                    COUNTRY : {{ ThisCountry }}
                    <country-flag
                      :country="getCountryCode(CountryCode)"
                      size="big"
                    />
                  </h1>
                </b-alert>
                <div>
                  <b-table
                    v-if="Showdata"
                    :items="items"
                    :fields="fields"
                    class="fontsizetable"
                  ></b-table>
                </div>
              </b-card>
            </div>
            <h1 class="creditfont">@TheGIFTSs</h1>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<!------------------------------------------->
<script>
import axios from "axios";
import Snowf from "vue-snowf";
import CountryFlag from "vue-country-flag";
import DigitalClock from "../components/DigitalClock";
import Preloader from "../components/Preloader";
import Lights from "../components/Lights";
import Header from "../components/Header"


var commaNumber = require("comma-number");
export default {
  name: "Covid_Dash",
  components: {
    DigitalClock,
    Snowf,
    CountryFlag,
    Preloader,
    Lights,
    Header,
  },
  data() {
    return {
      showFlag: false,
      TotalConfirmed: null,
      selected: null,
      CountryCode: null,
      ThisCountry: null,
      TotalDeaths: null,
      TotalRecovered: null,
      NewConfirmed: null,
      NewDeaths: null,
      NewRecovered: null,
      LastUpdate: null,
      Showdata: false,
      isloaded: false,
      SelectCountries: [],
      getTotalCase: "",
      getDeath: "",
      TotalConfirmedList: [],
      positivelist: [],
      contries_options: [],
      options: {
        selected: null,
      },
      fields: ["CONTENT", "CASES"],
      items: [
        // { isActive: true, CASES: 0 , CONTENT: 'Total Confirmed'},
        // { isActive: true, CASES: 0, CONTENT: 'Total Deaths'},
      ],
    };
  },
  async mounted() {
    this.showFlag = true;
    await this.uChart();
    this.showFlag = false;
  },
  methods: {
    onContriesSeleted() {
      this.Showdata = true;
      this.TotalConfirmed = commaNumber(this.selected.TotalConfirmed);
      this.CountryCode = this.selected.CountryCode;
      this.ThisCountry = this.selected.Country;
      this.TotalDeaths = commaNumber(this.selected.TotalDeaths);
      this.TotalRecovered = commaNumber(this.selected.TotalRecovered);
      this.NewConfirmed = commaNumber(this.selected.NewConfirmed);
      this.NewDeaths = commaNumber(this.selected.NewDeaths);
      this.NewRecovered = commaNumber(this.selected.NewRecovered);
      this.LastUpdate = this.selected.Date;
      // this.items[0].CASES = this.TotalConfirmed
      // this.items[1].CASES = this.selected.TotalDeaths
      this.items = [];
      this.items.push({
        isActive: true,
        CASES: this.TotalConfirmed,
        CONTENT: "Total Confirmed",
      });
      this.items.push({
        isActive: true,
        CASES: this.TotalDeaths,
        CONTENT: "Total Deaths",
      });
      this.items.push({
        isActive: true,
        CASES: this.TotalRecovered,
        CONTENT: "Total Recovered",
      });
      this.items.push({
        isActive: true,
        CASES: this.NewConfirmed,
        CONTENT: "New Confirmed",
      });
      this.items.push({
        isActive: true,
        CASES: this.NewDeaths,
        CONTENT: "New Deaths",
      });
      this.items.push({
        isActive: true,
        CASES: this.NewRecovered,
        CONTENT: "New Recovered",
      });
      this.items.push({
        isActive: true,
        CASES: this.LastUpdate,
        CONTENT: "Last Updated",
      });
    },
    async uChart() {
      let response = await axios.get("https://api.covid19api.com/summary");
      this.getTotalCase = commaNumber(response.data.Global.TotalConfirmed);
      this.getDeath = commaNumber(response.data.Global.TotalDeaths);
      this.contries_options = response.data.Countries.map((x) => {
        return { text: x.Country, value: x };
      });
      console.log("contries :", this.contries_options);
    },
    getCountryCode: function(CountryCode) {
      return CountryCode;
    },
  },
};
</script>

<!------------------------------------------->
<style lang="css" scoped>
.backgroundcolor {
  background-color: rgba(34, 34, 66, 0.925) !important;
  height: auto ;
  border-radius: 20px;
  /* margin-top: -1rem;
  max-width: 100%; */
  background-size: 100% 100%;
}
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chartbg {
  background-color: white !important;
  border-radius: 10px;
}
.TopMsg {
  color: rgb(248, 247, 248) !important;
  font-weight: bold;
}
.jumbotron {
  background-image: url("../assets/Christmas_Dark.png");
  height: 1050px !important;
  margin-bottom: 0 !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.textcolor {
  color: aliceblue !important;
}
.BgColor {
  background-color: rgba(167, 227, 238, 0.952);
}
.wiiii {
  width: 100% !important;
}
.row-margin {
  margin-top: -1rem;
}
.top-margin {
  margin-top: -2rem;
}
.tittle-font {
  font-size: 50px;
}
.right-margin {
  margin-right: 3rem;
}
.fontsizenumber {
  font-size: 5rem;
  font-weight: bold;
  color: rgba(58, 51, 51, 0.849)  !important;
}
.fontsizetext { 
  font-size: 1.5rem;
  font-weight: bold;
  margin:0 auto;
}
.fontsizeheader {
  font-size: 4rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.815)  !important;
  font-weight: 500;
  font-family: "Arial Rounded MT Bold";
  margin-top: 70px;
}
.fontsizetable {
  font-size: 1.5em;
  font-weight: bold;
}
.margintop{
  margin-top: 5%;
}
.creditfont{
  font-size: 20px;
  color: rgb(54, 56, 58) !important;
  bottom: 5px;
  right: 16px;
  position: absolute;
}

</style>
