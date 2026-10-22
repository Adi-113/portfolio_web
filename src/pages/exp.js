import React, { useState } from 'react';
import './exp.css';
export default function Timeline() {
  const [hoveredCard, setHoveredCard] = useState(null);
 
  const experience = [
    {
      id: 4,
      year: 'June 2026 - Present',
      title: 'Data Engineer',
      company: 'Techstar Group',
      description: 'Built metadata-driven Azure Data Factory pipelines from SQL Server, REST APIs, and CSV/JSON sources into ADLS Gen2, with incremental loads and scheduled daily and weekly batches. Designed bronze, silver, and gold layers with Databricks, PySpark, and Delta Lake, and wrote optimized analytics SQL with governed access through Unity Catalog.'
    },
    {
      id: 1,
      year: 'Sept 2025 - May 2026',
      title: 'Graduate Teaching Assistant',
      company: 'University of Massachusetts, Dartmouth',
      description: 'Assist students during lab sessions for Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA), providing hands-on guidance in coding and problem-solving to enhance student learning.'
    },
    {
      id: 2,
      year: 'Jan 2024 - July 2024',
      title: 'Business Analyst Intern',
      company: 'Darwinbox',
      description: 'Built custom LinkedIn data scraper extracting ~500 accounts per 30 minutes. Automated CRM workflows and analyzed customer data across five regions, developing dashboards that increased lead-to-customer conversion rates by 25%.'
    },
    {
      id: 3,
      year: 'Aug 2023 - Sept 2023',
      title: 'Data Analyst Intern',
      company: 'Gagellan Global Solutions Pvt Ltd',
      description: 'Enhanced loan eligibility due-diligence using LSTM-based time-series models, achieving 93% process efficiency. Designed scalable ETL pipelines using Azure Data Factory and built Power BI dashboards for predictive decision-making.'
    }
  ];

return (
    <div className="timeline-page">
 
      <div className="timeline-container">
        <div className="timeline-grid">
          {/* Experience Section */}
          <div className="timeline-section">

            <div className="timeline-line"></div>
            <div className="timeline-items">
              {experience.map((item) => (
                <div 
                  key={item.id} 
                  className="timeline-item"
                  onMouseEnter={() => setHoveredCard(`exp-${item.id}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="timeline-dot"></div>
                  <div className="notebook-card">
                    <div className="spiral-margin">
                      <div className="spiral-hole"></div>
                      <div className="spiral-hole"></div>
                      <div className="spiral-hole"></div>
                      <div className="spiral-hole"></div>
                      <div className="spiral-hole"></div>
                      <div className="spiral-hole"></div>
                    </div>
                    <div className="card-content">
                      <div className="card-year">{item.year}</div>
                      <h3 className="card-title">{item.title}</h3>
                      <div className="card-institution">{item.company}</div>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}