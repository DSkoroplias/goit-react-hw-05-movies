import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './search-form.module.scss';
import initialState from './initialState';

// import useForm from '../../../shared/hooks/useForm';

const SearchForm = ({ onSubmit }) => {
  // const { state, handleChange, handleSubmit } = useForm({
  //   initialState,
  //   onSubmit,
  // });
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { search } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label></label>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Search posts"
          required
        />
        <button onSubmit={handleSubmit}>Search</button>
      </div>
    </form>
  );
};

export default memo(SearchForm);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class PostsSearchForm extends Component {
//   state = {
//     search: "",
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       search: "",
//     });
//   }

//   render() {
//     const { search } = this.state;
//     const { handleChange, handleSubmit } = this;

//     return (
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">Search posts</label>
//           <input
//             value={search}
//             onChange={handleChange}
//             type="text"
//             name="search"
//             placeholder="Search posts"
//             required
//           />
//         </div>
//       </form>
//     );
//   }
// }
