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
        }
        grid.appendChild(gridRow);
    }
    return grid;
}

const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer);
gridContainer.appendChild(generateGrid(16, 16));