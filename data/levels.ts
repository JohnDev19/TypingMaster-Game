"use client"

import type { Level } from "../types/game"

export const levels: Level[] = [
  // Easy Mode (Levels 1-15)
  {
    id: 1,
    difficulty: "easy",
    text: "The quick brown fox jumps over the lazy dog.",
    targetWPM: 15,
    timeLimit: 60,
    category: "Basic",
  },
  {
    id: 2,
    difficulty: "easy",
    text: "A journey of a thousand miles begins with a single step.",
    targetWPM: 18,
    timeLimit: 60,
    category: "Quotes",
  },
  {
    id: 3,
    difficulty: "easy",
    text: "Practice makes perfect when you type every day.",
    targetWPM: 20,
    timeLimit: 60,
    category: "Motivation",
  },
  {
    id: 4,
    difficulty: "easy",
    text: "The sun rises in the east and sets in the west.",
    targetWPM: 22,
    timeLimit: 60,
    category: "Facts",
  },
  {
    id: 5,
    difficulty: "easy",
    text: "Learning to type fast requires patience and dedication.",
    targetWPM: 25,
    timeLimit: 60,
    category: "Skills",
  },
  {
    id: 6,
    difficulty: "easy",
    text: "Technology has changed the way we communicate today.",
    targetWPM: 27,
    timeLimit: 60,
    category: "Technology",
  },
  {
    id: 7,
    difficulty: "easy",
    text: "Reading books expands your knowledge and vocabulary.",
    targetWPM: 30,
    timeLimit: 60,
    category: "Education",
  },
  {
    id: 8,
    difficulty: "easy",
    text: "Music has the power to heal and inspire people.",
    targetWPM: 32,
    timeLimit: 60,
    category: "Arts",
  },
  {
    id: 9,
    difficulty: "easy",
    text: "Exercise regularly to maintain good health and fitness.",
    targetWPM: 35,
    timeLimit: 60,
    category: "Health",
  },
  {
    id: 10,
    difficulty: "easy",
    text: "Friendship is one of the most valuable treasures in life.",
    targetWPM: 37,
    timeLimit: 60,
    category: "Relationships",
  },
  {
    id: 11,
    difficulty: "easy",
    text: "Success comes to those who work hard and never give up.",
    targetWPM: 40,
    timeLimit: 60,
    category: "Success",
  },
  {
    id: 12,
    difficulty: "easy",
    text: "Nature provides us with beauty and resources for survival.",
    targetWPM: 42,
    timeLimit: 60,
    category: "Nature",
  },
  {
    id: 13,
    difficulty: "easy",
    text: "Creativity allows us to solve problems in innovative ways.",
    targetWPM: 45,
    timeLimit: 60,
    category: "Innovation",
  },
  {
    id: 14,
    difficulty: "easy",
    text: "Time management is essential for achieving your goals.",
    targetWPM: 47,
    timeLimit: 60,
    category: "Productivity",
  },
  {
    id: 15,
    difficulty: "easy",
    text: "Kindness costs nothing but means everything to others.",
    targetWPM: 50,
    timeLimit: 60,
    category: "Values",
  },

  // Medium Mode (Levels 16-30)
  {
    id: 16,
    difficulty: "medium",
    text: "The advancement of artificial intelligence has revolutionized numerous industries and transformed the way we approach complex problem-solving.",
    targetWPM: 52,
    timeLimit: 90,
    category: "Technology",
  },
  {
    id: 17,
    difficulty: "medium",
    text: "Environmental sustainability requires collective action from governments, corporations, and individuals to address climate change effectively.",
    targetWPM: 55,
    timeLimit: 90,
    category: "Environment",
  },
  {
    id: 18,
    difficulty: "medium",
    text: "Quantum computing represents a paradigm shift in computational power, promising to solve previously intractable mathematical problems.",
    targetWPM: 58,
    timeLimit: 90,
    category: "Science",
  },
  {
    id: 19,
    difficulty: "medium",
    text: "Globalization has interconnected economies worldwide, creating both opportunities for growth and challenges for local businesses.",
    targetWPM: 60,
    timeLimit: 90,
    category: "Economics",
  },
  {
    id: 20,
    difficulty: "medium",
    text: "Neuroscience research continues to unveil the mysteries of human consciousness and the intricate workings of the brain.",
    targetWPM: 62,
    timeLimit: 90,
    category: "Science",
  },
  {
    id: 21,
    difficulty: "medium",
    text: "Digital transformation has accelerated across industries, requiring organizations to adapt their strategies and embrace new technologies.",
    targetWPM: 65,
    timeLimit: 90,
    category: "Business",
  },
  {
    id: 22,
    difficulty: "medium",
    text: "Renewable energy sources such as solar and wind power are becoming increasingly cost-effective alternatives to fossil fuels.",
    targetWPM: 67,
    timeLimit: 90,
    category: "Energy",
  },
  {
    id: 23,
    difficulty: "medium",
    text: "Cryptocurrency and blockchain technology have disrupted traditional financial systems and created new investment opportunities.",
    targetWPM: 70,
    timeLimit: 90,
    category: "Finance",
  },
  {
    id: 24,
    difficulty: "medium",
    text: "Machine learning algorithms can analyze vast datasets to identify patterns and make predictions with remarkable accuracy.",
    targetWPM: 72,
    timeLimit: 90,
    category: "AI",
  },
  {
    id: 25,
    difficulty: "medium",
    text: "Biotechnology innovations are advancing personalized medicine and enabling targeted treatments for various genetic disorders.",
    targetWPM: 75,
    timeLimit: 90,
    category: "Medicine",
  },
  {
    id: 26,
    difficulty: "medium",
    text: "Space exploration missions continue to expand our understanding of the universe and search for signs of extraterrestrial life.",
    targetWPM: 77,
    timeLimit: 90,
    category: "Space",
  },
  {
    id: 27,
    difficulty: "medium",
    text: "Cybersecurity threats are evolving rapidly, requiring sophisticated defense mechanisms to protect sensitive data and infrastructure.",
    targetWPM: 80,
    timeLimit: 90,
    category: "Security",
  },
  {
    id: 28,
    difficulty: "medium",
    text: "Sustainable agriculture practices aim to increase food production while minimizing environmental impact and preserving biodiversity.",
    targetWPM: 82,
    timeLimit: 90,
    category: "Agriculture",
  },
  {
    id: 29,
    difficulty: "medium",
    text: "Virtual reality technology is transforming education, entertainment, and training by creating immersive digital experiences.",
    targetWPM: 85,
    timeLimit: 90,
    category: "VR",
  },
  {
    id: 30,
    difficulty: "medium",
    text: "Gene editing techniques like CRISPR offer unprecedented possibilities for treating genetic diseases and enhancing human capabilities.",
    targetWPM: 87,
    timeLimit: 90,
    category: "Genetics",
  },

  // Hard Mode (Levels 31-45)
  {
    id: 31,
    difficulty: "hard",
    text: "function calculateFibonacci(n) { return n <= 1 ? n : calculateFibonacci(n-1) + calculateFibonacci(n-2); }",
    targetWPM: 90,
    timeLimit: 120,
    category: "Programming",
  },
  {
    id: 32,
    difficulty: "hard",
    text: "The implementation of microservices architecture requires careful consideration of service boundaries, data consistency, and inter-service communication protocols.",
    targetWPM: 92,
    timeLimit: 120,
    category: "Architecture",
  },
  {
    id: 33,
    difficulty: "hard",
    text: "SELECT users.name, COUNT(orders.id) as order_count FROM users LEFT JOIN orders ON users.id = orders.user_id GROUP BY users.id;",
    targetWPM: 95,
    timeLimit: 120,
    category: "SQL",
  },
  {
    id: 34,
    difficulty: "hard",
    text: "Quantum entanglement demonstrates non-local correlations between particles, challenging our classical understanding of reality and causality.",
    targetWPM: 97,
    timeLimit: 120,
    category: "Physics",
  },
  {
    id: 35,
    difficulty: "hard",
    text: 'const asyncFunction = async () => { try { const response = await fetch("/api/data"); return await response.json(); } catch (error) { console.error(error); } };',
    targetWPM: 100,
    timeLimit: 120,
    category: "JavaScript",
  },
  {
    id: 36,
    difficulty: "hard",
    text: "Neuroplasticity research reveals the brain's remarkable ability to reorganize and adapt throughout life, forming new neural pathways and connections.",
    targetWPM: 102,
    timeLimit: 120,
    category: "Neuroscience",
  },
  {
    id: 37,
    difficulty: "hard",
    text: 'import React, { useState, useEffect } from "react"; const Component = () => { const [data, setData] = useState(null); useEffect(() => { fetchData(); }, []); };',
    targetWPM: 105,
    timeLimit: 120,
    category: "React",
  },
  {
    id: 38,
    difficulty: "hard",
    text: "Cryptographic hash functions ensure data integrity by producing fixed-size outputs that are computationally infeasible to reverse or forge.",
    targetWPM: 107,
    timeLimit: 120,
    category: "Cryptography",
  },
  {
    id: 39,
    difficulty: "hard",
    text: "class BinarySearchTree { constructor() { this.root = null; } insert(value) { this.root = this.insertNode(this.root, value); } }",
    targetWPM: 110,
    timeLimit: 120,
    category: "Data Structures",
  },
  {
    id: 40,
    difficulty: "hard",
    text: "Epigenetic modifications can alter gene expression without changing DNA sequences, influencing phenotypic traits across generations.",
    targetWPM: 112,
    timeLimit: 120,
    category: "Epigenetics",
  },
  {
    id: 41,
    difficulty: "hard",
    text: "docker run -d --name webapp -p 8080:80 -v /host/data:/container/data --env NODE_ENV=production my-app:latest",
    targetWPM: 115,
    timeLimit: 120,
    category: "Docker",
  },
  {
    id: 42,
    difficulty: "hard",
    text: "Metamorphic testing validates software by checking relations between multiple executions rather than verifying specific input-output pairs.",
    targetWPM: 117,
    timeLimit: 120,
    category: "Testing",
  },
  {
    id: 43,
    difficulty: "hard",
    text: "kubectl apply -f deployment.yaml && kubectl expose deployment webapp --type=LoadBalancer --port=80 --target-port=8080",
    targetWPM: 120,
    timeLimit: 120,
    category: "Kubernetes",
  },
  {
    id: 44,
    difficulty: "hard",
    text: "Topological quantum computing leverages anyons and braiding operations to perform fault-tolerant quantum computations resistant to decoherence.",
    targetWPM: 122,
    timeLimit: 120,
    category: "Quantum",
  },
  {
    id: 45,
    difficulty: "hard",
    text: 'git checkout -b feature/new-functionality && git add . && git commit -m "Implement advanced caching mechanism" && git push origin feature/new-functionality',
    targetWPM: 125,
    timeLimit: 120,
    category: "Git",
  },

  // Master Mode (Levels 46-50)
  {
    id: 46,
    difficulty: "master",
    text: "The phenomenological reduction, as conceived by Edmund Husserl, involves bracketing the natural attitude to examine consciousness in its pure intentional structure, thereby revealing the transcendental ego as the ultimate source of meaning constitution.",
    targetWPM: 130,
    timeLimit: 150,
    category: "Philosophy",
  },
  {
    id: 47,
    difficulty: "master",
    text: "template<typename T> class SmartPointer { private: T* ptr; public: explicit SmartPointer(T* p = nullptr) : ptr(p) {} ~SmartPointer() { delete ptr; } T& operator*() const { return *ptr; } };",
    targetWPM: 135,
    timeLimit: 150,
    category: "C++",
  },
  {
    id: 48,
    difficulty: "master",
    text: "Gödel's incompleteness theorems demonstrate that any consistent formal system capable of expressing basic arithmetic contains statements that are true but unprovable within the system, fundamentally limiting the scope of mathematical formalization.",
    targetWPM: 140,
    timeLimit: 150,
    category: "Mathematics",
  },
  {
    id: 49,
    difficulty: "master",
    text: "fn quicksort<T: Ord>(mut vec: Vec<T>) -> Vec<T> { if vec.len() <= 1 { return vec; } let pivot = vec.remove(0); let (mut less, mut greater): (Vec<T>, Vec<T>) = vec.into_iter().partition(|x| x < &pivot); }",
    targetWPM: 145,
    timeLimit: 150,
    category: "Rust",
  },
  {
    id: 50,
    difficulty: "master",
    text: "The anthropic principle suggests that the observed values of physical constants are constrained by the requirement that the universe must be compatible with the conscious observers who measure them, raising profound questions about the nature of cosmic fine-tuning and multiverse theories.",
    targetWPM: 150,
    timeLimit: 150,
    category: "Cosmology",
  },
]
