function openNav() {
    document.getElementById("headtag-side").style.width = "250px";
    document.getElementByClass("headtag-menu").style.marginright = "250px";
  }
  
  function closeNav() {
    document.getElementById("headtag-side").style.width = "0";
    document.getElementByClass("headtag-menu").style.marginright= "0";
  }
  function hideBar() {
    let element = document.getElementById("sideMenu");
    element.classList.add("hide");
  }

  let element = document.getElementById("sideMenu");
  function unhideBar() {
    element.classList.remove("hide");
  }