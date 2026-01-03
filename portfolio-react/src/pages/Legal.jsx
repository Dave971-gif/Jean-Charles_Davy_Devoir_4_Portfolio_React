import { Helmet } from "react-helmet-async";

function Legal() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1>Mentions légales</h1>
    </>
  );
}

export default Legal;