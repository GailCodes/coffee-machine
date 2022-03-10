/*--------
Variables
--------*/
const machineButtons = document.querySelectorAll(".machine_button");
const allNozzles = document.querySelectorAll(".machine_nozzle");

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

      // Change pressed button color and change cursor
      machineButtons[i].classList.add("machine_button_pressed");
      machineButtons[i].style.cursor = "default";

      // If both milk and coffee are poured then coffee is made
      if (allNozzles[0].classList.contains("coffee_nozzle") && allNozzles[1].classList.contains("milk_nozzle")) {
        setTimeout(() => {
          console.log("Coffee is done");
        }, 1000);
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
  }
})


