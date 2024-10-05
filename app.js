document.getElementById('cropForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const cropData = {
        cropType: document.getElementById('cropType').value,
        plantingDate: document.getElementById('plantingDate').value,
        seedVariety: document.getElementById('seedVariety').value,
        harvestDate: document.getElementById('harvestDate').value
    };

    try {
        const response = await fetch('/add-crop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cropData)
        });

        const result = await response.json();
        document.getElementById('response').textContent = result.message;
    } catch (error) {
        console.error('Error submitting form:', error);
        document.getElementById('response').textContent = 'Error submitting form.';
    }
});
