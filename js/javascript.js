function generateGrid(x, y)
{
    let grid = document.createElement("div");
    grid.classList.add("grid-main");
    for (let i = 0; i < y; i++)
    {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < x; j++)
        {
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridRow.appendChild(gridItem);
            gridItem.addEventListener("mouseenter", onHoverGridItem);
        }
        grid.appendChild(gridRow);
    }
    return grid;
}

function createAndAddGrid(x, y)
{
    if (currentGrid) currentGrid.remove();

    currentGrid = generateGrid(x, y)
    gridContainer.appendChild(currentGrid);
}

function onHoverGridItem(e)
{
    this.style.backgroundColor = "black";
}

function promptGridSizeAndCreate(e)
{
    let newSize = +prompt("Enter a new grid size: ");
    if (!Number.isInteger(newSize))
    {
        alert("Invalid input!");
        return;
    }

    if (newSize <= 0)
    {
        alert("Size cannot be non-positive!");
        return;
    }
    else if (newSize > MAX_GRID_SIZE)
    {
        alert(`Size is too big! Please choose a size up to ${MAX_GRID_SIZE}x${MAX_GRID_SIZE}.`);
        return;
    }
    
    createAndAddGrid(newSize, newSize);
}

const MAX_GRID_SIZE = 128;

const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector(".new-grid-button");

newGridButton.addEventListener("click", promptGridSizeAndCreate);

let currentGrid;

createAndAddGrid(16, 16);