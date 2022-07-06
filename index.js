function App() {
    
    const [quotes, setQuotes] = React.useState([]); 
    const [ranQuotes, setRanQuotes] = React.useState([]);

    React.useEffect(()=> {
        async function FetchData(){
            const response = await fetch("http://type.fit/api/quotes")
            const data = await response.json()
            
            setQuotes(data);
            let ranIndex = Math.floor(Math.random() * data.length)
            setRanQuotes(data[ranIndex]); 
        }
        FetchData();
    })
    
    return( 
    <div>Hello World 
        {quotes.map(quote => 
            <div>{quote.text}</div>)}
    </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('app'))