let div = document.createElement('div')
    div.style.marginLeft = '370px'
    div.style.marginTop = '120px'
    
let img = document.createElement('img')
    img.src = 'a.jpg'
    img.style.width='500px'
    img.style.height='300px'

let p_btn = document.createElement('button')
    p_btn.innerText='Previous'
    p_btn.addEventListener('click' ,previous)

let n_btn = document.createElement('button')
    n_btn.innerText='Next'
    n_btn.addEventListener('click' ,next)
    
    
    document.body.append(div)
    div.append(img)
    div.append(p_btn)
    div.append(n_btn)

let step = 0

let img_arry = ['a','b','c','d','e','f','g','h']


    function previous(){
        if(step>0){
        step--
        changeImage()
    }else{
        step = img_arry.length-1
        step--

        changeImage()

    }
}

function next(){

   if(step<img_arry.length-1){
      step ++
    changeImage()
    }else{
        step = 0
    changeImage()

    }

}

   
    
   
   function changeImage(){
     
    let img_arry = ['a','b','c','d','e','f','g','h']
        img.src = img_arry[step]+'.jpg'

   }



