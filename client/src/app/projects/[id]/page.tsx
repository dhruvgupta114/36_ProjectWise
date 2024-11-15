import Project from "./Project";

type Props = {
  params: Promise<{ id: string }>;
};

const ProjectPage = async ({ params }: Props) => {
  const { id } = await params; // Resolve the Promise here

  return <Project id={id} />;
};

export default ProjectPage;
