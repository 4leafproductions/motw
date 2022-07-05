import React from "react";
class Table extends React.Component{
    constructor(props) {
      super(props);
    }

    getHeader(props){
      const header = props.header;
      const columns = header.map((col) =>    <hr>{col}</hr>  );  return (
    <tr>{columns}</tr>  );
    }
  
    render(){
      return(
        <table className="table">
          {this.props.header && this.getHeader
          }
        </table>
      );
    }
  }
  export default Table;