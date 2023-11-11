import React from 'react';
import '../styles/Project.css';

const ProjectPage = () => {
    const projects = [
        {
            id: 1,
            title: '项目 1',
            description: '这是项目 1 的描述。',
            imageUrl: '/1.jpg',
            githubUrl: 'https://github.com/username/project1',
            demoUrl: 'https://demo.project1.com',
        },
        {
            id: 2,
            title: '项目 2',
            description: '这是项目 2 的描述。',
            imageUrl: '/2.jpg',
            githubUrl: 'https://github.com/username/project2',
            demoUrl: 'https://demo.project2.com',
        },
        // 添加更多项目...
    ];

    return (
        <div className="project-container">
            <h1 className="page-title">项目展示</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-wrapper">
                            <img className="project-image" src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
