document.getElementById('saveButton').addEventListener('click', function() {
    const formData = {
        quantity: document.getElementById('quantity').value,
        contact: document.getElementById('contact').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        category: document.getElementById('category').value,
        preferences: document.getElementById('preferences').value,
    };

    const json = JSON.stringify(formData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'supplier_data.json1';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});