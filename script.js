function verificar(){
   let data=new Date()
   let ano= data.getFullYear()
   let fano=window.document.getElementById('txtano') 
   let res= window.document.querySelector('div#res')
    
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert("revise os dados")
       
   } else{
       let fsex=window.document.getElementsByName('radsex')
       let idade= ano - Number(fano.value)
       let genero=""
       let imagem=document.createElement('img')
       imagem.setAttribute('id','foto')
       imagem.style='border-radius: 50%;width:200px;heigth:200px;margin-top:15px;'
       let categoria =""
        if (fsex[0].checked){
           genero="Masculino"
         if(idade >=0 && idade <=10){
             categoria="criança"
             imagem.setAttribute('src','./assets//bb-masc.jpg')

         } else if(idade >=11 && idade <17){
            categoria="adolescente"
            imagem.setAttribute('src','./assets//adolescente-masc.jpg')
            

         } else if(idade >=18 && idade <60){
            categoria="adulto"
            imagem.setAttribute('src','./assets//adulto-masc.jpg')

         }else if(idade >61){
            categoria="idoso"
            imagem.setAttribute('src','./assets//idoso-masc.jpg')
         }
            
       }else if(fsex[1].checked){
           genero="Feminino"
           if(idade >=0 && idade <=10){
            categoria="criança"
            imagem.setAttribute('src','./assets//bb-fem.jpg')

        } else if(idade >=11 && idade <17){
            categoria="adolescente"
            imagem.setAttribute('src','./assets//adolescente-fem.jpg')

        } else if(idade >=18 && idade < 60){
            categoria="adulta"
            imagem.setAttribute('src','./assets//adulta-fem.jpg')

        }else{
            categoria="idosa"
            imagem.setAttribute('src','./assets//idosa-fem.jpg')
        }
       }
       res.innerHTML=`detectamos ${categoria} do  gênero ${genero} com ${idade} anos`
       res.appendChild(imagem)
   }
}