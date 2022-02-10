import bannana from '../Images/amazingCat.jpeg';

function Home() {
    return (
        <div className="row">
            <div className="col">
                <h1>This is home</h1>
                {/* <img src="/images/amazingCat.jpeg" /> */}
                <img src={bannana} />
            </div>
        </div>
    )
}

export default Home;