<template>
<div>
    <h2> History of Login </h2>
    <div v-for="history in login_history" :key="history.TIme+history.Date" class="container-userhistory" >
        <div class="card-history">
            <div class="form-card">
                <p><b>Date :</b> {{ history.Date }}</p>
            </div>
            <div class="form-card">
                <p><b>Time :</b> {{ history.Time }} </p>
            </div>
        </div>  
    </div>
</div>
</template>
 
<script>
export default {
    name:"userhistory",
    data(){
        return{
            login_history:[
                {
                    Date:"22/12/2020",
                    Time:"12:32:22"
                },
                {
                    Date:"12/01/2020",
                    Time:"1:22:42"
                },
            ]
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