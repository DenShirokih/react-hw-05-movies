import { Field, Formik, Form } from 'formik';
import { Input, InputContainer } from './SearchBar.styles';

const value = {
  query: '',
};

export const SearchBar = ({ searchHandler }) => {
  const handleSubmit = (value, { resetForm }) => {
    const { query } = value;
    searchHandler(query);
    resetForm();
  };
  return (
    <InputContainer>
      <Formik initialValues={value} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Field
            as={Input}
            type="text"
            name="query"
            placeholder="Search films"
          />
        </Form>
      </Formik>
    </InputContainer>
  );
};

// const [inputValue, setInputValue] = useState('');
// const handleChange = evt => setInputValue(evt.target.value);
// const submitHandler = evt => {
//   evt.preventDefault();

//   if (inputValue.trim() === '') {
//     return alert('Enter your request, please');
//   }
//   searchHandler(inputValue.trim().toLowerCase());
// };

// return (
//   <>
//     <form onSubmit={submitHandler}>
//       <input
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Searh Movies"
//       />
//     </form>
//     {/* <Formik onSubmit={submitHandler} initialValues={inputValue}>
//       <Form autoComplete="off">
//         <Field  type="text" />
//       </Form>
//     </Formik> */}
//   </>
// );
