// Legacy route: redirect /portfolio/allprojects to /portfolio

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/portfolio",
      permanent: true,
    },
  };
}

const AllProjectsRedirect = () => null;

export default AllProjectsRedirect;
