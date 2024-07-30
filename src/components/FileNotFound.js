import Hero from "./Hero";

const FileNotFound = () => {
  return (
    <>
      <Hero text="404 - Page not found" />
      <h2 className="text-center mt-5">Sorry, no such page exists.</h2>
    </>
      

  );
}

export default FileNotFound;