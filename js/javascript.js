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

const gridContainer = document.querySelector(".grid-container");

let currentGrid;

createAndAddGrid(16, 16);