const box = document.querySelector('.table-box');
const table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    
    for (let j = 1; j <= 10; j++) {
        const td = document.createElement('td');
        td.textContent = i * j;
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}

box.appendChild(table);