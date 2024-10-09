import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadMore() {


    const [product, setproduct] = useState({})
    const { id } = useParams();
    let apiUrl = 'http://localhost:4000/plastic/' + id;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((product) => setproduct(product))

    }, [id]);


    return (
        <>
         <div class="container ">
         <div class="row">
            <div class="col-md">
            <div class="text-center   rounded m-4 ">
                <img src={product.image} class="rounded" alt="..." />
            </div>
            </div>
            </div>
            <div class="row">
                    <div class="col-md product">
                        <h2>{product.name}</h2>
                        <h5>
                        <p>Price: ₹{product.price}</p>                        

                        </h5>
                            <h6>description:-</h6>
                        <p style={{marginLeft:"70px"}}>
                            {product.description}</p>
                            
                    </div>
                </div>
            </div>

        </>
    )


}
export default ReadMore;