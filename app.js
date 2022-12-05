function f1 (){
    const a=this;
}
const f2=()=>{
const a =this;
return a;
}
 const f=f1;
 f();
 f2();
 f1.d=20;
 console.log(f1.d);
const rectangle={
    width:3,
    height:5,
    
}