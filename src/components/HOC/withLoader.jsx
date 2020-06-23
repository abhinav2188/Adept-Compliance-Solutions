import React,{useState} from "react";
import Spinner from "../UI/spinner/spinner";

const withLoader = (WrappedComponent,spinnerColor) => {
  return (props) => {
    const [loading, setLoading] = useState(false);
    return (
        loading ? 
        <Spinner color={spinnerColor}/> :
        <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
    );
  };
};

export default withLoader;
