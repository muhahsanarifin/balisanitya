import * as Feed from "../components/Feed";

const Error = () => {
  return (
    <main className="relative min-h-screen flex items-center">
      <Feed.NotFound status={"404"} msg={"Not Found"} />
    </main>
  );
};

export default Error;
