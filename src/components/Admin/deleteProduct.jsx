import React from 'react';
import PropTypes from 'prop-types';
import Auth from "../layout/auth";
import axios from "axios";
import Button from "../UI/Button";
import withLoader from "../HOC/withLoader";

const DeleteProduct = props => {

    async function deleteProduct(id){
        props.setLoading(true);
        try{
            const response = await axios.delete("products/"+id);
            console.log(response);
            props.setLoading(false);    
        }catch(error){
            props.setLoading(false);
        }
    }

    return (
        <Auth>
            <Button color="warning" onClick={()=>deleteProduct(props.id)}>delete</Button>
        </Auth>
    );

};

DeleteProduct.propTypes = {
    id:PropTypes.string
};

export default withLoader(DeleteProduct,"red");