/**
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
 * 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 */

// const buf=Buffer.from('thomas','ascii');

// console.log(buf.toString('hex')); //74686f6d6173

// console.log(buf.toString('base64')); //dGhvbWFz

// 写入缓冲区
// 创建一个长度为256,用0填充的Buffer
// const buf=Buffer.alloc(256)
// const len=buf.write('sunflower.github.io')
// console.log('字节数'+len)

// 从缓冲区读取数据
// const buf=Buffer.alloc(26)
// for(let i=0;i<26;i++){
//     buf[i]=i+97
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('utf8',0,5));

// 将 Buffer 转换为 JSON 对象
// const buf=Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
// const json=JSON.stringify(buf)
// console.log(json);

// const copy=JSON.parse(json,(key,value)=>{
//     return value&&value.type==='Buffer'?Buffer.from(value.data):value;
// })

// console.log(copy);

// 缓冲区合并
// const buf01 = Buffer.from("thomas");
// const buf02 = Buffer.from("hello");

// const sumBuf = Buffer.concat([buf01, buf02]);
// console.log(sumBuf.toString());


// 缓冲区比较
// const buf01 = Buffer.from("abcde");
// const buf02 = Buffer.from("abcd");
// const res=buf01.compare(buf02)
// if(res<0){
//     console.log(buf01+'=>'+buf02);
// }else{
//     console.log(buf01+'<='+buf02);
// }

// 拷贝缓冲区
// const buf01 = Buffer.from("abcde");
// const buf02 = Buffer.from("abcd111");
// // 把buf01插入到buf02的指定位置上
// buf01.copy(buf02,2)
// console.log(buf02.toString());


// 缓冲区裁剪
// const buf=Buffer.from('hello')
// const res=buf.slice(0,2)
// console.log(res.toString());

// 缓冲区长度

console.log(Buffer.from('thomas').length);