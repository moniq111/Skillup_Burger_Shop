import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Número de pedido</th>
              <th>Estado</th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Método de pago</th>
              <th>Ver más</th>
            </tr>
          </thead>

            
            <tbody>
                {arr.map((i) => (
            <tr key={i}>
              <td>#ON????????</td>
              <td>En curso</td>
              <td>3</td>
              <td>€ {16.00}</td>
              <td>pago contra entrega</td>           
              <td>
                      <Link to={`/order/${"ON00012345"}`}>
                      <AiOutlineEye />
                      </Link>
              </td>

            </tr>
            ))}

            </tbody>
            
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
