function myFunction(){
    let Fname=document.querySelector("#FNum")
    let dType=document.querySelector("#dType")
    let idNum=document.querySelector("#idNum")
    let nmcNum=document.querySelector("#nmcNum")
    let dob=document.querySelector("#DOB")
    let nationality=document.querySelector("#nationality")
    let website=document.querySelector("#Website")
    let color1=document.querySelector("#color1")
    let color2=document.querySelector("#color2")
    let color3=document.querySelector("#color3")
    // for the image link
    let photo =document.querySelector("#photo")
    var src = URL.createObjectURL(photo.files[0])
    document.getElementById('ProfilePic').src = src
    // logo link
    let logo =document.querySelector("#logo")
    var lsrc = URL.createObjectURL(logo.files[0])
    document.getElementById('Clogo').src = lsrc
    // let path=photo.value.split("\\")
    // document.querySelector("#ProfilePic").src=`Images\\${path[2]}`
    document.getElementById("FName").innerHTML=Fname.value
    document.getElementById("DType").innerHTML=dType.value
    document.getElementById("IdNum").innerHTML=idNum.value
    document.getElementById("NMCNum").innerHTML=nmcNum.value
    document.getElementById("websitee").innerHTML=website.value
    document.getElementById("phNum").innerHTML=nmcNum.value
    document.getElementById("dob").innerHTML=dob.value
    document.querySelector("#Citizenship").innerHTML=nationality.value
    // changing color
    // DarkBlue
    document.querySelector("#naame").style.backgroundColor=color1.value
    document.querySelector("#footer").style.borderColor=color1.value
    // orange
    document.querySelector("#blue").style.backgroundColor=color2.value
    document.querySelector("#blueborder").style.backgroundColor=color2.value
    // light blue
    
    document.querySelector("#yellow").style.backgroundColor=color3.value

}

function takepic(){

        var options = {
            quality: 1,
            width: 408,
            height: 647
        };

    domtoimage.toBlob(document.getElementById("idcard"),options).then(function(blob){
        window.saveAs(blob,`IDcard`)
    })
}
        
