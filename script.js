const password= document.getElementById('password'); 
const background= document.getElementById('background'); 

password.addEventListener('input',(e)=>{
	const input = e.target.value; 
	const length= input.length; 
	const blurValue= 20 - length * 2  
	background.style.filter=`blur(${blurValue}px)`;
}) 

Swal.fire({ 
  title: "Janette Jacqueline Huang",
  text: "Sapere aude-Beranilah untuk bijaksana. Sir jumpscare banget mirip Tung Tung Tung Sahur", 
  imageUrl: "Jacqueline.jpg", 
  imageWidth: 400,
  imageheiht: 200, 
  confirmButtonText:"Tutup",
  showCloseButton: true, 
});