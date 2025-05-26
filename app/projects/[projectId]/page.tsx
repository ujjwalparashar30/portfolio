"use` client";
import ProjectDetail from '@/components/ProjectDetail';

type Props = {
  params: {
    projectId: string;
  };
};

const page = ({ params }: Props) => {
    const { projectId } = params;
  return (
    <ProjectDetail params={{ id: projectId }} />
  )
}

export default page