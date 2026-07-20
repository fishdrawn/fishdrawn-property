// Main JS
document.addEventListener('DOMContentLoaded', function() {
    const postsGrid = document.getElementById('posts-grid');
    if (postsGrid) {
        posts.forEach(post => {
            const card = document.createElement('a');
            card.href = `post.html?id=${post.id}`;
            card.className = 'post-card';

            const imgDiv = document.createElement('div');
            imgDiv.className = 'post-image';
            // Generate a colored placeholder based on category
            const colors = {
                'AI 宸ュ叿瀹炴祴': '#3b82f6',
                '鎻愭晥鎸囧崡': '#10b981',
                'AI 璧勮': '#f59e0b',
                '鍙樼幇鎬濊矾': '#ef4444'
            };
            const color = colors[post.category] || '#8b5cf6';
            imgDiv.style = `background: linear-gradient(135deg, ${color}, ${color}88); display: flex; align-items: center; justify-content: center; font-size: 2.5rem;`;
            const icons = { 'AI 宸ュ叿瀹炴祴': '馃洜锔?, '鎻愭晥鎸囧崡': '馃挕', 'AI 璧勮': '馃摪', '鍙樼幇鎬濊矾': '馃挵' };
            imgDiv.textContent = icons[post.category] || '馃';

            const contentDiv = document.createElement('div');
            contentDiv.className = 'post-content';
            contentDiv.innerHTML = `
                <div class="post-category">${post.category}</div>
                <div class="post-title">${post.title}</div>
                <div class="post-excerpt">${post.excerpt}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span class="post-date">${post.date}</span>
                    <span class="read-more">闃呰鍏ㄦ枃 鈫?/span>
                </div>
            `;

            card.appendChild(imgDiv);
            card.appendChild(contentDiv);
            postsGrid.appendChild(card);
        });
    }
});
