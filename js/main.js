const menu = document.querySelector(".burger");
const closeicon = document.querySelector(".close");
menu.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = "0";
});
closeicon.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = '-100%';
});

const closedd = document.querySelectorAll(".close-dd");
closedd.forEach(el =>{
    el.addEventListener("click", () =>{
    const dropdown = document.querySelector(".navbar-dropdown-menu");
    dropdown.style.right = "-100%";
    });
});

window.addEventListener("scroll", () =>{
    var scrolly = window.pageYOffset;
    if(scrolly > 50){
        const navbar = document.querySelector(".navbar-container");
        navbar.style.backgroundColor = "rgba(107, 36, 12, 1)";
    }else{
        const navbar = document.querySelector(".navbar-container");
        navbar.style.backgroundColor = "rgba(107, 36, 12, 0.1)";
    }
});

let price;
let defprice;
let brownistype;
let name;
let alamat;
let jumlahbrownies;

const order = document.querySelectorAll(".Brownies");
order.forEach(e =>{
    e.addEventListener("click", () =>{
        const popup = document.querySelector(".popup");
        popup.classList.toggle("priceshow");
        const orderproduct = document.querySelector("#order-product");
        orderproduct.innerHTML = `${e.classList}`;
        document.querySelector("#jumlah").value = 1;
        price = e.value;
        defprice = e.value;
        brownistype = e.classList;
        
        const priceinfo = document.querySelector("#priceinfo");
        priceinfo.innerHTML = `Rp. ${price}`;
    });
});

const closeorder = document.querySelector("#closeorder");
closeorder.addEventListener("click", () =>{
    const popup = document.querySelector(".popup");
    popup.classList.remove("priceshow");
});

const jumlahproduk = document.querySelector("#jumlah");

jumlahproduk.addEventListener("keyup", ()=>{
    price = defprice * jumlahproduk.value;

    const priceinfo = document.querySelector("#priceinfo");
    priceinfo.innerHTML = `Rp. ${price}`;
}); 

const ordernow = document.querySelector("#ordernow");
ordernow.addEventListener("click", () =>{
    nama = document.querySelector("#name").value;
    alamat = document.querySelector("#alamat").value;
    jumlahbrownies = document.querySelector("#jumlah").value;

    // href wa me
    window.location.href = `https://wa.me/+6288994107529/?text=order ${brownistype}, sebanyak ${jumlahbrownies}, seharga ${price}, atas nama ${nama}, diantar ke alamat ${alamat}`;

    document.querySelector(".popup").classList.remove("priceshow");
});

const contact = document.querySelector("#submit");
contact.addEventListener("click", () =>{
    let Nama = document.querySelector("#nama").value;
    let email = document.querySelector("#email").value;
    let pesan = document.querySelector("#message").value;

   window.location.href = `https://wa.me/+6288994107529/?text=pesan dari ${Nama} | ${email} | isi pesan : ${pesan}`;
});


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }