document.getElementById('editButton').addEventListener('click', function() {
    console.log('Button clicked!');
    document.getElementById('edit-popup').style.display = 'block';
});

document.getElementById('save-changes').addEventListener('click', function() {
    const editedTitle = document.getElementById('edited-title').value;
    const editedContent = document.getElementById('edited-content').value;

    document.querySelector('h1').textContent = editedTitle;
    document.querySelector('.info').textContent = editedContent;
    document.querySelector('h2').textContent = editedContent;
    document.querySelector('p').textContent = editedContent;
    document.getElementById('edit-popup').style.display = 'none';
});

