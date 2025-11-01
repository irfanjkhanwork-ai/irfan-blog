// Load essays and papers from JSON
fetch('essays.json')
  .then(response => response.json())
  .then(data => {
    const essayList = document.getElementById("essay-list");
    const paperList = document.getElementById("paper-list");

    essayList.innerHTML = "";
    paperList.innerHTML = "";

    // Sort essays by date (newest first)
    data.essays.sort((a, b) => new Date(b.date) - new Date(a.date));
    data.papers.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render essays
    data.essays.forEach(e => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="essays/${e.file}">${e.title}</a> 
        <span style="color:#777;font-size:0.9em;">(${e.date})</span>`;
      essayList.appendChild(li);
    });

    // Render papers (external links)
    data.papers.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${p.link}" target="_blank">${p.title}</a> 
        <span style="color:#777;font-size:0.9em;">(${p.date})</span>`;
      paperList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Error loading essays.json:", err);
  });
