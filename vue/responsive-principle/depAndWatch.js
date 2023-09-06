class Dep{
    constructor(){
        this.dep=[];
    }
    addSub(sub){
        this.dep.push(sub);
    }
    notify(){
        this.sub.forEach((sub)=>{
            sub.update();
        })
    }
}

class Watch{
    constructor(obj,key,cb){
        Dep.target=this
        this.cb=cb
        this.obj=obj
        this.key=key
        this.value=obj[key]
        Dep.target=null
    }
    update(){
        this.value=this.obj[this.key]
        this.cb(this.value)
    }
}


// 最终版
function obsever(obj){
    if(!obj||typeof obj!='object'){
        return;
    }
    Object.keys(obj).forEach((key)=>{
        defineReactive(obj,key,obj[key])
    })
    function defineReactive(obj,key,val){
        obsever(val)
        let dep=new Dep()
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get:function(){
                if(Dep.target){
                    dep.addSub(Dep.target)
                }
                return val
            },
            set:function(newVal){
                obsever(newVal)
                if(newVal!=val){
                    val=newVal
                    dep.notify()
                }
            }
        })
    }
}