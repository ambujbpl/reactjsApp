import { even } from 'check-types';
import React, { useState, useEffect } from 'react';

const SearchBar = props => {
  const [ term, setTerm ] = useState('');
  useEffect(()=> {
    setTerm(props.term);
  },[]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  }
  const onFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(term,true);
  };
  return (    
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
}
// class SearchBar extends React.Component {
//   state = { term: '' };
//   componentDidMount() {
//     this.setState({term: this.props.term})
//   }
//   onInputChange = event => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = event => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term,true);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
