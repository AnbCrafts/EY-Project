const roomsData = [
    {
      id: 1,
      roomType: "Single Bed",
      chargePerDay: 1000, 
      totalNumber: 10,    
    },
    {
      id: 2,
      roomType: "Double Bed",
      chargePerDay: 1500,
      totalNumber: 8,
    },
    {
      id: 3,
      roomType: "Suite",
      chargePerDay: 3000,
      totalNumber: 5,
    },
    {
      id: 4,
      roomType: "Deluxe Room",
      chargePerDay: 2500,
      totalNumber: 6,
    },
    {
      id: 5,
      roomType: "Dormitory",
      chargePerDay: 500,
      totalNumber: 20,
    },
  ];
  

  const drop_ul = document.querySelector(".drop-box-option ul");

  const populate_drop_ul = () => {
    roomsData.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.roomType;
  
      li.addEventListener("click", () => {
        document.querySelector(".room-type input").value = li.textContent;
      });
  
      drop_ul.appendChild(li);
    });
  };


  const total = document.querySelectorAll(".row-total li");
  const alloted = document.querySelectorAll(".row-alloted li");
  const available = document.querySelectorAll(".row-available li");
  
  for (let index = 0; index < total.length; index++) {
    const totalValue = Number(total[index].textContent);
    const allotedValue = Number(alloted[index].textContent);
    const possible = (isNaN(totalValue) ? 0 : totalValue) - (isNaN(allotedValue) ? 0 : allotedValue);
    available[index].textContent = possible;

    if(possible == 0){
        available[index].classList.add("full")
    }
  }
  

  
  
  populate_drop_ul();
  