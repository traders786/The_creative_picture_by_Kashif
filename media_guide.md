# Guide: How to Add Your Own Photos & Videos

Follow these simple instructions to replace the placeholder images/videos with your own content and add new items in the future.

---

## 1. Storing Your Files (Folder Directory)

All media files (both photos and videos) must be placed inside the `public/assets/images_and_videos/` directory, organized by category:

*   **Wedding Media (Photos & Videos):** Place in `public/assets/images_and_videos/wedding/`
*   **Pre-Wedding Media (Photos & Videos):** Place in `public/assets/images_and_videos/prewedding/`
*   **Baby Media (Photos & Videos):** Place in `public/assets/images_and_videos/baby/`
*   **Drone Media (Photos & Videos):** Place in `public/assets/images_and_videos/drone/`

*Tip: Keep your filenames simple and clean (e.g. `wedding_delhi_01.jpg`, `teaser_june_2026.mp4`). Avoid spaces in filenames.*

---

## 2. Referencing Media in Code (`src/data.ts`)

Open the file [src/data.ts](file:///c:/Users/KASHIF/Desktop/the-creative-picture_latest/src/data.ts) and follow the instructions below to add entries.

### A. How to Add Photos
Locate the `GALLERY_ITEMS` array at the top of the file. You will see existing entries. To add a new photo, add a new block like this:

```typescript
  {
    id: 'unique-photo-id-1', // E.g., 'w5', 'pw6', 'baby3', etc. (must be unique)
    title: 'My Custom Title',
    category: 'wedding', // Must be one of: 'wedding', 'prewedding', 'baby', 'drone'
    imageUrl: '/assets/images_and_videos/wedding/wedding_delhi_01.jpg', // Path to the file in public/
    description: 'A beautiful description of the scene and lighting.',
    location: 'New Delhi, India',
    year: '2026'
  },
```

---

### B. How to Add Cinematography Videos
Locate the `CINEMATOGRAPHY_ITEMS` array at the bottom of `src/data.ts`. To add a new video, add an entry like this:

```typescript
  {
    id: 'unique-cine-id', // E.g., 'ep4'
    title: 'Love in Rajasthan',
    sub: 'Intimate Palace Highlight Film',
    duration: '3:45 mins',
    cover: '/assets/images_and_videos/wedding/my-video-cover.jpg', // Thumbnail image path
    director: 'Kashif Ali',
    // For YouTube embeds, use the YouTube Embed URL:
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
    // For local MP4 files, use the local path:
    // videoUrl: '/assets/images_and_videos/wedding/teaser_june_2026.mp4'
  },
```

---

### C. How to Add Videography Clips
Locate the `VIDEOGRAPHY_ITEMS` array at the bottom of `src/data.ts`. Add a new item:

```typescript
  { 
    id: 'unique-video-id', // E.g., 'v4'
    title: 'Mehendi Dance Highlights', 
    location: 'Goa', 
    img: '/assets/images_and_videos/wedding/mehendi-cover.jpg', // Thumbnail image path
    // For local MP4 files, use the local path:
    videoUrl: '/assets/images_and_videos/wedding/mehendi-highlight.mp4'
  },
```

---

## 3. Playback Controls
- **YouTube/Vimeo links:** Played inside a responsive browser frame automatically.
- **Local .mp4 files:** Played using a custom HTML5 media player modal with built-in playback controls.
