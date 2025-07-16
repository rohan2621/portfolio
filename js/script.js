// Scroll Animation
function revealSections() {
    const reveals = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Highlight Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(20, 20, 20, 0.95)';
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");
    const githubUsername = "rohan2621";
  
    const excludeRepos = new Set([
      "rohan2621",
      "rproject",
      "projects"
    ]);
  
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
      .then((response) => response.json())
      .then((repos) => {
        projectsList.innerHTML = ""; // Clear loading
  
        if (!Array.isArray(repos) || repos.length === 0) {
          projectsList.innerHTML = "<p>No projects found.</p>";
          return;
        }
  
        // Filter out excluded repos by name (case-sensitive)
        const filteredRepos = repos.filter(repo => !excludeRepos.has(repo.name));
  
        if (filteredRepos.length === 0) {
          projectsList.innerHTML = "<p>No projects found after filtering.</p>";
          return;
        }
  
        filteredRepos.forEach((repo) => {
          const projectEl = document.createElement("div");
          projectEl.className = "project";
  
          projectEl.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
            <p>${repo.description || "No description provided."}</p>
            <p><strong>Language:</strong> ${repo.language || "N/A"}</p>
          `;
  
          projectsList.appendChild(projectEl);
        });
      })
      .catch((error) => {
        projectsList.innerHTML = "<p>Failed to load projects.</p>";
        console.error("GitHub API fetch error:", error);
      });
  });
  