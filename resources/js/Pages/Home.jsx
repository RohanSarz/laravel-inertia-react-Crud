import Layout from "../Layouts/Layout";

function Home({ name }) {
    return (
        <div className="text-4xl font-bold w-screen text-center">
            Home {name}
        </div>
    );
}

Home.layout = page => <Layout children={page} />;

export default Home;
