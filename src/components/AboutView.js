import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quia aperiam eaque possimus repellat commodi accusamus animi et eveniet, quas ad voluptas aliquid beatae veritatis harum autem, neque necessitatibus odio minima quam enim reprehenderit minus, corporis iste. Mollitia, nostrum recusandae, assumenda possimus laborum optio, necessitatibus officia cupiditate deleniti explicabo ea.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;