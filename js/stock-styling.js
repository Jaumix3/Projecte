// Stock styling - Color stocks and apply styling
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('article li:first-child');
    
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        if (text.includes('disponible')) {
            item.classList.add('stock-disponible');
            item.style.color = '#22C55E';
            item.style.fontWeight = 'bold';
            item.style.fontSize = '1.05em';
            item.style.padding = '8px 12px';
            item.style.background = 'rgba(34, 197, 94, 0.05)';
            item.style.borderRadius = '6px';
            item.style.borderLeft = '4px solid #22C55E';
        } else if (text.includes('esgotat')) {
            item.classList.add('stock-esgotat');
            item.style.color = '#EF233C';
            item.style.fontWeight = 'bold';
            item.style.fontSize = '1.05em';
            item.style.padding = '8px 12px';
            item.style.background = 'rgba(239, 35, 60, 0.05)';
            item.style.borderRadius = '6px';
            item.style.borderLeft = '4px solid #EF233C';
        }
    });
});
