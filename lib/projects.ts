const projects = [
  {
    id: 1,
    title: "Zashion",
    description: "Real-time trend tracker for fashion designers with interactive canvas and live data visualization.",
    longDescription:
      "A comprehensive fashion trend tracking platform that uses React Konva for interactive canvas manipulation and WebSockets for real-time data updates. Features include trend analysis, designer collaboration tools, and live market insights. The platform enables fashion designers to visualize trends, collaborate in real-time, and make data-driven decisions for their collections.",
    tags: ["React Konva", "WebSockets", "Node.js", "MongoDB"],
    category: "WebApp",
    github: "https://github.com/ujjwalparashar30",
    demo: "https://spontaneous-cobbler-2978a6.netlify.app/",
    image: "/projects/zashion/analytics.png",
    images: [
      "/projects/zashion/profile.png",
      "/projects/zashion/flowDiagram.png",
      "/projects/zashion/topCreators.png",
      "/projects/zashion/analytics2.png",
      "/projects/zashion/chat.png",
      "/projects/zashion/collaboration.png",
    ],
    features: ["Real-time collaboration", "Interactive canvas", "Trend analytics", "Market insights"],
    techDetails: {
      frontend: ["React", "React Konva", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "WebSockets", "Socket.io"],
      database: ["MongoDB", "Mongoose"],
      deployment: ["Netlify", "Render", "MongoDB Atlas","Cloudinary"]
    },
    challenges: [
      "Implementing real-time canvas synchronization across multiple users",
      "Optimizing performance for large datasets and complex visualizations",
      "Creating an intuitive UX for complex fashion trend data"
    ],
    timeline: "2 months",
    teamSize: "Solo Project",
    status: "Live",
    year: "2024"
  },
  {
    id: 2,
    title: "Diachain Warfare",
    description: "Blockchain-powered multiplayer game with 3D graphics and decentralized player interactions.",
    longDescription:
      "An innovative blockchain-based multiplayer game featuring 3D graphics, smart contract integration, and decentralized gameplay mechanics. Players can earn, trade, and battle using blockchain technology. The game implements NFT-based character ownership, tokenized rewards, and decentralized tournament systems.",
    tags: ["React", "Three.js", "Diamante", "Blockchain"],
    category: "Blockchain",
    github: "https://github.com/ujjwalparashar30",
    demo: "https://diachain-warfare.vercel.app/login",
    image: "/projects/diachain/multiplayer.png",
    images: [
      "/projects/diachain/entry.png",
      "/projects/diachain/home.png",
      "/projects/diachain/keyPair.png",
      "/projects/diachain/marketPlace.png",
      "/projects/diachain/multiplayer.png",
    ],
    features: ["3D graphics", "Smart contracts", "Multiplayer", "NFT integration"],
    techDetails: {
      frontend: ["React", "Three.js", "Web3.js", "TypeScript"],
      blockchain: ["Diamante Network", "Smart Contracts", "MetaMask"],
      backend: ["Node.js", "WebSockets", "Express"],
      deployment: ["Vercel", "Diamante Testnet"]
    },
    challenges: [
      "Integrating 3D graphics with blockchain transactions",
      "Managing game state synchronization across blockchain",
      "Optimizing gas costs for frequent game interactions"
    ],
    timeline: "4 months",
    teamSize: "3 developers",
    status: "Live",
    year: "2024"
  },
  {
    id: 3,
    title: "Crypto Payment Gateway",
    description: "Ethereum-based secure payment flow with smart contract integration and wallet connectivity.",
    longDescription:
      "A secure, scalable cryptocurrency payment gateway supporting multiple wallets and cryptocurrencies. Features include smart contract automation, transaction monitoring, and merchant dashboard. The platform enables businesses to accept crypto payments with automatic conversion, fraud detection, and comprehensive analytics.",
    tags: ["Solidity", "Web3.js", "Ethereum", "React"],
    category: "Blockchain",
    github: "https://github.com/ujjwalparashar30",
    demo: "https://crypto-payment-gateway-one.vercel.app/",
    image: "/projects/cryptoPaymentGateway/landing.png",
    images: [
      "/projects/cryptoPaymentGateway/paymentFlow.png",
      "/projects/cryptoPaymentGateway/landing.png",
      "/projects/cryptoPaymentGateway/transactions.png",
      "/projects/cryptoPaymentGateway/footer.png",
      "/projects/cryptoPaymentGateway/etherscan.png",
    ],
    features: ["Smart contracts", "Transaction monitoring", "Merchant tools"],
    techDetails: {
      frontend: ["React", "Web3.js", "TypeScript", "Tailwind CSS"],
      blockchain: ["Solidity", "Ethereum", "MetaMask", "Ethers.js"],
      smartContracts: ["Solidity", "Truffle", "Hardhat"],
      backend: ["Node.js", "Express"],
      deployment: ["Vercel", "Ethereum Tesnet"]
    },
    challenges: [
      "Ensuring secure handling of private keys and transactions",
      "Implementing multi-chain support with consistent UX",
      "Building robust error handling for blockchain interactions"
    ],
    timeline: "3 days",
    teamSize: "Solo Project",
    status: "Live",
    year: "2024"
  },
  {
    id: 4,
    title: "Inventory IoT System",
    description: "Real-time inventory tracker with ESP32 microcontrollers and barcode scanning capabilities.",
    longDescription:
      "An IoT-powered inventory management system using ESP32 microcontrollers, barcode scanning, and real-time dashboard. Includes automated alerts, analytics, and mobile app integration. The system provides real-time tracking of inventory levels, automated reordering, and comprehensive analytics for warehouse management.",
    tags: ["ESP32", "IoT", "React", "Real-time"],
    category: "IoT",
    github: "https://github.com/ujjwalparashar30",
    demo: "#",
    image: "/projects/barcode/pcbDesign.jpg",
    images: [
      "/projects/barcode/pcbDesign.jpg",
      "/projects/barcode/authentication.jpg",
      "/projects/barcode/home.jpg",
      "/projects/barcode/hardware.jpg",
    ],
    features: ["Real-time tracking", "Barcode scanning", "Mobile app", "Analytics dashboard"],
    techDetails: {
      hardware: ["ESP32", "Barcode Scanners", "RFID", "Sensors"],
      firmware: ["Arduino IDE", "C++", "WiFi", "MQTT"],
      backend: ["Node.js", "Express", "PostgreSQL", "WebSockets"],
      frontend: ["React Native", "React", "Chart.js", "Real-time Updates"]
    },
    challenges: [
      "Ensuring reliable WiFi connectivity in warehouse environments",
      "Optimizing battery life for mobile scanning devices",
      "Handling large volumes of real-time sensor data"
    ],
    timeline: "6 months",
    teamSize: "2 developers",
    status: "Development",
    year: "2024"
  }
]
export default projects;