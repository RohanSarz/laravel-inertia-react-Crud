import Layout from "../Layouts/Layout";

function Home({ name }) {
    return (
        <div className="title">
            <span>Home {name}</span>
        </div>
    );
}

Home.layout = page => <Layout children={page} />;

export default Home;
