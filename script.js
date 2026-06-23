function isOpen(startHour, endHour, utcHour){
  if(startHour < endHour){
    return utcHour >= startHour && utcHour < endHour;
  } else {
    return utcHour >= startHour || utcHour < endHour;
  }
}

function update(){
  const now = new Date();
  const utcHour = now.getUTCHours();

  // تقریبی سشن‌ها
  const london = isOpen(8, 17, utcHour);
  const newyork = isOpen(13, 22, utcHour);
  const tokyo = isOpen(0, 9, utcHour);
  const sydney = isOpen(22, 7, utcHour);

  document.getElementById("london").innerText = london ? "OPEN 🟢" : "CLOSED 🔴";
  document.getElementById("newyork").innerText = newyork ? "OPEN 🟢" : "CLOSED 🔴";
  document.getElementById("tokyo").innerText = tokyo ? "OPEN 🟢" : "CLOSED 🔴";
  document.getElementById("sydney").innerText = sydney ? "OPEN 🟢" : "CLOSED 🔴";
}

update();
setInterval(update, 60000);
