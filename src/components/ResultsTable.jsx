import React from "react";
class ResultsTable extends React.Component{
    constructor(props) {
      super(props);
    }

    getHeader(props){
      const header = this.props.header;
      const columns = header.map((col) =>   <th><br/>{col}</th>  );
      return (
        <thead><tr>{columns}<th className="tableActionCell"></th></tr></thead>  );
    }
    getResults(props){
      const rows =this.props.results.map((row) =>
        <tr>
          <td>{row.name}</td>
          <td>{row.keeper}</td>
          <td className="tableActionCell">Join</td>
        </tr>
      );
      return(
        <tbody>{rows} <tr><td><br/></td><td><br/></td><td className="tableActionCell"><br/></td></tr></tbody>
      );
    }
  
    render(){
      return(
        <table className="table">
          {this.props.header && this.getHeader()
          }
          {this.getResults()}          
        </table>
      );
    }
  }
  export default ResultsTable;