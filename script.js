const projects = {
            graphics: {
                title: 'Live Graphics Operator',
                description: 'Real-time graphics integration, lower thirds, scoreboards, and visual effects for live broadcasts and sporting events.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop', caption: 'Graphics control setup' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', caption: 'Live graphics demo', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop', caption: 'Scoreboard integration' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', caption: 'Lower thirds example', vertical: true }
                ]
            },
            switching: {
                title: 'Multi-Camera Live Switching',
                description: 'Professional live video switching for events, concerts, and broadcasts using industry-standard equipment.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop', caption: 'Switching console' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', caption: 'Live switching in action', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=400&fit=crop', caption: 'Multi-camera setup' }
                ]
            },
            camera: {
                title: 'Camera Operating',
                description: 'Expert camera operation for live broadcasts, concerts, sports events, and studio productions with professional-grade equipment.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop', caption: 'Concert camera work' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', caption: 'Live camera footage', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop', caption: 'Event coverage' }
                ]
            },
            studio: {
                title: 'Studio Production',
                description: 'Complete studio production services including lighting, multi-camera setup, and live show production for talk shows and content creation.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Studio set overview' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', caption: 'Studio production', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&h=400&fit=crop', caption: 'Lighting and setup' }
                ]
            },
            aftermovie: {
                title: 'Aftermovie & Advertisement',
                description: 'Creative video production for event aftermovies, promotional content, and commercial advertisements with professional editing.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', caption: 'Event aftermovie' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', caption: 'Commercial spot', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Film production' }
                ]
            },
            social: {
                title: 'Social Media Marketing',
                description: 'Engaging vertical video content optimized for Instagram Reels, TikTok, and YouTube Shorts to maximize reach and engagement.',
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop', caption: 'Social content creation' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', caption: 'Instagram Reel example', vertical: true },
                    { type: 'image', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop', caption: 'Content filming setup' },
                    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', caption: 'TikTok content', vertical: true }
                ]
            }
        };

        function openProject(key) {
            const p = projects[key];
            let html = '<div class="modal-close" onclick="closeProject()">&times;</div>';
            html += '<div class="modal-header"><h2>' + p.title + '</h2><p>' + p.description + '</p></div>';
            html += '<div class="media-grid">';
            p.media.forEach(m => {
                if (m.type === 'image') {
                    html += '<div class="media-item"><img src="' + m.src + '"><div class="media-caption">' + m.caption + '</div></div>';
                } else {
                    html += '<div class="media-item ' + (m.vertical ? 'vertical' : '') + '"><video controls><source src="' + m.src + '" type="video/mp4"></video><div class="media-caption">' + m.caption + '</div></div>';
                }
            });
            html += '</div>';
            document.getElementById('modalContent').innerHTML = html;
            document.getElementById('projectModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeProject() {
            document.getElementById('projectModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            document.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
        }

        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });
        document.getElementById('projectModal').addEventListener('click', e => { if (e.target.id === 'projectModal') closeProject(); });
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });