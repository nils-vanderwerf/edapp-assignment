import Link from "next/link";
const exploreCategories = [
  {
    content: (
      <div className="category d-flex">
        <img src="images/global-clients-thumbnail.jpeg" />
        <Link href={`https://www.edapp.com/our-clients/`}>
          <a className="card-content">
            <div className="card-blog-title">
              Hear from some of our Global Clients
            </div>
          </a>
        </Link>
      </div>
    )
  },
  {
    content: (
      <div className="category d-flex">
        <img src="images/solutions-consultants-thumbnail.jpeg" />
        <Link href="mailto:demo@edapp.com">
          <a className="card-content">
            <div className="card-blog-title">
              <span>
                Book in a demonstration with one of our Solution Consultants
              </span>
            </div>
          </a>
        </Link>
      </div>
    )
  },
  {
    content: (
      <div className="category d-flex">
        <img src="images/demo-thumbnail.jpeg" />
        <Link href={`https://www.youtube.com/c/EdAppMicrolearning/`}>
          <a>
            <div className="card-blog-title">
              <span>See live authoring demonstrations on our YouTube page</span>
            </div>
          </a>
        </Link>
      </div>
    )
  },
  {
    content: (
      <div className="category d-flex">
        <img src="images/review-thumbnail.jpeg" />
        <Link href={`https://www.g2.com/products/edapp/reviews`}>
          <a>
            <div className="card-blog-title">
              <span>Read independent reviews of our platform on G2 Crowd</span>
            </div>
          </a>
        </Link>
      </div>
    )
  }
];

export default exploreCategories;
