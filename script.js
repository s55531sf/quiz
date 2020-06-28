let que=document.getElementById("que");
let res=document.getElementById("res");
let plus=document.getElementById("plus");
let min=document.getElementById("min");
let kake=document.getElementById("kake");
let waru=document.getElementById("waru");
let clear=document.getElementById("clear");
let num=0;
let max=10;
let flag=true;
let sco=0;
for(;;){
 nan=prompt("難易度を選択してください※1=hard 2=normal 3=easy")*1;
 if(nan==1||nan==2||nan==3){
 break;
 }
}
let cnt=nan*10;
res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
let toi=new Array(max);
toi=["30□15=45","12□3=36","32□2=16","8□12=96","25□3=22","24□3=8","24□3=27","18□3=15","14□5=70","24□10=34"];
let seikai=new Array(max);
seikai=["+","×","÷","×","−","÷","+","−","×","+",];
if(flag){
 setInterval(()=>{
  if(flag){
   if(cnt>0&&sco<10){
    cnt--;
    res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
    }else{
   que.textContent="時間切れ";
   que.style.color="red";
   flag=false;
   }
  }
 },1000);
}
//plusおすとき
plus.addEventListener("click",()=>{
if(flag){  
console.log("plus");
  if(seikai[num]=="+"){
   alert("正解！");
   sco++;
   }else{
   alert("不正解");
   }  
num++;
  if(num<max){
   console.log(num);
   que.textContent="問題"+(num*1+1*1)+" "+toi[num];
  res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
  }else{
   res.style.color="red";
   que.textContent="問題終了";
   que.style.color="red";
   res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
   if(sco==10){
    res.style.color="green";
    res.textContent="全問正解！おめでとう！";
    if(nan==1){
     clear.src="20200626201041.png";
     res.textContent="ハードクリアおめでとう！";
     }else{
     clear.src="20200626201655.png";
    }
   }
   flag=false;
 }
}
});
//minおすとき
min.addEventListener("click",()=>{
 if(flag){
  console.log("min");
  if(seikai[num]=="−"){
   alert("正解！");
   sco++;
   }else{
   alert("不正解");
   }
   num++;
  if(num<max){
   console.log(num);
   que.textContent="問題"+(num*1+1*1)+" "+toi[num];
   res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
  }else{
   que.textContent="問題終了";
   flag=false;
 }
}
});
//kakeおすとき
kake.addEventListener("click",()=>{
 if(flag){
  console.log("kake");
  if(seikai[num]=="×"){
   alert("正解！");
   sco++;
   }else{
   alert("不正解");
   }
   num++;
  if(num<max){
   console.log(num);
   que.textContent="問題"+(num*1+1*1)+" "+toi[num];
   res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
  }else{
   que.textContent="問題終了";
   flag=false;
 }
}
});
//waruおすとき
waru.addEventListener("click",()=>{
 if(flag){
  console.log("waru");
  if(seikai[num]=="÷"){
   alert("正解！");
   sco++
   }else{
   alert("不正解");
   }
   num++;
  if(num<max){
   console.log(num);
   que.textContent="問題"+(num*1+1*1)+" "+toi[num];
   res.textContent="残り時間:"+cnt+"秒|スコア:"+sco;
  }else{
   que.textContent="問題終了";
   flag=false;
 }
}
});

