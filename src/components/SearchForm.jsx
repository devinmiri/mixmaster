import { useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form } from "react-router-dom";

const SearchForm = ({serachTerm}) => {
  const submitting = useNavigation().state === "submitting";

  return (
    <Wrapper>
      <Form  className="form">
        <input type="search" className="form-input" name="search" defaultValue={serachTerm}/>
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Searching" : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
