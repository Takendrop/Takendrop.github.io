// Projects page functionality
// Make sure projects-data.js is loaded before this file!

// Function to switch projects
function showProject(num) {
    const project = projectsData[num];
    const imgElement = document.getElementById('project-img');
    const contentArea = document.getElementById('project-content');
    
    // Show the content area
    contentArea.style.display = 'block';
    
    // Update title
    document.getElementById('project-title').textContent = project.title;
    
    // Update descriptions with HTML formatting
    document.getElementById('project-description1').innerHTML = formatText(project.description1);
    document.getElementById('project-description2').innerHTML = formatText(project.description2);
    
    // Handle image or placeholder
    if (project.image && project.image !== "") {
        imgElement.src = project.image;
        imgElement.style.display = 'block';
    } else {
        imgElement.src = 'https://via.placeholder.com/600x300/667eea/ffffff?text=' + encodeURIComponent(project.title);
        imgElement.style.display = 'block';
    }
    
    // Update active button
    document.querySelectorAll('.project-btn').forEach((btn, index) => {
        btn.classList.remove('active');
        if (index === num - 1) {
            btn.classList.add('active');
        }
    });
}

// Helper function to format text with line breaks
function formatText(text) {
    // Check if text contains HTML tags (like iframe)
    if (text.includes('<iframe') || text.includes('<div')) {
        return text; // Return as-is if it contains HTML
    }
    
    // Otherwise, format normally
    return text.split('\n').map(line => {
        if (line.trim() === '') return '<br>';
        if (line.match(/^[A-Z\s]+$/)) return `<h3>${line}</h3>`;
        return `<p>${line}</p>`;
    }).join('');
}

// Fallback for missing images
const projectImg = document.getElementById('project-img');
if (projectImg) {
    projectImg.onerror = function() {
        this.src = 'https://via.placeholder.com/600x300/667eea/ffffff?text=' + encodeURIComponent(document.getElementById('project-title').textContent);
    };
}