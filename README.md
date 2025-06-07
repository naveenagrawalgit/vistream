# 🌟 ViStream - Modern Video Streaming Platform

![ViStream Banner](https://github.com/naveenagrawalgit/vistream/blob/main/public/images/banner.png?raw=true)

ViStream is a cutting-edge video streaming web application built with React that delivers high-quality video content with an immersive user experience. Designed with performance and usability in mind, ViStream features adaptive bitrate streaming, intuitive content discovery, and seamless cross-device compatibility.

## 🎥 Key Features

<div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 25px 0;">
    <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 20px; border-radius: 12px; color: white; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">
        <h3>🎬 Adaptive Bitrate Streaming</h3>
        <p>Automatically adjusts video quality based on network conditions for uninterrupted viewing</p>
    </div>
    <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%); padding: 20px; border-radius: 12px; color: white; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">
        <h3>🔍 Intelligent Content Discovery</h3>
        <p>AI-powered recommendations and semantic search functionality </p>
    </div>
    <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #2af598 0%, #009efd 100%); padding: 20px; border-radius: 12px; color: white; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">
        <h3>📱 Responsive Design</h3>
        <p>Fully responsive interface that works seamlessly across mobile, tablet, and desktop</p>
    </div>
    <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%); padding: 20px; border-radius: 12px; color: #333; box-shadow: 0 6px 15px rgba(0,0,0,0.2);">
        <h3>⚡ Performance Optimized</h3>
        <p>Efficient memory access patterns and optimized rendering pipeline </p>
    </div>
</div>

## 🛠 Technology Stack

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 25px 0;">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white" alt="FFmpeg">
    <img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white" alt="WebRTC">
    <img src="https://img.shields.io/badge/Video.js-40AEF0?style=for-the-badge&logo=video.js&logoColor=white" alt="Video.js">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB v6+
- FFmpeg (for video processing)

### Installation
```bash
# Clone the repository
git clone https://github.com/naveenagrawalgit/vistream.git

# Navigate to project directory
cd vistream

# Install dependencies
npm install

# Set environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables
Configure your `.env` file with the following settings:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vistream
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

## 📂 Project Structure

```
vistream/
├── public/                  # Static assets
│   ├── images/              # Application images
│   ├── videos/              # Sample video content
│   └── index.html           # Main HTML entry point
├── src/                     # Application source code
│   ├── assets/              # Additional assets (icons, fonts)
│   ├── components/          # Reusable React components
│   │   ├── Header/          # Navigation header
│   │   ├── VideoPlayer/     # Custom video player component
│   │   ├── VideoCard/       # Video thumbnail cards
│   │   ├── SearchBar/       # Intelligent search component
│   │   └── ...
│   ├── context/             # React context providers
│   │   ├── AuthContext.js   # Authentication state
│   │   └── VideoContext.js  # Video data management
│   ├── pages/               # Application views
│   │   ├── Home/            # Landing page
│   │   ├── Watch/           # Video playback page
│   │   ├── Library/         # User's video collection
│   │   ├── Upload/          # Video upload interface
│   │   └── ...
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── App.js               # Root application component
│   └── index.js             # Application entry point
├── .gitignore               # Git ignore configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## ✨ Advanced Features

### Adaptive Streaming Architecture
ViStream implements a sophisticated video delivery system that dynamically adjusts streaming quality based on:

```mermaid
graph LR
A[Video Source] --> B(FFmpeg Transcoding)
B --> C{Multi-bitrate Encoding}
C --> D[1080p@8Mbps]
C --> E[720p@4Mbps]
C --> F[480p@2Mbps]
C --> G[360p@1Mbps]
D --> H[MPEG-DASH Manifest]
E --> H
F --> H
G --> H
H --> I[Adaptive Player]
I --> J{Network Conditions}
J -->|Good| K[Highest Quality]
J -->|Average| L[Medium Quality]
J -->|Poor| M[Lower Quality]
```

### AI-Enhanced Content Discovery
Incorporates state-of-the-art multimodal understanding techniques inspired by recent computer vision research:
- Semantic video analysis for content-based recommendations 
- Temporal action localization for scene understanding
- Vision-language models for content tagging and search 

## 📸 Application Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin: 30px 0;">
    <img src="https://github.com/naveenagrawalgit/vistream/blob/main/public/screenshots/home.png?raw=true" alt="Home Page" style="width: 30%; min-width: 280px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); border: 1px solid #eee;">
    <img src="https://github.com/naveenagrawalgit/vistream/blob/main/public/screenshots/player.png?raw=true" alt="Video Player" style="width: 30%; min-width: 280px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); border: 1px solid #eee;">
    <img src="https://github.com/naveenagrawalgit/vistream/blob/main/public/screenshots/mobile.png?raw=true" alt="Mobile View" style="width: 30%; min-width: 280px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); border: 1px solid #eee;">
</div>

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Report Issues**: Found a bug? Open an issue with detailed reproduction steps
2. **Suggest Features**: Have an idea for improvement? Share your proposal
3. **Submit Pull Requests**: Follow our contribution workflow:
   ```mermaid
   graph LR
   A[Fork Repository] --> B[Create Feature Branch]
   B --> C[Implement Changes]
   C --> D[Write Tests]
   D --> E[Submit PR]
   E --> F[Code Review]
   F --> G[Merge to Main]
   ```

### Development Scripts
```bash
# Run development server
npm run dev

# Build production bundle
npm run build

# Run test suite
npm test

# Lint codebase
npm run lint
```

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact
**Naveen Agrawal**  
- GitHub: [@naveenagrawalgit](https://github.com/naveenagrawalgit)  
- Project Link: [https://github.com/naveenagrawalgit/vistream](https://github.com/naveenagrawalgit/vistream)

## 🙏 Acknowledgments
- Video.js team for the powerful player framework
- FFmpeg community for video processing tools
- React community for component architecture
- Recent computer vision research that inspired our AI features 
- Memory optimization techniques from modern architectures 

---
<p align="center">
  ⭐️ If you find this project useful, please consider giving it a star on GitHub! ⭐️
</p>
