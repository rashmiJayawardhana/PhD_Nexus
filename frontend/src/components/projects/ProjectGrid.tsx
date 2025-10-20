// components/projects/ProjectGrid.tsx
import type { ProjectGridProps } from '@/types/project';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;