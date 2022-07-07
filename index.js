function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [ranQuotes, setRanQuotes] = React.useState([]);

    React.useEffect(() => {
        async function FetchData() {
            const response = await fetch("http://type.fit/api/quotes")
            const data = await response.json()

            setQuotes(data);
            let ranIndex = Math.floor(Math.random() * data.length)
            setRanQuotes(data[ranIndex]);
        }
        FetchData();
    })

    const getNewQuote = () => {
        let ranIndex = Math.floor(Math.random() * quotes.length)
        setRanQuotes(quotes[ranIndex])
    }

    return (
        <div className="container pt-5" >
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header"> Happy quotes </div>
                    <div className="card-body">  {(ranQuotes) ? (
                        <>
                            <h5 className="card-title"> - {ranQuotes.author || "No Author"} </h5>
                            <p className="card-text"> {ranQuotes.text}</p>
                        </>
                    ) : (
                        <h2>Loading...</h2>
                    )
                    }
                        <div className="row">
                            <button onClick={getNewQuote} className="btn btn-primary ml-3" > New Quote</button>
                            <a href="" className="btn btn-warning">
                                <i className="fa fa-twiiter"></i>
                            </a>
                            <a href="" className="btn btn-danger"></a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
ReactDOM.render(<App />, document.getElementById('app'))