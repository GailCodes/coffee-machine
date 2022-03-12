/*--------
Variables
--------*/
const machineButtons = document.querySelectorAll(".machine_button");
const allNozzles = document.querySelectorAll(".machine_nozzle");
const cupSteamEl = document.querySelector(".machine_cup_steam");

/*---------------
Pouring animation
---------------*/
function pourLiquid() {
  for (let i = 0; i < 2; i++) {
    machineButtons[i].addEventListener("click", () => {
      // Pour milk or coffee depending on button clicked
      if (machineButtons[i] == machineButtons[0]) {
          allNozzles[0].classList.add("coffee_nozzle");
      }
      else if (machineButtons[i] == machineButtons[1]){
          allNozzles[1].classList.add("milk_nozzle");  
      }

      // Change pressed button color
      machineButtons[i].classList.add("machine_button_pressed");
      // Change pressed button cursor
      machineButtons[i].style.cursor = "default";
      // Diable button from being clicked
      machineButtons[i].style.pointerEvents = "none";  

      // If both milk and coffee are poured then coffee is made
      while (allNozzles[0].classList.contains("coffee_nozzle") && allNozzles[1].classList.contains("milk_nozzle")) {
        setTimeout(() => {
          cupSteamEl.classList.add("machine_cup_steam--active");
        }, 1000);
        break;
      }
    })
  }
}

pourLiquid();

/*-----------
Reset Machine
-----------*/
machineButtons[2].addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    allNozzles[i].classList.remove("milk_nozzle", "coffee_nozzle");
    machineButtons[i].classList.remove("machine_button_pressed");
    machineButtons[i].style.cursor = "pointer";  
    machineButtons[i].style.pointerEvents = "auto";  
  }
  cupSteamEl.classList.remove("machine_cup_steam--active");
})


