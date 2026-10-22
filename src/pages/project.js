import React, { useState } from 'react';
import './project.css';
export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
    {
      id: 1,
      client: 'Network Analysis',
      title: 'Twitch Streamer Network Analysis',
      tags: ['Python', 'NetworkX', 'JavaScript', 'D3.js', 'Graph Theory'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2wyNnH0jxFkkGaPCrdznQ4pgWcMOqMTuWJS5Jl9r3fUdoH4VCW3VD_o&s=10',
      bullets: [
        'Implemented Louvain community detection on 200 streamers to map gameplay clusters, validating a "small-world" network structure with a 0.72 clustering coefficient.',
        'Analyzed temporal engagement metrics to optimize broadcast scheduling and built an interactive JavaScript dashboard to visualize critical "bridge" nodes that connect disparate gaming communities.'
      ],
      link: 'https://github.com/yourusername/twitch-network-analysis',
      color: '#9146ff'
    },
    {
      id: 2,
      client: 'Space Data',
      title: 'Asteroid Analysis',
      tags: ['Python', 'Random Forest', 'Monte Carlo', 'NASA API', 'Machine Learning'],
      image: 'https://letstalkscience.ca/sites/default/files/2019-12/Asteroids.jpg',
      bullets: [
        'Validated NASA\'s NeoWs dataset using a Physico-Optical consistency check to filter anomalies in size and reflectivity.',
        'Conducted orbital uncertainty analysis using Monte Carlo simulations, revealing that specific Amor and Apollo asteroids exhibit >10% hazard probability despite being labeled non-hazardous.',
        'Achieved 96.71% accuracy in hazard prediction by optimizing a Random Forest Classifier with SMOTETomek hybrid resampling method.'
      ],
      link: 'https://github.com/yourusername/asteroid-analysis',
      color: '#ff6b35'
    },
    {
      id: 3,
      client: 'Social Research',
      title: 'World Happiness Index Analysis',
      tags: ['R', 'Decision Trees', 'SVR', 'KNN', 'Statistical Analysis'],
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
      bullets: [
        'Led research and analysis of the World Happiness Index (2015–2022) using machine learning models, including Decision Tree Regression, Multiple Linear Regression, and Support Vector Regression, to uncover key factors influencing global happiness trends.',
        'Analyzed the impact of government policies on happiness scores to highlight key drivers of societal well-being, demonstrating expertise in statistical computing and data visualization using R.',
        'Enhanced understanding of factors driving happiness scores by applying the K-Nearest Neighbors (KNN) model to identify patterns and relationships within the data.'
      ],
      link: 'https://github.com/yourusername/happiness-index-analysis',
      color: '#00b4d8'
    },
    {
      id: 4,
      client: 'Data Engineering',
      title: 'Finance Data Engineering Pipeline',
      tags: ['Microsoft Fabric', 'PySpark', 'Delta Lake', 'Medallion Architecture', 'SCD Type 2', 'Star Schema'],
      image: 'https://umaine.edu/undiscoveredmaine/wp-content/uploads/sites/527/2020/08/Business-Finance-1.jpg',
      bullets: [
        'Architected an end-to-end Medallion data pipeline on Microsoft Fabric using PySpark and Delta Lake, processing more than 6.3 million financial transactions.',
        'Engineered a star-schema model with SCD Type 2 tracking and parameter-driven incremental loads, reducing processing time by 83%.',
        'Sustained a 99.8% data quality pass rate across the pipeline.'
      ],
      color: '#168a75'
    },
    {
      id: 5,
      client: 'Weather Data',
      title: 'Weather Data Pipeline',
      tags: ['Python', 'OpenWeatherMap API', 'AWS S3', 'Snowflake', 'SQL', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&q=80',
      bullets: [
        'Built a Python pipeline that ingests weather data from the OpenWeatherMap REST API, saves timestamped raw JSON responses to AWS S3, and loads the data into Snowflake.',
        'Designed a Snowflake VARIANT landing table and a 29-column structured table; wrote SQL to flatten nested JSON into typed weather fields, including temperature, humidity, wind, precipitation, sunrise, and sunset.',
        'Developed an interactive Streamlit dashboard for city-level temperature and humidity trends, managed credentials through environment variables, and configured a GitHub Actions CI workflow.'
      ],
      color: '#3c91b5'
    },
    {
      id: 6,
      client: 'AI Browser Extension',
      title: 'Medium Article Agent',
      tags: ['Browser Extension', 'JavaScript', 'LLM APIs', 'ReadableStream', 'MutationObserver', 'Browser Storage'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuJqkgIk16rdRdoj8qpRbuYWBSNQMtbh08HwKKDR8TOd3CxE5EzY6BNqR&s=10',
      bullets: [
        'Built a browser extension that embeds an AI chat sidebar in Medium articles, enabling contextual Q&A without leaving the page.',
        'Integrated Groq, OpenAI, Anthropic, Gemini, OpenRouter, and Together AI through provider-specific REST adapters, with real-time streaming via the ReadableStream API.',
        'Implemented SPA navigation detection with MutationObserver, History API interception, and URL polling, plus a content extraction pipeline that stores up to 15,000 characters using the browser storage API.'
      ],
      color: '#d9a441'
    }
  ];
 
  return (
    <div className="featured-projects">
      
      <div className="projects-container">

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="browser-header">
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
              </div>
              <div className="browser-body">
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="card-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              ×
            </button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-overlay"></div>
            </div>
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <ul className="modal-description">
                {selectedProject.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <div className="modal-label">Technologies Used</div>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}