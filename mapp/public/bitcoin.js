(function() {
      class Bitcoin extends React.Component {
        constructor(props) {
          super(props);
          this.state = { rate: 0 };
        }
        render() { 
          return (
            <div>bitcoin in USD: { this.state.rate }</div>
          );
        }
        componentDidMount() {
          let req = new XMLHttpRequest();
          req.addEventListener('load', () => {
            let resData = JSON.parse(req.responseText);
            let rate = resData.bpi.USD.rate_float;
            this.setState({ rate: rate });
          });
          req.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
          req.send();
        }
      }
      ReactDOM.render(<Bitcoin />, document.getElementById('bitcoin'));
})();

