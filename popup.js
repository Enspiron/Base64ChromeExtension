const base64 = document.getElementById('code');
const btn = document.getElementById('go');
const extra = document.getElementById('extra');

function Text(){ 
    return(
    `
        <textarea rows="4" cols="40">
        ${window.atob(base64.value)}
        </textarea>
    `)
}

btn.addEventListener("click", OpenLink)
base64.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})

base64.focus();
base64.select();


function OpenBase64Link(str){
        let url = window.atob(str);
        try {
            if(isUrl(url))
            window.open(url, '_blank');
        } catch (error) {
            alert("That is not a base64 link!\nDecoded text pasted in text box")
            extra.innerHTML = Text();
        }    
        
        
        // OpenBase64Link(base64.value)
}

function isUrl(s) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
 }

function OpenLink(){
     OpenBase64Link(base64.value)
}

