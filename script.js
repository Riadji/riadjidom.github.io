function jawaban() {
  var a = document.getElementById('item1');
  var item1 = a.options[a.selectedIndex].value;
  var result;
  if (item1==1) {
      result = "Syahadat";
  } else if(item1==2) {
      result = "Shalat";
  } else if(item1==3) {
      result="Puasa";
  } else if(item1==4) {
      result="Zakat";
  } else if(item1==5) {
      result="Haji";
  } else {
      result="Pilih";
  }
  document.getElementById("lblresult1").innerText=result;
}
