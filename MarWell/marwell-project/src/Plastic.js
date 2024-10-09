import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Plastic() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = 'http://localhost:4000/plastic';

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);

    const formatePro = product.map(item => (
        <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
                <div className="card-image">
                    <img src={item.image} className="card-img-top img-fluid" alt={item.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text" style={{ color: "white" }}>Price: ₹{item.price}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/Plastic/${item.id}`} className="btn btn-primary">Read More...</Link>
                    <Link to={`/Update/${item.id}`} className="btn btn-warning">Edit</Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            fetch(`http://localhost:4000/plastic/remove/${item.id}`,
                                {
                                    method: "DELETE",
                                    body: JSON.stringify(product),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    }
                                })
                                .then(() => {
                                    navigate("/Plastic");
                                });
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <section className="container getAll">
            <div className="row">
                {formatePro}
            </div>
        </section>
    );
}

export default Plastic;