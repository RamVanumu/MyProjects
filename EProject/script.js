const mainDiv = document.getElementById('mainDiv');
const selectedGrids = [];
const horizontalGrids = 72;
const verticalGrids = 34;
const totalGrids = horizontalGrids * verticalGrids; // Total number of grids
function isSquareSelection(selectedGrids) {
  const selectedCount = selectedGrids.length;
  
  // Find the smaller dimension (minimum of horizontal and vertical grids)
  const minDimension = Math.min(horizontalGrids, verticalGrids);
  
  // Check if the selected grids form an n * n square
  if (selectedCount === minDimension ** 2) {
    return true;
  } else {
    return false;
  }
}
const result = isSquareSelection(selectedGrids);
function resultis(){
if (result) {
  console.log("The selected grids form an n * n square.");
} else {
  console.log("The selected grids do not form an n * n square.");
}
}

function handleGridClick(event) {
  const clickedGrid = event.target;

  // Toggle background color
  clickedGrid.classList.toggle('selected');

  // Get the ID of the clicked grid
  const gridId = clickedGrid.id;

  // Check if the grid is selected or deselected and update the selectedGrids list
  if (clickedGrid.classList.contains('selected')) {
    selectedGrids.push(gridId);
  } else {
    const index = selectedGrids.indexOf(gridId);
    if (index > -1) {
      selectedGrids.splice(index, 1);
    }
  }

  // Display the selected grid IDs in the console
  console.log('Selected Grids:', selectedGrids);
}
    for (let i = 0; i < 2448; i++) {
      const subDiv = document.createElement('div');
      subDiv.classList.add('subDiv');
      subDiv.classList.add('commonClass'); // Adding a common class name
      subDiv.id = `subDiv${i + 1}`; // Assigning unique ID names
      subDiv.style.left = Math.floor(Math.random() * 1800) + 'px';
      subDiv.style.top = Math.floor(Math.random() * 850) + 'px';
      subDiv.addEventListener('click', handleGridClick);
      mainDiv.appendChild(subDiv);
    }