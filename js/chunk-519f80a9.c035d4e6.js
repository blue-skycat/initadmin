(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519f80a9"],{5171:function(e,t,r){"use strict";var a=r("b95e"),i=r.n(a);i.a},a5d8:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"body"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"15px"}},[a("Row",{staticStyle:{"margin-top":"10%"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{xs:20,sm:12,md:8,lg:6}},[a("div",{staticStyle:{width:"100%",color:"#fff","margin-bottom":"30px","text-align":"center"}},[a("img",{staticStyle:{width:"120px","margin-bottom":"10px"},attrs:{src:r("cf05"),alt:"initadmin"}}),a("h2",[e._v("InitAdmin")])]),a("Form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[a("FormItem",{attrs:{prop:"email"}},[a("Input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("FormItem",{attrs:{prop:"verify"}},[a("Input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[a("EmailVerify",{attrs:{slot:"append",email:e.form.email,title:"用户注册"},on:{verifytoken:e.getVerifyToken},slot:"append"})],1)],1),a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("FormItem",[a("Button",{attrs:{size:"large",long:"",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("\n                                立即注册\n                            ")])],1)],1)],1)],1)],1)]),a("IaFoot")],1)},i=[],o=r("ca11"),s=r("d123"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"email_verify"},[r("Button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)},l=[],m={name:"Verify",props:{email:"",title:""},data:function(){return{label:"发送验证码",time:60}},created:function(){},methods:{sendVerify:function(){var e=this;e.email||e.$Message.error("请输入邮箱"),e.label="剩余"+e.time+"s";var t=setInterval(function(){e.time--,e.time<0?(e.label="发送验证码",e.time=30,clearInterval(t)):e.label="剩余"+e.time+"s"},1e3);axios.post("/v1/email/Verify/send",{email:e.email,title:e.title}).then(function(t){t=t.data,"200"==t.code?(e.$Message.success(t.msg),e.$emit("verifytoken",t.data.token)):e.$Message.error(t.msg)}).catch(function(e){})}}},c=m,f=r("2877"),u=Object(f["a"])(c,n,l,!1,null,"6662426b",null),d=u.exports,p=(r("c276"),{components:{IaHead:o["a"],IaFoot:s["a"],EmailVerify:d},data:function(){return{loading:!1,form:{email:"",password:"",verify:"",token:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){},methods:{getVerifyToken:function(e){this.form.token=e},handleSubmit:function(){this.loading=!0;var e=this;axios.post("/v1/reg_email/user/register",e.form).then(function(t){t=t.data,"200"==t.code?(e.$Message.success(t.msg),e.$router.push("/")):e.$Message.error(t.msg),e.loading=!1}).catch(function(t){e.loading=!1})}}}),g=p,v=(r("5171"),Object(f["a"])(g,a,i,!1,null,"792483f6",null));t["default"]=v.exports},b95e:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.61b7ae55.png"}}]);