import{d as y,j as d,o as k,k as r,l as e,A as x,m as s,F as w,y as T,u as C,e as n,D as M,x as P,p as B,q as L,z as m,g as p}from"./index-BytnqR-9.js";import{a as S,e as E}from"./diagnosis-C-UeUW5V.js";import{aM as F}from"./diagnosis-CvfvYnJe.js";const R={class:"container mt-4"},V=e("i",{class:"bi-arrow-left-square-fill"},null,-1),q=[V],z={class:"card card-title"},N={key:0},U={key:1},j=e("div",{class:"card card-title"},"Receta y/o recomendación",-1),A=e("button",{type:"button",class:"btn btn-sm btn-save mt-2","data-bs-toggle":"modal","data-bs-target":"staticBackdrop"}," Editar ",-1),H={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},I={class:"modal-dialog modal-dialog-scrollable"},K={class:"modal-content"},$=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"}," Editar tratamiento "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},G={class:"col-auto"},J={key:0,class:"text-alert-optional"},Q={key:1,class:"text-alert-error"},W=e("div",{class:"modal-footer"},[e("button",{type:"submit",class:"btn btn-save m-2"}," Actualizar "),e("a",{href:"",class:"btn btn-light"},"Cancelar")],-1),X={key:0,class:"alert alert-success mt-2",role:"alert"},Y=e("i",{class:"bi-check-circle-fill m-1"},null,-1),Z={key:1,class:"alert alert-warning mt-2",role:"alert"},D=e("i",{class:"bi-exclamation-triangle-fill m-1"},null,-1),O={key:2,class:"alert alert-danger mt-2"},tt=e("i",{class:"bi-exclamation-triangle-fill m-1"},null,-1),et={class:"container mt-4"},ot=y({__name:"diagnosisDetail",props:{title:{type:String,default:"Diagnosis Details"}},setup(b){const u=C(),_=d([]);k(async()=>{const t=await S(u.params.id);(t==null?void 0:t.statusText)=="OK"&&(_.values=t==null?void 0:t.data.results,a.treatment=t==null?void 0:t.data.results[0].treatment,a.patient=t==null?void 0:t.data.results[0].patient,a.sex=(t==null?void 0:t.data.results[0].sex)==="M"?"M":"F",a.test=t==null?void 0:t.data.results[0].test,a.result=t==null?void 0:t.data.results[0].result,a.treatment=t==null?void 0:t.data.results[0].treatment,a.condition=(t==null?void 0:t.data.results[0].condition)==="activo"?"activo":"inactivo",a.observation=t==null?void 0:t.data.results[0].observation)});const a=d({patient:"",sex:"F",test:"LDH/DHL",result:"0.0",treatment:"",condition:"activo",observation:""}),i=d({validateTreatment:""}),o=d({success:"",warning:"",err:""}),v=async()=>{i.validateTreatment=await F(a.treatment)},h=async()=>{try{let t=await E(u.params.id,a);(t==null?void 0:t.statusText)==="Created"?(o.success=t.data.Message,o.err="",location.replace("/diagnosis/detail/"+u.params.id)):(console.log("no hubo cambios"),o.warning="Modifique algo o presione cancelar")}catch(t){o.success="",o.err=t.response,console.log(t.response)}};return(t,c)=>(n(),r("div",R,[e("a",{onClick:c[0]||(c[0]=l=>x(M).back()),class:"col-1 icon-arrow",title:"Return"},q),e("div",z,s(b.title),1),(n(!0),r(w,null,T(_.values,l=>(n(),r("ul",{key:l.diagnosis_id},[e("li",null,"Test:"+s("  "+l.test),1),e("li",null,"Paciente:"+s("  "+l.patient),1),e("li",null,"Sex:"+s("  "+l.sex),1),e("li",null,"Pi:"+s("  "+l.pi),1),e("li",null,"P1:"+s("  "+l.p1),1),e("li",null,"P2:"+s("  "+l.p2),1),e("li",null,"P3:"+s("  "+l.p3),1),e("li",null,"Pf:"+s("  "+l.pf),1),e("li",null,"Ideal:"+s("  "+l.ideal),1),e("li",null,"Result:"+s("  "+l.result),1),e("li",null,"Interpretacion:"+s("  "+l.interpretation),1),e("li",null,"Condition:"+s("  "+l.condition),1),e("li",null,"Observation:"+s("  "+l.observation),1),e("li",null," Created:"+s("  "+new Date(l.created).toLocaleString("pe-PE")),1),l.updated===null?(n(),r("li",N," Updated:"+s("  "+l.updated),1)):(n(),r("li",U," Updated:"+s("  "+new Date(l.updated).toLocaleString("pe-PE")),1)),e("div",null,[j,A,e("div",H,[e("div",I,[e("div",K,[$,e("div",g,[e("form",{onSubmit:P(h,["prevent"]),onKeyup:v},[e("div",G,[B(e("textarea",{"onUpdate:modelValue":c[1]||(c[1]=f=>a.treatment=f),type:"textarea",class:"form-control input-size",id:"observation",placeholder:""},null,512),[[L,a.treatment]]),e("small",null,s(a.treatment.length+" de 2083 caracteres"),1),i.validateTreatment===""||i.validateTreatment==="Opcional"?(n(),r("small",J,s(i.validateTreatment),1)):(n(),r("small",Q,s(i.validateTreatment),1))]),W],32),o.success.length>0?(n(),r("p",X,[Y,m(s(o.success),1)])):p("",!0),o.warning.length>0?(n(),r("p",Z,[D,m(s(o.warning),1)])):p("",!0),o.err.length>0?(n(),r("p",O,[tt,m(s(o.err),1)])):p("",!0)])])])]),e("div",et,s("  "+l.treatment),1)])]))),128))]))}});export{ot as default};
