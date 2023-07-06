import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Modal from 'bootstrap/js/dist/modal';

const Cart = () => {
    const modalRef = useRef(null);
    const { cart, increment, decrement, total } = useContext(AppContext);
    // const navigate = useNavigate();

    useEffect(() => {
        const modalElement = modalRef.current;
        const bootstrapModal = new Modal(modalElement);

        // Clean up function:
        return () => {
            if (bootstrapModal) {
                bootstrapModal.dispose();
            }
        };
    }, []);

    // const handleNavigate = () => {
    //     navigate(`/menu`);
    // }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body m-5">
                        <div className="container overflow-visible mb-5">
                            <h1 className="text-center my-4">Carro de compras</h1>
                            <h1>Cart total: {total}</h1>
                            <div className="row">
                                {cart && cart.map((pizza) => (
                                    <div className="col-12 col-md-4 mb-4 mx-auto" key={pizza.id}>
                                        <div className="card">
                                            <img src={pizza.img} alt={pizza.name} className='card-img-top' />
                                            <div className="card-body">
                                                <h5 className="card-title">{pizza.name}</h5>
                                                <p className="card-text">{pizza.desc}</p>
                                                <br />
                                                <p className="card-text">{pizza.ingredients}</p>
                                                <p className="card-text fs-3">${pizza.price}</p>
                                                <button onClick={() => increment(pizza.id)} className='btn btn-primary'>+</button>
                                                <span>{pizza.count}</span>
                                                <button onClick={() => decrement(pizza.id)} className='btn btn-primary'>-</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <Link to="/Carro" className="btn btn-primary">Ir al carro a pagar</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cart;
