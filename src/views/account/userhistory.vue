<template>
<div>
    <h2> History of Login </h2>
    <form @submit.prevent="dateHistory">
        <input type="date" v-model="date">
    </form>

    <div v-for="history in login_history" :key="history.date+history.time" class="container-userhistory" >
        <div class="card-history">
            <div class="form-card">
                <p><b>Date :</b> {{ history.date }}</p>
            </div>
            <div class="form-card">
                <p><b>Time :</b> {{ history.time }} </p>
            </div>
        </div>  
    </div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    name:"userhistory",
    data() {
        return {
            date : "",
            data1 : "1",
            timeStampData:[],
        };
    },
    methods:{
        dateHistory(){
            console.log(this.date);
        },
        getLoginDetails() {
            let httpAddress1 = 'hhttp://10.177.1.69:8089/registration/loginHistory/'+this.date.toString()+'/'+this.$store.state.Id
            console.log(httpAddress1);
              axios.get(httpAddress1)
            .then((response)=>{
                this.timeStampData = [];
                for(let i=0;i<response.data.length;i++){
                    let timeDate = response.data[i].split(" ");
                    let data1 = {};
                    data1["date"] = timeDate[0]+" "+timeDate[1]+" "+timeDate[2];
                    data1["time"] = timeDate[3];
                    this.timeStampData.push(data1);               
                }
            })
            this.data1 = this.date;
            return this.timeStampData;
          }
    },
    watch:{

    },
    computed:{
        login_history(){
            if(this.date == ''){
                let times = this.$store.state.userDetails.timestamps;
                times = times.split(",");
                let timeStampData = [];
                for(let i=0;i<times.length;i++){
                    let timeDate = times[i].split(" ");
                    let data = {};
                    data["date"] = timeDate[0];
                    data["time"] = timeDate[1].substring(0,8);
                timeStampData.push(data);
                }
                return timeStampData;
            }
        else if(this.data1 != this.date){
            let timeStamp = this.getLoginDetails();
            console.log(timeStamp);
            return timeStamp;
            }
            return this.timeStampData;
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    font-size: 13px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: Monospace;

}

h2{
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #222;
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
}

.card-history {
    width: 70%;
    background: #f8f8f8;
    padding: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin:auto ;
    display: flex;
    justify-content: space-around;
  }

.container-userhistory{
    margin: 10px 0 ;
}

  p{
      font-size: 16px;
  }
</style>