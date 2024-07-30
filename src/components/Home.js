import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error dolor, laudantium rem beatae reiciendis enim pariatur sint dolores, nostrum adipisci? Eveniet quae, culpa odio fuga iusto fugiat rerum obcaecati.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;