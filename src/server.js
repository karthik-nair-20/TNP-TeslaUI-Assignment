import { createServer, Model } from "miragejs";

createServer({
  models: {
    teslas: Model,
  },

  seeds(server) {

    server.create("tesla", { 
      id: "1",
      name: "Model S",
      range: "330 mi",
      acceleration: "3.5s",
      topSpeed: "155 mph",
      peakPower: "920 hp",
      price: "110,000",
      description:
        "Model S is built for speed and range, with beyond ludicrous acceleration",
      imageUrl: "/images/model-s.jpg",
      "interiorFeatures": [
        "16\" Center Touchscreen Display with updated interface",
        "Premium Vegan Leather Upholstery",
        "Heated and Ventilated Seats",
        "360-Degree Camera System",
        "Voice-Activated Controls for navigation, media, and climate",
        "Customizable Ambient Lighting"
      ],
      "exteriorFeatures": [
        "Autopilot Enhanced LED Headlights",
        "Solar Roof Panels (optional for extended range and battery life)",
        "Adaptive Aerodynamic Spoiler",
        "Self-Healing Paint Technology"
      ]    
    });

    server.create("tesla", {
      id: "2",
      name: "Model 3",
      range: "358 mi",
      acceleration: "3.1s",
      topSpeed: "162 mph",
      peakPower: "1,000 hp",
      price: "55,000",
      description: "Model 3 offers exceptional range and performance in a sleek, affordable package.",
      imageUrl: "/images/model-3.jpg", 
      interiorFeatures: [
        "Cinematic Display with left-right tilt",
        "Yoke Steering: A bold new approach to steering control",
        "Premium Audio: 22-speaker, 960-watt audio system with active noise canceling",
        "Wireless and USB-C smartphone charging",
        "HEPA air filtration system",
      ],
      exteriorFeatures: [
        "Glass Roof with ultraviolet and infrared protection",
        "Aerodynamic design for improved efficiency",
        "Power-folding, heated side mirrors",
        "Custom-designed alloy wheels",
        "LED fog lamps and adaptive LED headlights",
      ]
    });

    server.create("tesla", {
      id: "3",
      name: "Model X",
      range: "333 mi",
      acceleration: "2.5s",
      topSpeed: "175 mph",
      price: "120,000",
      peakPower: "1,020 hp",
      description: "Model X features impressive acceleration and the largest range of any electric SUV.",
      imageUrl: "/images/model-x.jpg",
      "interiorFeatures": [
        "16\" Center Touchscreen Display with updated interface",
        "Premium Vegan Leather Upholstery",
        "Heated and Ventilated Seats",
        "360-Degree Camera System",
        "Voice-Activated Controls for navigation, media, and climate",
        "Customizable Ambient Lighting"
      ],
      "exteriorFeatures": [
        "Autopilot Enhanced LED Headlights",
        "Solar Roof Panels (optional for extended range and battery life)",
        "Adaptive Aerodynamic Spoiler",
        "Self-Healing Paint Technology"
      ]
    
    });

    server.create("tesla", {
      id: "4",
      name: "Model Y",
      range: "330 mi",
      acceleration: "3.5s",
      topSpeed: "155 mph",
      price: "55,000",
      peakPower: "1,520 hp",
      description: "Model Y combines the best features of Model 3 with increased space and utility.",
      imageUrl: "/images/model-y.jpg", 
      "interiorFeatures": [
        "16\" Center Touchscreen Display with updated interface",
        "Premium Vegan Leather Upholstery",
        "Heated and Ventilated Seats",
        "360-Degree Camera System",
        "Voice-Activated Controls for navigation, media, and climate",
        "Customizable Ambient Lighting"
      ],
      "exteriorFeatures": [
        "Autopilot Enhanced LED Headlights",
        "Solar Roof Panels (optional for extended range and battery life)",
        "Adaptive Aerodynamic Spoiler",
        "Self-Healing Paint Technology"
      ]    
    });
  },

  routes() {
    this.namespace = "api";

    // Route to get all Tesla models
    this.get("/teslas", (schema) => {
      return schema.teslas.all();
    });

    this.get("/teslas/:id", (schema, request) => {
      const id = request.params.id;
      return schema.teslas.find(id);
    });    

  },
});