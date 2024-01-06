const mainDiv = document.getElementById('mainDiv');
const selectedGrids = [];

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